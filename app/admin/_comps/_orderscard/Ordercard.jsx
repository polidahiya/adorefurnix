"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  updatenote,
  deleteorder,
  changestatus,
} from "@/app/_serveractions/Adminorders";
import { AppContextfn } from "@/app/Context";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

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
  const formattedDate = (date) => {
    const now = new Date(date);
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return `${hours}:${minutes} ${ampm} - ${day}/${month}/${year}`;
  };

  if (showorder)
    return (
      <div
        className={`relative flex flex-col md:flex-row items-start gap-[20px] shadow-md my-[20px] p-[10px] ${
          item.canceled ? "bg-pink-50" : "bg-white"
        }`}
      >
        {item.canceled && <Canceledbadge />}
        <Image
          className="w-full md:w-[300px] aspect-square object-cover object-center"
          src={item?.colorpalets[item?.selectedcolor].images[0]}
          alt="product image"
          width={300}
          height={300}
        ></Image>
        <div className="flex flex-col items-start gap-[5px] w-full">
          <OrderDetail label="Order ID" value={item?._id} />
          <OrderDetail label="User Name" value={item?.username} />
          <OrderDetail label="User Email" value={item?.email} />
          <OrderDetail label="User Phone Number" value={item?.phonenum} />
          <OrderDetail label="User Address" value={item?.address} />
          <OrderDetail label="Pin Code" value={item?.pincode} />
          <hr className="my-3 border-gray-300" />
          <OrderDetail label="Product Name" value={item?.name} />
          <OrderDetail label="Product Price" value={`Rs ${item?.price}`} />
          <OrderDetail
            label="Razorpay order id"
            value={`Rs ${item?.rzorderid}`}
          />
          <OrderDetail
            label="Razorpay payment id"
            value={`Rs ${item?.rzpaymentid}`}
          />
          <ProductColorDetail color={item?.colorpalets[item?.selectedcolor]} />
          <OrderDetail
            label="Order Date and Time"
            value={formattedDate(item?.date)}
          />
          {item?.delivered_date && (
            <OrderDetail
              label="Delivered Date"
              value={formattedDate(item?.delivered_date)}
            />
          )}
          <div className="flex items-end gap-[10px] w-full">
            <textarea
              className="h-full w-full border border-slate-300 min-h-[50px] p-[10px]"
              placeholder="Write a note here"
              value={note}
              onChange={(e) => {
                setnote(e.target.value);
              }}
            ></textarea>
            <button
              className="text-white bg-green-600 md:whitespace-nowrap h-[30px] px-[20px]"
              onClick={async () => {
                const res = await updatenote(item?._id, note);
                setmessagefn(res?.message);
              }}
            >
              Update Note
            </button>
          </div>
          <div className="absolute top-[10px] right-[10px] flex items-center gap-[10px] z-10">
            {/* change status */}
            <button
              className="flex items-center gap-[10px] border border-slate-300 h-[30px] px-[20px] bg-white"
              onClick={() => {
                setshowstatusmenu((pre) => !pre);
              }}
            >
              Change status
              <IoMdArrowDropdown className={`${showstatusmenu && "rotate-180"}`}/>
            </button>
            {/*delete button  */}
            <button
              className=" border border-slate-300 bg-white h-[30px] aspect-square flex items-center justify-center"
              onClick={() => {
                setdeleteconfirm(true);
              }}
            >
              <AiOutlineDelete />
            </button>
          </div>

          {/* status menu */}
          {showstatusmenu && (
            <StatusMenuOption changestatusfn={changestatusfn} />
          )}

          {/* delete confirmation */}
          {deleteconfirm && (
            <Deleteconfirmationmenu
              deleteorder={deleteorder}
              setmessagefn={setmessagefn}
              setdeleteconfirm={setdeleteconfirm}
              setshoworder={setshoworder}
              item={item}
            />
          )}
          {/* black screen */}
          {(showstatusmenu || deleteconfirm) && (
            <div
              className="fixed top-0 left-0 h-screen w-screen z-[9]"
              onClick={() => {
                setdeleteconfirm(false);
                setshowstatusmenu(false);
              }}
            ></div>
          )}
        </div>
      </div>
    );
}

const Canceledbadge = () => {
  return (
    <div className="absolute top-[10px] left-[10px] bg-red-500 text-white px-[20px] py-[5px]">
      Canceled
    </div>
  );
};

const OrderDetail = ({ label, value }) => (
  <p className="text-sm text-gray-700">
    <span className="font-semibold">{label}:</span> {value}
  </p>
);

const ProductColorDetail = ({ color }) => (
  <div className="flex items-center gap-2">
    <span className="text-gray-700">Product Color:</span>
    <span
      className="h-6 w-6 rounded-full inline-block"
      style={{ backgroundColor: color.color }}
    />
    {color.name}
  </div>
);

const StatusMenuOption = ({ changeStatusFn }) => {
  const statusOptions = [
    { label: 'Add to All orders', status: 0 },
    { label: 'Add to Processing orders', status: 1 },
    { label: 'Add to Shipped orders', status: 2 },
    { label: 'Add to Delivered orders', status: 3 },
  ];

  return (
    <div className="absolute top-[50px] right-[10px] flex flex-col items-center p-[5px] bg-white rounded-[10px] shadow-md border border-slate-300 z-10">
      {statusOptions.map(({ label, status }) => (
        <button
          key={status}
          className="w-full p-[5px] lg:hover:bg-slate-100"
          onClick={() => changeStatusFn(status)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

const Deleteconfirmationmenu = ({
  deleteorder,
  setmessagefn,
  setdeleteconfirm,
  setshoworder,
  item,
}) => {
  return (
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
  );
};

export default Ordercard;
