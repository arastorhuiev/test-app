import axios from "axios";
import { create } from "zustand";
import { User } from "../types/user.interface";
import { getUsersByStatus } from "../shared/helpers";

interface QueueStoreState {
  users: User[];
  inlineUsers: User[];
  inServiceUsers: User[];
  fetchUsers: () => void;
  addClient: (user?: User) => void;
  nextClient: () => void;
}

const useQueueStore = create<QueueStoreState>((set, get) => ({
  users: [],
  inlineUsers: [],
  inServiceUsers: [],
  fetchUsers: async () => {
    try {
      const { data } = await axios.get(
        "https://6061cac0ac47190017a71c0d.mockapi.io/api/Users/Persons"
      );

      set({
        users: data,
        inlineUsers: getUsersByStatus(data, 1),
        inServiceUsers: getUsersByStatus(data, 2),
      });
    } catch (err) {
      console.log(err);
    }
  },
  addClient: async (user?: User) => {
    try {
      const { data } = await axios.post(
        "https://6061cac0ac47190017a71c0d.mockapi.io/api/Users/Persons"
      );

      const inlineUsers = [...get().inlineUsers, data];
      const users = [...get().users, data];

      set((state) => ({ ...state, inlineUsers, users }));
    } catch (err) {
      console.log(err);
    }
  },
  nextClient: async () => {
    try {
      // const { data: prevUser } = await axios.put(
      //   "https://6061cac0ac47190017a71c0d.mockapi.io/api/Users/Persons/2"
      // );

      const prevUser: User | undefined = get().inServiceUsers[0];
      const nextUser: User | undefined = get().inlineUsers[0];

      const filteredServiceUsers = get().inServiceUsers.filter(
        (user) => user.id !== prevUser.id
      );
      const inlineUsers = get().inlineUsers.slice(1);

      const usersList = get().users;

      if (prevUser) {
        const prevUserIdxInUserList = usersList.findIndex(
          (user) => user.id === prevUser?.id
        );
        usersList[prevUserIdxInUserList].Status = 2;
      }

      if (nextUser) {
        const nextUserIdxInUserList = usersList.findIndex(
          (user) => user.id === nextUser?.id
        );
        usersList[nextUserIdxInUserList].Status = 0;
      }

      const inServiceUsers = [...filteredServiceUsers];

      if (nextUser) {
        inServiceUsers.push({ ...nextUser, Status: 2 });
      }

      set((state) => ({
        ...state,
        inServiceUsers,
        inlineUsers,
        users: usersList,
      }));
    } catch (err) {
      console.log(err);
    }
  },
}));

export { useQueueStore };
