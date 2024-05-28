import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = async () => {
  const session = await auth();
  return (
    <div className=" bg-gray-200 py-4">
      <div className=" container flex justify-between items-center">
        <div className=" flex items-center gap-12">
          <Link href="/" className="hover:underline flex items-center gap-2 ">
            <Image src="/logo.png" width="50" height="50" alt="logo" />
            Auction.in
          </Link>
          <div>
            <Link
              href="/bids/create"
              className="hover:underline flex items-center gap-2 "
            >
              Sell an Item
            </Link>
          </div>
        </div>
        <div className=" flex items-center gap-4 ">
          <div> {session?.user?.name}</div>
          <div> {session ? <SignOut /> : <SignIn />}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
