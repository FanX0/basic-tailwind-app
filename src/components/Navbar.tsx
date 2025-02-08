const Navbar = () => {
  return (
    <div className="fixed w-full ">
      <div className="flex justify-around p-4 border-b-1 bg-white/10 backdrop-blur-md">
        <div>Farid Azhari Nurcahyo</div>
        <div className="flex gap-4">
          <div>Home</div>
          <div>About</div>
          <div>Work</div>
        </div>
        <div>Navbar</div>
      </div>
    </div>
  );
};

export default Navbar;
