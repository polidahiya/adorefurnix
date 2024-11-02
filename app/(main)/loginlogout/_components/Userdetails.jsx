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
  const { setmessagefn } = AppContextfn();
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-5">
      <button
        className="w-full flex items-center justify-center gap-2 border border-slate-300 rounded-lg h-11"
        onClick={() => signIn("google")}
      >
        <svg
          viewBox="0 0 24 24"
          height={25}
          width={25}
          y="0px"
          x="0px"
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
          <path
            opacity=".1"
            d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z"
          />
          <polygon
            opacity=".1"
            points="12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25"
          />
          <path
            d="M23.9944458,12.1470337C23.9952393,12.0977783,24,12.0493774,24,12 c0-0.0139771-0.0021973-0.0274658-0.0022583-0.0414429C23.9970703,12.0215454,23.9938965,12.0838013,23.9944458,12.1470337z"
            fill="#E6E6E6"
          />
          <path
            opacity=".2"
            d="M12,9.5v0.25h11.7855721c-0.0157471-0.0825195-0.0329475-0.1680908-0.0503426-0.25H12z"
            fill="#FFF"
          />
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2={12}
            y1={12}
            x2={24}
            x1={0}
            id="LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1"
          >
            <stop stopOpacity=".2" stopColor="#fff" offset={0} />
            <stop stopOpacity={0} stopColor="#fff" offset={1} />
          </linearGradient>
          <path
            d="M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19 c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686 c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979 C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12 c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12 C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z"
            fill="url(#LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1)"
          />
          <path
            opacity=".1"
            d="M15.7885132,5.890686C14.6939087,5.1806641,13.4018555,4.75,12,4.75c-3.8659668,0-7,3.1339722-7,7 c0,0.0421753,0.0005674,0.0751343,0.0012999,0.1171875C5.0687437,8.0595093,8.1762085,5,12,5 c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374 l3.637146-3.4699707l-3.637146,3.2199707C16.1289062,6.1018066,15.9560547,5.9995728,15.7885132,5.890686z"
          />
          <path
            opacity=".2"
            d="M12,0.25c2.9750366,0,5.6829224,1.0983887,7.7792969,2.8916016l0.144165-0.1375122 l-0.110014-0.0958166C17.7089558,1.0843592,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12 c0,0.0421753,0.0058594,0.0828857,0.0062866,0.125C0.0740356,5.5558472,5.4147339,0.25,12,0.25z"
            fill="#FFF"
          />
        </svg>
        <span>Continue with Google</span>
      </button>
      <button
        className="w-full flex items-center justify-center gap-2 border border-slate-300 rounded-lg h-11"
        onClick={() => {
          setmessagefn("This option is currently unavailable!");
          // signIn("apple");
        }}
      >
        <svg
          viewBox="0 0 30 30"
          height={30}
          width={30}
          y="0px"
          x="0px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z" />
        </svg>
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}

export default Userdetails;
