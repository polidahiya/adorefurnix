import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import Cookies from "js-cookie";

function UserAddress({ userdata, setfinalpin }) {
  const [pin, setPin] = useState("");
  const [pinData, setPinData] = useState(null);
  const [showPinMenu, setShowPinMenu] = useState(false);

  // Load initial pin from cookies
  useEffect(() => {
    const userData = Cookies.get("userdata");
    if (userData) {
      const jsonUserData = JSON.parse(userData);
      const pincode = jsonUserData?.pincode?.split("-")[0];
      if (pincode) setPin(pincode);
    }
  }, []);

  // Fetch pin data when pin changes
  useEffect(() => {
    const fetchPinData = async () => {
      if (pin.length === 6) {
        try {
          const response = await fetch(
            `https://api.postalpincode.in/pincode/${pin}`
          );
          const jsonData = await response.json();
          if (jsonData[0]?.Status === "Success") {
            setPinData(jsonData[0]);
          } else {
            setPinData(null);
          }
        } catch (error) {
          console.error("Error fetching pin data:", error);
          setPinData(null);
        }
      } else {
        setPinData(null);
      }
    };
    fetchPinData();
  }, [pin]);

  return (
    <div className="bg-white border border-slate-300 p-[10px] lg:pl-[20px] lg:pt-[20px]">
      <div className="relative flex items-center gap-[10px] mt-[5px]">
        <ImLocation2 className="text-theme" />
        <input
          className="h-full outline-none"
          type="text"
          placeholder="Pin code"
          value={pin}
          onFocus={() => setShowPinMenu(true)}
          onBlur={() => {
            setTimeout(() => setShowPinMenu(false), 500);
          }}
          onChange={(e) => setPin(e.target.value.replace(/\D/, ""))} // Allow only numbers
        />
        {showPinMenu && (
          <FetchedDataComp
            pinData={pinData}
            pin={pin}
            setfinalpin={setfinalpin}
          />
        )}
      </div>
      <Link
        href="/updateuserdetails"
        className="h-[35px] w-full flex items-center justify-between mt-[10px]"
      >
        <span> Address: {userdata?.address}</span>
        <button className="flex items-center justify-center gap-[5px] h-[40px] md:h-full aspect-square md:aspect-auto md:px-[20px] rounded-[5px] bg-theme text-white">
          <MdOutlineEditNote className="h-full text-[25px]" />
          <span className="hidden md:block">Change</span>
        </button>
      </Link>
    </div>
  );
}

function FetchedDataComp({ pinData, pin, setfinalpin }) {
  const setCookie = (name, division) => {
    const userData = Cookies.get("userdata");
    const jsonUserData = JSON.parse(userData);
    jsonUserData.pincode = `${pin}-${name}-${division}`;
    setfinalpin(`${pin}-${name}-${division}`);
    Cookies.set("userdata", JSON.stringify(jsonUserData));
  };

  if (pin === "") return null;

  return (
    <div className="absolute top-[calc(100%+10px)] left-0 bg-white rounded-[5px] min-w-[300px] p-[15px] border border-slate-300 shadow-lg z-10">
      {pinData?.Status === "Error" || pin.length !== 6 ? (
        <div className="text-red-600 font-semibold text-center">
          Invalid Pincode
        </div>
      ) : (
        <>
          <h2 className="text-lg font-bold mb-2">
            {pinData?.PostOffice.length} Record(s) found -{" "}
            {pinData?.PostOffice[0]?.State}
          </h2>
          <div className="flex flex-col max-h-[300px] overflow-y-scroll">
            {pinData?.PostOffice.map((item, index) => (
              <button
                key={index}
                className="flex items-center border-b border-slate-200 p-2 hover:bg-slate-100"
                onClick={() => setCookie(item?.Name, item?.Division)}
              >
                <span className="font-semibold">{item?.Name}</span>
                <span className="ml-2 text-gray-600">- {item?.Division}</span>
              </button>
            ))}
            <button
              className="p-2 font-semibold hover:bg-slate-100 text-start"
              onClick={() => setCookie("not in", "the list")}
            >
              Not in the list
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default UserAddress;
