import React from "react";
import { LampDemo } from "../components/Lambas";
import { currentUser } from "@clerk/nextjs";
import { LampDemo2 } from "../components/Lambas2";

async function page() {
  const user = await currentUser();

  if (!user)
    return (
      <div>
        {" "}
        <LampDemo2 />
      </div>
    );

  return (
    <div>
      <LampDemo />
    </div>
  );
}

export default page;
