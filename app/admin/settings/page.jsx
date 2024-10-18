"use client";
import Updatesitemap from "@/app/_serveractions/Updatesitemap";
import { AppContextfn } from "@/app/Context";

function Page() {
  const { setmessagefn } = AppContextfn();
  const updatesitemapfn = async () => {
    const res = await Updatesitemap();
    setmessagefn(res?.message);
  };
  return (
    <div className="flex flex-col gap-5 py-5 px-[10px] md:px-[40px]">
      <div className="flex items-center justify-between bg-graygradient p-2 rounded-lg">
        <p className="ml-5 text-white">Update sitemap</p>
        <button
          className="rounded-sm px-5 py-1 bg-white"
          onClick={updatesitemapfn}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Page;
