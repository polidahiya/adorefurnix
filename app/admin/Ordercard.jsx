"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  updatenote,
  deleteorder,
  changestatus,
} from "../_components/serveractions/Adminorders";

import { AppContextfn } from "../Context";
import Deletesvg from "../_svgs/Deletesvg";

function Ordercard({ item }) {
  const { setmessagefn } = AppContextfn();
  const [note, setnote] = useState("");
  const [deleteconfirm, setdeleteconfirm] = useState(false);
  const [showorder, setshoworder] = useState(true);
  const [showstatusmenu, setshowstatusmenu] = useState(false);
  // change status funtion
  const changestatusfn = async (status) => {
    const res = await changestatus(item._id, status);
    if (res?.message == "Status Updated") {
      setshoworder(false);
    }
    setmessagefn(res?.message);
  };
  //
  const formatedate = (date) => {
    const now = new Date(date);

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return `${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${ampm} - ${day}/${month}/${year}`;
  };

  if (showorder)
    return (
      <div
        className={`relative flex flex-col md:flex-row items-start gap-[20px] shadow-md my-[20px] p-[10px] ${
          item.canceled ? "bg-pink-50" : "bg-white"
        }`}
      >
        {item.canceled && (
          <div className="absolute top-[10px] left-[10px] bg-red-500 text-white px-[20px] py-[5px]">
            Canceled
          </div>
        )}
        <Image
          className="w-full md:w-[300px] aspect-square object-cover object-center"
          src={item?.colorpalets[item?.selectedcolor].images[0]}
          alt="product image"
          width={300}
          height={300}
        ></Image>
        <div className="flex flex-col items-start gap-[5px] w-full">
          <div>
            <span className="text-slate-400">User Name</span> : {item?.username}
          </div>
          <div>
            <span className="text-slate-400">User Email</span> : {item?.email}
          </div>
          <div>
            <span className="text-slate-400">User Phone number</span> :{" "}
            {item?.phonenum}
          </div>
          <div>
            <span className="text-slate-400">User Address</span> :{" "}
            {item?.address}
          </div>
          <hr className="w-full" />
          <div>
            <span className="text-slate-400">Product Name</span> : {item?.name}
          </div>
          <div>
            <span className="text-slate-400">Product Price</span> :{" "}
            {item?.price}
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="text-slate-400">Product Color</span> :{" "}
            <span
              className="h-[30px] aspect-square rounded-full inline-block"
              style={{
                backgroundColor: item?.colorpalets[item.selectedcolor].color,
              }}
            ></span>
            {item?.colorpalets[item.selectedcolor].name}
          </div>
          <div>
            <span className="text-slate-400">Order Date and Time</span> :{" "}
            {formatedate(item?.date)}
          </div>
          <div className="flex items-end gap-[10px] w-full">
            <textarea
              className="h-full w-full border border-slate-300 min-h-[50px] rounded-xl px-[5px]"
              placeholder="Write a note here"
              value={note}
              onChange={(e) => {
                setnote(e.target.value);
              }}
            ></textarea>
            <button
              className="text-white bg-green-600 md:whitespace-nowrap h-[50px] px-[20px] rounded-xl"
              onClick={async () => {
                const res = await updatenote(item._id, note);
                setmessagefn(res?.message);
              }}
            >
              Update Note
            </button>
          </div>
          <div className="absolute top-[10px] right-[10px] flex items-center gap-[10px] z-10">
            {/* change status */}
            <button
              className="border border-slate-300 h-[30px] px-[20px] bg-white"
              onClick={() => {
                setshowstatusmenu((pre) => !pre);
              }}
            >
              Change status
            </button>
            {/*delte button  */}
            <button
              className=" border border-slate-300 bg-white h-[30px] aspect-square flex items-center justify-center"
              onClick={() => {
                setdeleteconfirm(true);
              }}
            >
              <Deletesvg styles="h-[25px] aspect-square" />
            </button>
          </div>
          {showstatusmenu || deleteconfirm ? (
            <div
              className="fixed top-0 left-0 h-screen w-screen z-10"
              onClick={() => {
                setdeleteconfirm(false);
                setshowstatusmenu(false);
              }}
            ></div>
          ) : (
            ""
          )}
          {/* status menu */}
          {showstatusmenu && (
            <div className="absolute top-[50px] right-[10px] flex flex-col items-center p-[5px] bg-white rounded-[10px] shadow-md border border-slate-300 z-10">
              <button
                className="w-full p-[5px] lg:hover:bg-slate-100 "
                onClick={() => {
                  changestatusfn(0);
                }}
              >
                Add to All orders
              </button>
              <button
                className="w-full p-[5px] lg:hover:bg-slate-100 "
                onClick={() => {
                  changestatusfn(1);
                }}
              >
                Add to Processing orders
              </button>
              <button
                className="w-full p-[5px] lg:hover:bg-slate-100 "
                onClick={() => {
                  changestatusfn(2);
                }}
              >
                Add to shipped orders
              </button>
              <button
                className="w-full p-[5px] lg:hover:bg-slate-100 "
                onClick={() => {
                  changestatusfn(3);
                }}
              >
                Add to Delivered orders
              </button>
            </div>
          )}

          {/* delete confirmation */}
          {deleteconfirm && (
            <div className="absolute top-[50px] right-[10px] flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] shadow-md border border-slate-300 z-10">
              <button
                className="text-red-500"
                onClick={async () => {
                  const res = await deleteorder(item._id);
                  if (res?.message == "Deleted Successfully") {
                    setshoworder(false);
                  }
                  setmessagefn(res?.message);
                }}
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  setdeleteconfirm(false);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    );
}

export default Ordercard;
