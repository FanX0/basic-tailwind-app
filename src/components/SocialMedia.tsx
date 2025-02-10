const SocialMedia = () => {
  return (
    <div className="flex justify-center p-10 mx-auto bg-black mt-60">
      <div className="container p-20 border-[0.2vw] border-purple-500 border-dashed rounded-lg">
        <div className="text-2xl text-white">
          <div className="ml-4">My Social Media ✦</div>
          <div className="flex flex-col lg:flex-row">
            <div className="p-4 basis-1/2">
              The best way to stay on top of my work is by using these four
              essential tools, either working solo or collaboratively in team.
            </div>
            <div className="grid grid-cols-4 gap-2 basis-1/2 place-items-center">
              <div className="w-20 h-20 border rounded-full"></div>
              <div className="w-20 h-20 border rounded-full"></div>
              <div className="w-20 h-20 border rounded-full"></div>
              <div className="w-20 h-20 border rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
