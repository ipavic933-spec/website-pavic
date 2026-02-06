import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="flex gap-6">
        <Link href="/">About us</Link>
        <Link href="/">Services</Link>
        <Link href="/">Contact</Link>
      </nav>
  )
}

export default Navigation;