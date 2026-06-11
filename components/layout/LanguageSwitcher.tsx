"use client";

import {useLocale} from "next-intl";
import {usePathname} from "@/i18n/navigation";
import {Link} from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-3">
      <Link
        href={pathname}
        locale="en"
        className={locale === "en" ? "font-bold" : ""}
      >
        EN
      </Link>

      <Link
        href={pathname}
        locale="de"
        className={locale === "de" ? "font-bold" : ""}
      >
        DE
      </Link>
    </div>
  );
}