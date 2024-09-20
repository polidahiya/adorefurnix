import React from "react";
import Page from "./_comps/Publicpage";
import { cookies } from "next/headers";

function page() {
  const token = cookies()?.get("token")?.value;
  const userdata = cookies()?.get("userdata")?.value;
  let parseduserdata;
  if (userdata) {
    parseduserdata = JSON.parse(userdata);
  }
  return <Page userdata={parseduserdata} token={token} />;
}

export default page;
