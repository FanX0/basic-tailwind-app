import motoGP from "../assets/motoGP.png";

const HomeProjek = () => {
  return (
    <div className="p-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center p-20 ">
          <div className="p-8 text-2xl font-bold text-center sm:text-4xl">
            See My latest Project
          </div>
          <div className="flex text-2xl text-center text-gray-700">
            Get an inside look into my creative process and see what's come
            along.
          </div>
          <div className="mt-8 font-bold text-purple-400">
            Show me all Projek
          </div>
        </div>
      </div>
      <div className="container flex gap-8 mx-auto ">
        <div>
          <div className="border border-black w-96 h-96 rounded-xl borderku">
            <img
              src={motoGP}
              alt="Fanx Logo"
              className="w-full h-full mx-auto rounded-xl"
            />
          </div>
          <div className="pt-8 text-2xl">Nama Projek</div>
          <div className="pt-4 text-lg">Deskripsi</div>
        </div>
        <div>
          <div className="p-4 bg-red-800 border border-black w-96 h-96 rounded-xl borderku"></div>
          <div className="pt-8 text-2xl">Nama Projek</div>
          <div className="pt-4 text-lg">Deskripsi</div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjek;
