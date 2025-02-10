const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full ">
      <div className="border-b-2 border-neutral-200/70 bg-white/60 backdrop-blur-md">
        <div className="container flex p-5 mx-auto">
          <div className="flex-none">Farid Azhari Nurcahyo</div>
          <div className="flex justify-center flex-grow gap-4 mx-auto ">
            <div>Home</div>
            <div>About</div>
            <div>Work</div>
          </div>
          <div>Navbar</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
