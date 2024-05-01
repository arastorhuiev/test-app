import { PropsWithChildren } from "react";
import { User } from "../types/user.interface";

interface TableProps {
  handle?: () => void;
}

const Layout = ({ handle, children }: PropsWithChildren<TableProps>) => {
  return (
    <div className="mt-8 flex flex-col pb-4 text-sm tracking-normal bg-white rounded-lg  max-w-[836px] text-zinc-800">
      <div className="border-b flex gap-0 px-6 w-full font-medium leading-6 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-1 justify-center items-start py-4 pr-6 pl-4 bg-white  max-md:pr-5">
          Number in line
        </div>
        <div className="flex-1 justify-center items-start py-4 pr-6 pl-4 bg-white  max-md:pr-5">
          Full name
        </div>
        <div className="flex-1 justify-center items-start py-4 pr-6 pl-4 bg-white  max-md:pr-5">
          Check-in time
        </div>
      </div>
      <div className="flex flex-col pb-4 text-sm tracking-normal bg-white rounded-lg  max-w-[836px] text-zinc-800 max-h-[200px] overflow-auto">
        {children}
      </div>
      {handle && (
        <button
          onClick={handle}
          className="justify-center self-end px-6 py-2 mt-4 mr-6 text-base font-semibold tracking-wide leading-7 text-white bg-emerald-600 rounded-lg  max-md:px-5 max-md:mr-2.5"
        >
          Next client
        </button>
      )}
    </div>
  );
};

const Row = ({ Status, FullName, dateTime }: User) => {
  return (
    <div className="border-b flex gap-0 px-6 w-full leading-[143%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex-1 justify-center items-start p-4 whitespace-nowrap bg-white  max-md:pr-5">
        {Status}
      </div>
      <div className="flex-1 justify-center items-start p-4 bg-white  max-md:pr-5">
        {FullName}
      </div>
      <div className="flex-1 justify-center items-start p-4 whitespace-nowrap bg-white  max-md:pr-5">
        {dateTime}
      </div>
    </div>
  );
};

export { Row, Layout };
