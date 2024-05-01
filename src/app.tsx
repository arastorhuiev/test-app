import { useEffect } from "react";
import { useQueueStore } from "./store/queue";
import { Header } from "./components/header";
import * as Table from "./components/table";
import { getRandomID } from "./shared/helpers";

function App() {
  const { fetchUsers, inServiceUsers, inlineUsers, addClient, nextClient } =
    useQueueStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddClient = () => {
    addClient();
  };

  const handleNextClient = () => {
    nextClient();
  };

  return (
    <div className="flex flex-col pb-20 bg-stone-50">
      <Header />
      <div className="flex flex-col self-center px-5 mt-10 max-w-full w-[836px]">
        <div className="text-4xl font-bold tracking-wide leading-10 text-zinc-800 max-md:max-w-full">
          In service
        </div>
        <Table.Layout handle={handleNextClient}>
          {inServiceUsers.map((user) => {
            return <Table.Row key={getRandomID()} {...user}></Table.Row>;
          })}
        </Table.Layout>
        <div className="mt-14 text-4xl font-bold tracking-wide leading-10 text-zinc-800 max-md:mt-10 max-md:max-w-full">
          Clients in line
        </div>
        <div className="flex flex-col justify-center mt-7 bg-white rounded-lg shadow max-md:max-w-full">
          <div className="px-6 py-4 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch text-zinc-700 text-opacity-80 max-md:mt-10">
                  <input
                    // value="0"
                    placeholder="name user data"
                    className="justify-center px-3 py-5 text-base tracking-normal leading-5 rounded-lg border border-solid border-slate-900 border-opacity-20"
                  />

                  <div className="text-xs tracking-wide leading-5">
                    Name of the client you’re going to add in the line
                  </div>
                </div>
              </div>
              <button
                onClick={handleAddClient}
                className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full"
              >
                <div className="bg-emerald-600 justify-center self-stretch px-6 py-2 my-auto w-full text-base font-semibold tracking-wide leading-7 rounded-lg  text-white truncate max-md:px-5 max-md:mt-10">
                  + Add to the line
                </div>
              </button>
            </div>
          </div>
        </div>
        <Table.Layout>
          {inlineUsers.map((user) => {
            return <Table.Row key={getRandomID()} {...user}></Table.Row>;
          })}
        </Table.Layout>
      </div>
    </div>
  );
}

export default App;
