import Link from "next/link"

type Props = {}

function page({}: Props) {
  return (
    <nav className="py-6 px-8 flex justify-between items-center">
        {/* right side */}
        <div className="flex gap-3 items-center">
            <Link href={"/"} className="text-3xl">Logo</Link>
        </div>
        {/* left side */}
    </nav>
  )
}

export default page