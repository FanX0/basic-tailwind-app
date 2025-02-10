import circleFanxLogo from "../assets/circleFanx.svg";
import motoGP from "../assets/motoGP.png";
import { Button } from "./ui/button";
import Arrow from "../assets/Arrow.svg";

const HomeBlog = () => {
  return (
    <div className="bg-purple-200">
      <div className="container mx-auto">
        <div className="flex flex-col p-20 ">
          <div className="py-8 text-2xl font-bold sm:text-4xl">
            Learning with me
          </div>
          <div className="">
            I made some useful UI Kits for designers of all levels that helps
            you speed up and spice up your designs.
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid gap-8 m-8 lg:grid-cols-3 md:grid-cols-1">
            <div className="p-2 bg-white border border-black w-96 h-80 rounded-xl borderku">
              <div className="w-full mx-auto bg-blue-500 h-52 rounded-xl">
                <img
                  src={motoGP}
                  alt="Fanx Logo"
                  className="w-full h-full mx-auto rounded-xl"
                />
              </div>
              <div className="flex items-center m-2 ">
                <div className="w-12 max-w-full ">
                  <img src={circleFanxLogo} alt="circleFanxLogo" />
                </div>
                <div className="p-2 pl-4 ">
                  <div className="text-lg font-semibold">Nama </div>
                  <div className="text-lg ">nama penulis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 p-20 ">
          <Button className="m-2 border border-black rounded-full w-14 h-14">
            <img className="" src={Arrow} alt="circleFanxLogo" />
          </Button>
          <div className="font-semibold">See More Details</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
