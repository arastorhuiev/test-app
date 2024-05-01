const Header = () => {
  return (
    <header className="flex flex-col justify-center items-start px-16 py-3.5 w-full text-xl font-medium tracking-normal leading-8 text-teal-600 bg-white shadow-sm max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2.5 ml-40 max-md:ml-2.5">
        <div className="shrink-0 rounded-full border border-black border-solid bg-[linear-gradient(0deg,rgba(255,255,255,0.90_0%,rgba(255,255,255,0.90)_100%),#00A88A)] h-[34px] stroke-[1px] w-[34px]" />
        <div>NICE LOGO</div>
      </div>
    </header>
  );
};

export { Header };
