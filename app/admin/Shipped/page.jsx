"use client";
import { getadminorders } from "@/app/_components/serveractions/Adminorders";
import Selectordertype from "../Selectordertype";
import React, { useEffect, useState } from "react";
import Ordercard from "../Ordercard";
import Productnotfound from "@/app/_components/Productnotfound";
import Componentloading from "@/app/_components/Componentloading";

export default function Shippinghome() {
  const [orders, setorders] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    (async () => {
      const ordersres = await getadminorders(2);
      setorders([...ordersres]);
      setloading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Componentloading />
      </div>
    );
  } else {
    return (
      <div>
        <Selectordertype selected={2} />
        {orders.length != 0 ? (
          <div className={`p-[20px]`}>
            {orders.map((item) => {
              return (
                <Ordercard
                  key={new Date().getMilliseconds() + Math.random()}
                  item={item}
                />
              );
            })}
          </div>
        ) : (
          <Productnotfound />
        )}
      </div>
    );
  }
}
