import React from "react";
import Page from "./_comps/Publicpage";
import { cookies } from "next/headers";
import Ordersplacednotif from "./_comps/Ordersplacednotif";

function page({ searchParams }) {
  const token = cookies()?.get("next-auth.session-token")?.value;
  const userdata = cookies()?.get("userdata")?.value;
  let parseduserdata;
  if (userdata) {
    parseduserdata = JSON.parse(userdata);
  }
  return (
    <>
      <Ordersplacednotif />
      <Page
        userdata={parseduserdata}
        token={token}
        orderstatus={searchParams?.orderstatus}
      />
    </>
  );
}

export default page;
