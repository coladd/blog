import Navbar from "../Navbar/index";
import React from "react";
import Link from "next/link";
export default function Drawer({ children }) {
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar />
        <main className="mx-auto mb-4 w-[100%] bg-white lg:w-[1060px]">
          {children}
        </main>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu w-60 bg-base-100 p-4">
          <li>
            <Link href="/">首页</Link>
          </li>
          <li>
            <Link href="/about">关于</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
