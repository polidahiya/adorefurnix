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
      }
    })();
  }, [pin]);

  return (
    <div className=" h-[50px] flex items-center justify-between gap-[5px] bg-white border border-slate-300 p-[7px]">
      <div className=" relative h-full flex items-center gap-[5px] px-[10px] border border-slate-300 rounded-[5px] ml-[50px]">
        <ImLocation2 className="text-blue-600" />
        <input
          className="h-full max-w-[80px] outline-none text-[14px] text-center"
          type="number"
          placeholder="Pin code"
          onInput={(e) => {
            setpin(e.target.value);
          }}
        />
        {pin.length > 0 && <Fetchedatacomp pindata={pindata} />}
      </div>
      <div className="w-full flex items-center px-[20px] whitespace-nowrap overflow-hidden text-ellipsis text-slate-400 ">
        Address : {userdata?.address}
      </div>
      <Link
        href="/updateuserdetails"
        className="h-full flex gap-[5px] items-center  bg-theme text-white  px-[20px] rounded-[5px]"
      >
        <MdOutlineEditNote className="text-[25px]" />
        Change
      </Link>
    </div>
  );
}

function Fetchedatacomp({ pindata }) {
  return (
    <div className="absolute top-[calc(100%+10px)] left-0 bg-white rounded-[5px] min-w-[300px] p-[15px] border border-slate-300 shadow-lg z-10">
      {pindata?.Status === "Error" ? (
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
            {pindata?.PostOffice.map((item, i) => (
              <button
                key={i}
                className="flex items-center border-b border-slate-200 p-2  last:border-b-0 hover:bg-slate-100 "
              >
                <span className="font-semibold">{item?.Name}</span>
                <span className="ml-2 text-gray-600">- {item?.Division}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Useraddress;
