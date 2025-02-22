import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="sticky top-0 left-0 z-50 w-full bg-gray-800 text-white md:px-8 py-4">
        <div className="w-full flex justify-between items-center md:px-8 py-2">
          {/* Left Section with 3 Links */}
          <section className="flex space-x-4">
            <Link href="/link1" className="hover:underline">
              Link 1
            </Link>
            <Link href="/link2" className="hover:underline">
              Link 2
            </Link>
            <Link href="/link3" className="hover:underline">
              Link 3
            </Link>
          </section>
  
          {/* Middle Section with Icon */}
          <section className="flex justify-center">
            <Link href="/" className="text-lg font-semibold hover:underline">
              ICON
            </Link>
          </section>
  
          {/* Right Section with 3 Links */}
          <section className="flex space-x-4">
            <Link href="/link4" className="hover:underline">
              Link 4
            </Link>
            <Link href="/link5" className="hover:underline">
              Link 5
            </Link>
            <Link href="/link6" className="hover:underline">
              Link 6
            </Link>
          </section>
        </div>
      </nav>
    );
}