"use client"
import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

type Props = {}
type navLink = {
  name: string,
  href: string
}

const navLinks: navLink[] = [
  {
    name: "Collection",
    href: "#"
  },
  {
    name: "Shop",
    href: "#"
  },
  {
    name: "About",
    href: "#"
  },
  {
    name: "Contact",
    href: "#"
  }
]

function Nav({}: Props) {
  const [showNav, setshowNav] = useState(false)
  return (
    <section>
      <nav className="py-6 px-8 flex justify-between items-center ">
          {/* right side */}
          <div className="flex gap-3 items-center">
            <HiOutlineMenuAlt3 className="text-3xl sm:hidden" onClick={() => setshowNav(true)} />
            <Link href={"/"} className="text-3xl font-bold text-black">Logo</Link>
          </div>
          {/* middle side */}
          <div className="hidden text-black/70 sm:flex gap-8">
          {navLinks.map((d,i)=>{
          return (
            <div key={i}>
              <Link href={d.href} className="text-xl font-bold cursor-pointer">{d.name}</Link>
            </div>
            )
          })}
          </div>
          {/* left side */}
          <div className="flex gap-3 items-center">
            <IoCartOutline className="text-3xl" />
            <Image src="https://i.pravatar.cc/300" alt="profile image" width={40} height={40} className="rounded-full w-8 h-8" />
          </div>
      </nav>
      <section className={clsx("fixed top-0 left-0 h-full w-screen bg-black/50 transition-all -translate-x-full sm:hidden", showNav && "translate-x-0")}>
        <div className="flex flex-col  items-center absolute top-0 left-0 h-screen w-56 gap-4 py-10 px-8 bg-white text-black rounded-br-[50px]">
        <IoMdClose className="text-3xl cursor-pointer mb-5" onClick={() => setshowNav(false)} />
        {navLinks.map((d,i)=>{
          return (
            <div className="flex gap-10 items-center flex-col" key={i}>
              <Link href={d.href} className="text-xl font-bold cursor-pointer">{d.name}</Link>
            </div>
          )
        })}
        </div>
      </section>
      <hr />
    </section>
  )
}


export default Nav