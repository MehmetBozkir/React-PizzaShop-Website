import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="grid place-items-center m-auto mt-32">
        <SignUp />
      </div>
    </>
  );
}
