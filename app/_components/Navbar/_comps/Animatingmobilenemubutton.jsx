import { AppContextfn } from "@/app/Context";

function Animatingmobilenemubutton() {
  const { showcat, setshowcat } = AppContextfn();
  return (
    <button
      onClick={() => {
        history.pushState(null, "", "");
        setshowcat(true);
      }}
      className={`lg:hidden h-[calc(100%-4px)] aspect-square flex flex-col justify-center items-center  ${
        showcat && "z-40 pointer-events-none"
      }`}
    >
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          showcat ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
          showcat ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          showcat ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
}

export default Animatingmobilenemubutton;
