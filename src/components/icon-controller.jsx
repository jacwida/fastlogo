const IconController = () => {
  return (
    <div className="w-full  flex flex-col p-3 gap-8 overflow-auto h-screen">
      <div className="flex justify-between">
        <p className="text-sm">Icon</p>
        <p className="text-sm">Activity</p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Size</p>
          <p className="text-xs">20 px</p>
        </div>

        <input type="range" min={0} max="100" value="40" className="range" />
      </div>
    </div>
  );
};

export default IconController;
