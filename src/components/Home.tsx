import { useState, useEffect } from "react";
import fanxLogo from "../assets/fanx.svg";
import circleFanxLogo from "../assets/circleFanx.svg";

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
    <div className="container mx-auto pt-20 p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center gap-8 mt-40">
        <div className="md:basis-1/2 text-center md:text-left">
          <div className="text-4xl md:text-7xl font-bold">Fullstack</div>
          <div className="text-4xl md:text-7xl font-bold">Developer</div>
          <div className="pt-4 text-base md:text-lg">
            I'm Bonnie, a product designer with a knack for turning problems and
            opportunities into user-driven strategic solutions with delightful
            and intuitive interface design. Currently, working at Grow.
          </div>
          <div className="m-8 border border-black rounded-full flex flex-row items-center gap-4">
            <div className="w-[70px] max-w-full h-auto p-2">
              <img src={circleFanxLogo} alt="circleFanxLogo" />
            </div>
            <div> {time} WIB</div>
            <div>{status}</div>
          </div>
        </div>
        <div className="md:basis-1/2">
          <img
            className="w-[200px] max-w-full h-auto mx-auto"
            src={fanxLogo}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
