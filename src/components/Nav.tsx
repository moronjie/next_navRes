import Image from "next/image";
import Link from "next/link"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";

type Props = {}

function Nav({}: Props) {
  return (
    <section>
      <nav className="py-6 px-8 flex justify-between items-center">
          {/* right side */}
          <div className="flex gap-3 items-center">
            <HiOutlineMenuAlt3 className="text-3xl" />
            <Link href={"/"} className="text-3xl text-black">Logo</Link>
          </div>
          {/* left side */}
          <div className="flex gap-3 items-center">
            <IoCartOutline className="text-3xl" />
            <Image src="https://i.pravatar.cc/300" alt="profile image" width={40} height={40} className="rounded-full w-8 h-8" />
          </div>
      </nav>
      <hr />
    </section>
  )
}

export default Nav