import { User } from "../types/user.interface";

const getUsersByStatus = (users: User[], status: User["Status"]) => {
  return users.filter((user) => user.Status === status);
};

const getRandomID = () => {
  return Math.random().toString(36).substring(2, 8);
};

export { getUsersByStatus, getRandomID };
