"use client";
import React, { useRef, useState } from "react";
import { AppContextfn } from "@/app/Context";
import { signup, login } from "../Serveractions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Usersvg from "@/app/_svgs/Usersvg";

function Userdetails() {
  const router = useRouter();

  const { redirectloginlink, setmessagefn } = AppContextfn();

  const [toggleform, settoggleform] = useState(false);
  const [togglepassword, settogglepassword] = useState(true);
  const nameref = useRef("");
  const emailref = useRef("");
  const passwordref = useRef("");
  const phonenumref = useRef("");
  const addressref = useRef("");
  const [loading, setloading] = useState(false);

  const fieldcheck = () => {
    // if fields are empty
    const refarray = [nameref, emailref, passwordref, phonenumref, addressref];
    for (let i = 0; i < refarray.length; i++) {
      if (refarray[i]?.current?.value == "") {
        refarray[i]?.current?.focus();
        setmessagefn("Please fill this field");
        return false;
      }
    }
    // name check
    if (toggleform) {
      if (nameref.current.value.length < 3) {
        nameref.current.focus();
        setmessagefn("Name is too short");
        return false;
      }
      if (nameref.current.value.length > 50) {
        nameref.current.focus();
        setmessagefn("Name is too big");
        return false;
      }
    }

    // email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailref.current.value)) {
      emailref.current.focus();
      setmessagefn("Invalid email");
      return false;
    }

    // mobile check
    if (toggleform) {
      const mobileregex = /^\d{10}$/;
      if (!mobileregex.test(phonenumref.current.value)) {
        emailref.current.focus();
        setmessagefn("Invalid mobile number");
        return false;
      }
    }

    // password check
    const minLength = 8;
    const maxLength = 100;

    if (passwordref.current.value.length < minLength) {
      passwordref.current.focus();
      setmessagefn("Password is too short ( " + minLength + " chars min )*");
      return false;
    }

    if (passwordref.current.value.length > maxLength) {
      passwordref.current.focus();
      setmessagefn("Password is too big ( " + maxLength + " chars min )*");
      return false;
    }

    // pass test
    return true;
  };

  const authenticateuser = async () => {
    const filedcheckvalue = fieldcheck();
    if (!filedcheckvalue) {
      return;
    }
    setloading(true);
    // send data
    if (toggleform) {
      // signup
      let userdata = {
        username: nameref.current.value,
        email: emailref.current.value,
        password: passwordref.current.value,
        phonenum: phonenumref.current.value,
        address: addressref.current.value,
      };

      const reply = await signup(userdata);

      setmessagefn(reply?.message);
      setloading(false);

      if (reply.message == "Signup successfully") {
        setTimeout(() => {
          router.push(redirectloginlink);
        }, 1000);
      }
    } else {
      // login
      let userdata = {
        email: emailref.current.value,
        password: passwordref.current.value,
      };

      const reply = await login(userdata);

      setmessagefn(reply?.message);
      setloading(false);

      if (reply.message == "Login successfull") {
        setTimeout(() => {
          router.push(redirectloginlink);
        }, 1000);
      }
    }
  };

  return (
    <div className="relative bg-white w-[90%] max-w-[750px] rounded-[20px] shadow-lg p-[30px]">
      <Image
        src="/minlogo.png"
        alt="rentbean.in logo image"
        className=" top-[20px] left-[30px] h-[50px] w-[50px] invert"
        width={156}
        height={60}
      ></Image>
      <center>
        <div className="relative w-fit flex items-center justify-center  text-[30px] ">
          <Usersvg styles="absolute top-[50%] left-0 translate-y-[-50%] translate-x-[-120%]  h-[30px] border border-slate-300 rounded-full fill-white" />
          {toggleform ? "Sign up" : "Login"}
        </div>
      </center>
      <div className="mt-[20px] lg:grid lg:grid-cols-2 lg:gap-x-[30px] ">
        {toggleform && (
          <div className=" relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent">
            <input
              ref={nameref}
              className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
              type="text"
              required
            />
            <label
              className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
              htmlFor="name"
            >
              Name
            </label>
          </div>
        )}
        <div className="relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent">
          <input
            ref={emailref}
            className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
            type="email"
            required
          />
          <label
            className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
            htmlFor="name"
          >
            Email
          </label>
        </div>
        <div className="relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent">
          <input
            ref={passwordref}
            className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
            type={togglepassword ? "password" : "text"}
            required
          />
          <label
            className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
            htmlFor="name"
          >
            Password
          </label>
          <button
            className="absolute top-[50%] right-[10px] translate-y-[-50%] z-[11]"
            onClick={() => {
              settogglepassword(!togglepassword);
            }}
          >
            {togglepassword ? "Show" : "Hide"}
          </button>
        </div>
        {toggleform && (
          <>
            <div className="relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent">
              <input
                ref={phonenumref}
                className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
                type="number"
                required
              />
              <label
                className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
                htmlFor="name"
              >
                Mobile Number
              </label>
            </div>
            <div className="relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent col-span-2">
              <input
                ref={addressref}
                className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
                type="text"
                required
              />
              <label
                className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150"
                htmlFor="name"
              >
                Address
              </label>
            </div>
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
          <span className="z-10">{toggleform ? "Signup" : "Login"}</span>
          <div className="absolute top-0 left-0 w-[200%] h-full bg-[linear-gradient(90deg,#10e89c,#0593f7,#10e89c)] group-hover:translate-x-[-50%] duration-200"></div>
        </button>
      </center>
      {/* form switcher */}
      <div className="text-[14px] text-center mt-[20px]">
        {toggleform ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          className="text-theme cursor-pointer"
          onClick={() => {
            settoggleform(!toggleform);
          }}
        >
          {toggleform ? "Login" : "Signup"}
        </span>
      </div>
    </div>
  );
}

export default Userdetails;
