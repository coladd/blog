import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.metaKey && event.keyCode === 75) {
        console.log("Command+K was pressed!");
        inputRef.current.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInputEnter = (event) => {
    if (event.keyCode === 13) {
      console.log(333);
      console.log(searchValue);
    }
  };

  return (
    <div className=" sticky top-0 mb-6 bg-white">
      <div className="navbar mx-auto lg:w-[1060px]">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 ">
          <div className=" px-2 text-3xl lg:mx-2">
            <Link href="/">
              <span className="bg-gradient-to-r from-primary to-[#93e9d1] bg-clip-text font-bold text-transparent">
                夜静风轻`
              </span>
            </Link>
          </div>
          <div className="form-control mr-4 hidden lg:block">
            <div className="hidden w-full max-w-sm lg:flex">
              <label className="searchbox relative mx-3 w-full">
                <svg
                  className="pointer-events-none absolute z-10 my-3 ml-2 stroke-current text-base-content opacity-60"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <input
                  ref={inputRef}
                  onKeyUp={handleInputEnter}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  value={searchValue}
                  placeholder="搜索…"
                  className="input-primary h-10 w-60 pr-14 pl-8"
                />
                <div className="pointer-events-none absolute right-2 top-2 hidden gap-1 opacity-50 lg:flex">
                  <kbd className="kbd kbd-sm">⌘</kbd>
                  <kbd className="kbd kbd-sm">K</kbd>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className=" hidden flex-none lg:block">
          <ul className="menu menu-horizontal text-sm text-gray-800">
            <li>
              <Link href="/">首页</Link>
            </li>
            <li>
              <Link href="/about">后端</Link>
            </li>
            <li tabIndex={0}>
              <a>
                前端
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="bg-base-100 p-2">
                <li>
                  <a>JavaScript</a>
                </li>
                <li>
                  <a>Vue</a>
                </li>
                <li>
                  <a>React</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about">关于</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
