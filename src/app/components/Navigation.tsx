import Link from "next/link";

type NavigationProps = {
  orijentation?: 'col' | 'row';
}

const Navigation = ({ orijentation = 'row' }: NavigationProps) => {
  return (
    <nav className={`flex gap-x-6 gap-y-2 flex-${orijentation}`}>
      <Link href="/">About us</Link>
      <Link href="/">Services</Link>
      <Link href="/">Contact</Link>
    </nav>
  )
}

export default Navigation;