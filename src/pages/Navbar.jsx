function Navbar() {
  return (
    <nav className="flex border-b-[1px] shadow-sm p-4 justify-between items-center w-full max-w-[1440px] fixed bg-[rgb(252,252,253)]">
      <p className="font-semibold text-base cursor-pointer text-secondary">
        LucaDCZ
        <span className="leading-0 text-primary text-3xl leading-[0px]">.</span>
      </p>
      <div className="space-x-7 cursor-pointer">
        <a href="#" className="font-semibold text-lg text-primary">
          Home
        </a>
        <a
          href="#"
          className="font-semibold text-lg text-gray-700 hover:text-primary transition-all"
        >
          Projects
        </a>
        <a
          href="#"
          className="font-semibold text-lg text-gray-700 hover:text-primary transition-all"
        >
          About
        </a>
      </div>
      <p className="size-7 cursor-pointer border rounded-full p-1 bg-primary text-white font-semibold flex justify-center items-center">
        &amp;
      </p>
    </nav>
  );
}

export default Navbar;
