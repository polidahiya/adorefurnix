import React from "react";
import Page from "./Publicpage";
import { cookies } from "next/headers";

function page() {
  const userdata = cookies().get("userdata").value;
  return <Page userdata={userdata}/>;
}

export default page;
