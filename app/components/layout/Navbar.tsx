import Link from "next/link"
import { Cross } from "lucide-react"
import Image from "next/image"
import { pacifico } from "@/app/lib/fonts"

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export default function Navbar() {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="container-custom">
        <nav className="h-20 flex items-center justify-between">

          {/* LEFT - LOGO */}
          <div className="flex items-center gap-3">
            <div className="text-white p-2 rounded-full min-w-12">
              {/* <Cross size={22} /> */}
              <Image
                src="/logo-high-resolution.png"
                alt="Logo"
                width={32}
                height={32}
              />
            </div>

            <div>
              <h2
                className={`
                  text-2xl
                  text-primary
                  inline
                `}
              >
                NaturVital
              </h2>

              {/* <p 
               className={`
                  ${pacifico.className}
                  text-md
                  text-muted
                `}
              >
                Pharmacy
              </p> */}
               <p 
               className={`
                  text-sm
                  text-muted
                `}
              >
                Apotheke
              </p>
            </div>
          </div>

          {/* CENTER - NAVIGATION */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="
                  relative
                  inline-block
                  font-medium
                  text-foreground
                  transition-transform
                  duration-300
                  hover:scale-105
                  hover:-translate-y-0.5
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-0.5
                  after:w-0
                  after:bg-primary
                  after:transition-[width]
                  after:duration-300
                  hover:after:w-full
                  "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT - LANGUAGES */}
          <div className="flex items-center gap-3">
            <button
              className="
              flex
              items-center
              justify-center
              gap-2
              h-8
              px-2
              rounded-full
              border
              border-border
              bg-white
              hover:border-primary
              transition-colors
              duration-300
              "
            >
              <span>🇬🇧</span>
              <span className="font-medium">
                EN
              </span>
            </button>
            <button
                className="
              flex
              items-center
              justify-center
              gap-2
              h-8
              px-2
              rounded-full
              border
              border-border
              bg-white
              hover:border-primary
              transition-colors
              duration-300
              "
            >
              <span>🇩🇪</span>
              <span className="font-medium">
                DE
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}