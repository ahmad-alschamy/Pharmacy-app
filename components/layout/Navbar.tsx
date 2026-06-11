import {Link} from "@/i18n/navigation";
import Image from "next/image"
import {getTranslations} from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "services",
    href: "/services",
  },
  {
    key: "products",
    href: "/products",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "contact",
    href: "/contact",
  },
]

export default async function Navbar() {

  const t = await getTranslations("Navbar");
  
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
               <p 
               className={`
                  text-sm
                  text-muted
                `}
              >
            {t("logo")}

              </p>
            </div>
          </div>

          {/* CENTER - NAVIGATION */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.key}>
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
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT - LANGUAGES */}
          <LanguageSwitcher />
          {/* <div className="flex items-center gap-3">
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
          </div> */}
        </nav>
      </div>
    </header>
  )
}