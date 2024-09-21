import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

function Useraddress({ userdata }) {
  const [pin, setpin] = useState("");
  const [pindata, setpindata] = useState(null);
  const [showpinmenu, setshowpinmenu] = useState(false);

  useEffect(() => {
    (async () => {
      if (pin && pin.length == 6) {
        const data = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        const jsondata = await data.json();
        setpindata(jsondata[0]);
      } else {
        setpindata(null);
      }
    })();
  }, [pin]);

  return (
    <div className="bg-white border border-slate-300 p-[10px] lg:pl-[20px] lg:pt-[20px]">
      <div className="relative flex items-center gap-[10px]">
        <ImLocation2 className="text-theme" />
        <input
          className="h-full outline-none "
          type="number"
          placeholder="Pin code"
          onFocus={() => {
            setshowpinmenu(true);
          }}
          onBlur={() => {
            setshowpinmenu(false);
          }}
          onInput={(e) => {
            setpin(e.target.value);
          }}
        />
        {showpinmenu && <Fetchedatacomp pindata={pindata} pin={pin} />}
      </div>
      <Link
        href="/updateuserdetails"
        className="h-[35px] w-full flex items-center justify-between mt-[5px]"
      >
        <span> Address : {userdata?.address}</span>
        <button className="flex items-center justify-center gap-[5px] h-[40px] md:h-full aspect-square md:aspect-auto md:px-[20px] rounded-[5px] bg-theme text-white">
          <MdOutlineEditNote className="h-full text-[25px]" />
          <span className="hidden md:block">Change</span>
        </button>
      </Link>
    </div>
  );
}

function Fetchedatacomp({ pindata, pin }) {
  return (
    <div className="absolute top-[calc(100%+10px)] left-0 bg-white rounded-[5px] min-w-[300px] p-[15px] border border-slate-300 shadow-lg z-10">
      {pindata?.Status === "Error" || pin !== 6 ? (
        <div className="text-red-600 font-semibold text-center">
          Invalid Pincode
        </div>
      ) : (
        <>
          <h2 className="text-lg font-bold mb-2">
            {pindata?.PostOffice.length} Record(s) found -{" "}
            {pindata?.PostOffice[0]?.State}
          </h2>
          <div className="flex flex-col max-h-[300px] overflow-y-scroll">
            {pindata == null && <div className="p-2">Loading...</div>}
            {pindata?.PostOffice.map((item, i) => (
              <button
                key={i}
                className="flex items-center border-b border-slate-200 p-2  hover:bg-slate-100 "
              >
                <span className="font-semibold">{item?.Name}</span>
                <span className="ml-2 text-gray-600">- {item?.Division}</span>
              </button>
            ))}
            <button className="p-2  font-semibold hover:bg-slate-100 text-start">
              Not in the list
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Useraddress;
