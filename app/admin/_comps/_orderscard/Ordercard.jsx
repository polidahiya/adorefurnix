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
  const [note, setnote] = useState(item?.note || "");
  const [deleteconfirm, setdeleteconfirm] = useState(false);
  const [showorder, setshoworder] = useState(true);
  const [showstatusmenu, setshowstatusmenu] = useState(false);
  // change status funtion
  const changestatusfn = async (status) => {
    const res = await changestatus(item._id, status);
    if (res?.status == 200) {
      setshoworder(false);
    }
    setmessagefn(res?.message);
  };

  if (showorder)
    return (
      <div
        className={`relative flex flex-col md:flex-row items-start gap-[20px] shadow-md my-[20px] p-[10px] pt-12 md:pt-[10px] `}
      >
        <div className="flex flex-col items-start gap-[5px] w-full">
          <OrderDetail label="Order ID" value={item?._id} />
          <p className="text-sm text-gray-700 flex items-center gap-2">
            <span className="font-bold">Payment Status :</span>
            <span
              className={`h-[15px] aspect-square rounded-full ${
                item?.paymentStatus == "success" ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            {item?.paymentStatus}
          </p>
          <OrderDetail
            label="Transection ID (mihpayid)"
            value={item?.mihpayid}
          />
          <OrderDetail label="txnId" value={item?.txnId} />
          <OrderDetail label="User Name" value={item?.userdata?.username} />
          <OrderDetail label="User Email" value={item?.userdata?.email} />
          <OrderDetail
            label="User Phone Number"
            value={item?.userdata?.phonenum}
          />
          <OrderDetail label="User Address" value={item?.userdata?.address} />
          <OrderDetail label="Pin Code" value={item?.userdata?.pincode} />
          <OrderDetail
            label="Order Date and Time"
            value={formattedDate(item?.createdAt)}
          />
          {item?.delivered_date && (
            <OrderDetail
              label="Delivered Date"
              value={formattedDate(item?.delivered_date)}
            />
          )}
          <hr className="my-3 border-gray-300" />
          <div className="w-full flex items-center justify-center gap-2 flex-wrap">
            {item.products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>

          {/* note */}
          <div className="flex items-end gap-[10px] w-full mt-5">
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
              <IoMdArrowDropdown
                className={`${showstatusmenu && "rotate-180"}`}
              />
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
              id={item?._id}
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

const ProductCard = ({ product }) => {
  return (
    <div className={`relative bg-white shadow-lg rounded-lg p-4 md:max-w-80`}>
      {product.status !== "" && (
        <Canceledorrefundedbadge status={product.status} />
      )}
      <Image
        className="w-full  rounded-t-lg aspect-[4/3] object-cover object-center"
        src={product?.colorpalets[product?.selectedcolor].images[0]}
        alt="product image"
        width={300}
        height={300}
      />
      <div className="p-4">
        <OrderDetail label="Name" value={product?.name} />
        <OrderDetail label="Price" value={`Rs ${product?.price}`} />
        <OrderDetail label="quantity" value={`${product?.quantity}`} />
        <OrderDetail label="discount" value={`${product?.discount} %`} />
        <OrderDetail label="Dimensions" value={`${product?.Dimensions}`} />
        <ProductColorDetail
          color={product?.colorpalets[product?.selectedcolor]}
        />
      </div>
    </div>
  );
};

const Canceledorrefundedbadge = ({ status }) => {
  return (
    <div
      className={`absolute top-[10px] left-[10px]  ${
        status == "canceled" && "bg-red-500"
      }
      ${status == "refunded" && "bg-yellow-600"} text-white px-[20px] py-[5px]`}
    >
      {status == "canceled" && "Canceled"}
      {status == "refunded" && "Refunded"}
    </div>
  );
};

const OrderDetail = ({ label, value }) => (
  <p className="text-sm text-gray-700">
    <span className="font-bold">{label}:</span> {value}
  </p>
);

const ProductColorDetail = ({ color }) => (
  <div className="flex items-center gap-2">
    <span className="text-gray-700">Color:</span>
    <span
      className="h-6 w-6 rounded-full inline-block"
      style={{ backgroundColor: color?.color }}
    />
    {color.name}
  </div>
);

const StatusMenuOption = ({ changestatusfn }) => {
  const statusOptions = [
    { label: "Add to All orders", status: 0 },
    { label: "Add to Processing orders", status: 1 },
    { label: "Add to Shipped orders", status: 2 },
    { label: "Add to Delivered orders", status: 3 },
    { label: "Add to Canceled", status: 4 },
    { label: "Add to Refunded", status: 5 },
  ];

  return (
    <div className="absolute top-[50px] right-[10px] flex flex-col items-center p-[5px] bg-white rounded-[10px] shadow-md border border-slate-300 z-10">
      {statusOptions.map(({ label, status }) => (
        <button
          key={status}
          className="w-full p-[5px] lg:hover:bg-slate-100"
          onClick={() => changestatusfn(status)}
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
  id,
}) => {
  return (
    <div className="absolute top-[50px] right-[10px] flex items-center gap-[20px] p-[20px] bg-white rounded-[10px] shadow-md border border-slate-300 z-10">
      <button
        className="text-red-500"
        onClick={async () => {
          const res = await deleteorder(id);
          if (res?.status == 200) {
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
//
const formattedDate = (date) => {
  const now = new Date(date);
  const hours = now.getHours() % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  return ` ${day}/${month}/${year} - ${hours}:${minutes} ${ampm}`;
};

export default Ordercard;
