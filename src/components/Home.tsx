import { useState, useEffect } from "react";
import circleFanxLogo from "../assets/circleFanx.svg";
import Arrow from "../assets/Arrow.svg";
import { Button } from "./ui/button";

const Home = () => {
  const [time, setTime] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: "Asia/Jakarta",
      };
      const timeString = now.toLocaleTimeString("id-ID", options);
      setTime(timeString);

      const currentHour = now.getHours();
      if (currentHour >= 0 && currentHour < 6) {
        setStatus("Sleeping");
      } else {
        setStatus("🧑‍💻 Working");
      }

      const seconds = now.getSeconds();
      const milliseconds = now.getMilliseconds();
      const delay = (60 - seconds) * 1000 - milliseconds;

      setTimeout(updateTime, delay);
    };

    updateTime();
  }, []);

  return (
    <div className="container pt-20 mx-auto">
      <div className="flex flex-col items-center gap-8 m-40 md:flex-row">
        <div className="text-center md:basis-1/2 md:text-left">
          <div className="text-4xl font-bold md:text-7xl">Fullstack</div>
          <div className="text-4xl font-bold md:text-7xl">Developer</div>
          <div className="pt-4 text-base md:text-lg">
            I'm Bonnie, a product designer with a knack for turning problems and
            opportunities into user-driven strategic solutions with delightful
            and intuitive interface design. Currently, working at Grow.
          </div>

          <div className="flex items-center float-left gap-4 m-8 border border-black rounded-full ">
            <div className="w-[70px] max-w-full h-auto p-2">
              <img src={circleFanxLogo} alt="circleFanxLogo" />
            </div>
            <div> {time} WIB</div>
            <div>{status}</div>
            <div>
              <Button className="m-2 border border-black rounded-full w-14 h-14">
                <img className="" src={Arrow} alt="circleFanxLogo" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:basis-1/2">
          <div className="w-[366px] h-[366px] bg-white rounded-full border borderku" />
        </div>
      </div>
    </div>
  );
};

export default Home;
