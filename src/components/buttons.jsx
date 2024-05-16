"use client";

const Buttons = ({ setActive, active }) => {
  const BUTTONS = ["Icon", "BackGround"];

  return (
    <div className="flex  flex-col justify-between w-full border-r h-screen p-3">
      <div className="flex flex-col gap-3">
        {BUTTONS.map((itm, idx) => (
          <div
            key={idx}
            onClick={() => setActive(idx)}
            className={`my-1 border rounded cursor-pointer flex justify-center items-center p-1 py-2 ${
              active === idx && "bg-black text-white rounded"
            }`}
          >
            {itm}
          </div>
        ))}
      </div>

      <div>
        <p>App by jac wida</p>
      </div>
    </div>
  );
};

export default Buttons;
