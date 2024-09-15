"use client";
import { getadminorders } from "../_serveractions/Adminorders";
import Selectordertype from "./Selectordertype";
import React, { useEffect, useState } from "react";
import Ordercard from "./Ordercard";
import Productnotfound from "../_components/Productnotfound";
import Componentloading from "../_components/Componentloading";

export default function Adminhome() {
  const [orders, setorders] = useState([]);
  const [loading, setloading] = useState(true);
  const [ordertype, setordertype] = useState(0);
  const [refresh, setrefresh] = useState(0);

  useEffect(() => {
    (async () => {
      const ordersres = await getadminorders(ordertype);
      setorders([...ordersres]);
      setloading(false);
    })();
  }, [ordertype, refresh]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Componentloading />
      </div>
    );
  } else {
    return (
      <div>
        <Selectordertype
          ordertype={ordertype}
          setordertype={setordertype}
          setrefresh={setrefresh}
        />
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
