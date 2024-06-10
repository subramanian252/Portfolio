import Socials from "./Socials";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex lg:flex-row flex-col gap-y-5 justify-between items-center py-8  lg:px-36">
      <h1 className="lg:text-3xl text-2xl font-normal">
        Subramanian <span className="font-extralight">M</span>
      </h1>
      {/* <Socials /> */}
    </header>
  );
};

export default Header;
