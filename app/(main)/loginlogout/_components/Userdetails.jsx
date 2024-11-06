"use client";
import React, { useRef, useState } from "react";
import Checkfields from "./Checkfileds";
import { AppContextfn } from "@/app/Context";
import { signup, login } from "../Serveractions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Usersvg from "@/app/_svgs/Usersvg";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import Link from "next/link";
import { signIn } from "next-auth/react";

function Userdetails() {
  const router = useRouter();

  const { redirectloginlink, setmessagefn } = AppContextfn();

  const [signupform, setsignupform] = useState(false);
  const [togglepassword, settogglepassword] = useState(true);
  const nameref = useRef(null);
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const phonenumref = useRef(null);
  const addressref = useRef(null);
  const [loading, setloading] = useState(false);

  const authenticateuser = async () => {
    const filedcheckvalue = Checkfields({
      nameref,
      emailref,
      passwordref,
      phonenumref,
      addressref,
      setmessagefn,
      signupform,
    });

    if (!filedcheckvalue) return;

    setloading(true);

    const userdata = signupform
      ? {
          username: nameref.current.value,
          email: emailref.current.value,
          password: passwordref.current.value,
          phonenum: phonenumref.current.value,
          address: addressref.current.value,
        }
      : {
          email: emailref.current.value,
          password: passwordref.current.value,
        };

    const apiCall = signupform ? signup : login;

    try {
      const reply = await apiCall(userdata);
      setmessagefn(reply?.message);

      if (reply?.status === 200) {
        setTimeout(() => {
          router.replace(redirectloginlink || "/");
        }, 1000);
      }
    } catch (error) {
      setmessagefn("An error occurred. Please try again.");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="relative bg-white w-[90%] max-w-[750px] rounded-[20px] shadow-lg p-[30px]">
      <Image
        src="/minlogo.png"
        alt="logo image"
        className=" top-[20px] left-[30px] h-[50px] w-[50px] invert"
        width={156}
        height={60}
      ></Image>
      <center>
        <div className="relative w-fit flex items-center justify-center  text-[30px] ">
          <Usersvg styles="absolute top-[50%] left-0 translate-y-[-50%] translate-x-[-120%]  h-[30px] border border-slate-300 rounded-full fill-white" />
          {signupform ? "Sign up" : "Login"}
        </div>
      </center>

      <div className="mt-[20px] lg:grid lg:grid-cols-2 lg:gap-x-[30px] ">
        {signupform && <Inputfiels refval={nameref} type="text" lable="Name" />}
        <Inputfiels refval={emailref} type="email" lable="Email" />
        <Inputfiels
          refval={passwordref}
          type={togglepassword ? "password" : "text"}
          lable="Password"
          extraelem={
            <button
              className="absolute top-[50%] right-[10px] translate-y-[-50%] z-[11] text-[20px]"
              onClick={() => {
                settogglepassword(!togglepassword);
              }}
            >
              {togglepassword ? <IoIosEyeOff /> : <IoIosEye />}
            </button>
          }
        />
        {signupform && (
          <>
            <Inputfiels
              refval={phonenumref}
              type="number"
              lable="Mobile Number"
            />
            <Inputfiels
              refval={addressref}
              type="text"
              lable="Address"
              extrastyle="col-span-2"
            />
          </>
        )}
      </div>
      {/* login or signup button */}
      <center>
        <button
          className="relative group flex items-center justify-center gap-[10px] px-[100px] py-[5px] text-white rounded-full mt-[20px]  overflow-hidden"
          onClick={authenticateuser}
        >
          {loading && (
            <div className="h-[20px] aspect-square rounded-full  border-r-2 border-l-2 border-white animate-spin z-10"></div>
          )}
          <span className="z-10">{signupform ? "Signup" : "Login"}</span>
          <div className="absolute top-0 left-0 w-[200%] h-full bg-[linear-gradient(90deg,#10e89c,#0593f7,#10e89c)] group-hover:translate-x-[-50%] duration-200"></div>
        </button>
      </center>
      <div className="relative">
        <hr className="my-10" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8">
          or 
        </span>
      </div>
      <SignInPage />

      {/* forgotpass and form switch */}
      <div className="flex gap-5 justify-center mt-5">
        {/* forgetpassword */}
        {!signupform && (
          <p className="text-[14px] text-center ">
            Forgot password?
            <Link
              href={"/forgotpassword"}
              className="text-theme cursor-pointer ml-1"
            >
              Reset
            </Link>
          </p>
        )}
        {/* form switcher */}
        <div className="text-[14px] text-center ">
          {signupform ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-theme cursor-pointer ml-1"
            onClick={() => {
              setsignupform(!signupform);
            }}
          >
            {signupform ? "Login" : "Signup"}
          </span>
        </div>
      </div>
    </div>
  );
}

function Inputfiels({ refval, type, lable, extraelem, extrastyle }) {
  return (
    <div
      className={`relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent ${extrastyle}`}
    >
      <input
        ref={refval}
        className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
        type={type}
        required
      />
      <label className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150">
        {lable}
      </label>
      {extraelem}
    </div>
  );
}

function SignInPage() {
  const { redirectloginlink } = AppContextfn();
  
  const providers = [
    {
      name: "Google",
      id: "google",
      icon: (
        <svg
          viewBox="0 0 24 24"
          height={25}
          width={25}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z"
            fill="#F44336"
          />
          <path
            d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z"
            fill="#2196F3"
          />
          <path
            d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z"
            fill="#FFC107"
          />
          <path
            d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z"
            fill="#00B060"
          />
        </svg>
      ),
    },
    // {
    //   name: "Apple",
    //   id: "apple",
    //   icon: (
    //     <svg
    //       viewBox="0 0 30 30"
    //       height={30}
    //       width={30}
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z" />
    //     </svg>
    //   ),
    // },
    {
      name: "Facebook",
      id: "facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          width={25}
          height={25}
        >
          <linearGradient
            id="a"
            x1="-277.375"
            x2="-277.375"
            y1="406.6018"
            y2="407.5726"
            gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#0062e0" />
            <stop offset="1" stopColor="#19afff" />
          </linearGradient>
          <path
            fill="url(#a)"
            d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
          />
          <path
            fill="#fff"
            d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
      {providers.map((provider) => (
        <button
          key={provider.id}
          className="w-full flex items-center justify-center gap-2 border border-slate-200 rounded-lg h-11"
          onClick={() => signIn(provider.id, { callbackUrl: redirectloginlink || "/" })}
        >
          {provider.icon}
          <span>{provider.name}</span>
        </button>
      ))}
    </div>
  );
}


export default Userdetails;
