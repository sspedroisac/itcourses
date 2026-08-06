"use client";

// === Components ===
import Dropdown from "../Dropdown";

// === Utils ===
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

// === Component ===
export default function LanguageSwitcher() {
  const currentLocale = useLocale();

  const options = [
    { value: "en", label: "🇺🇸 EN" },
    { value: "pt-BR", label: "🇧🇷 PT-BR" },
  ];

  const optionsClass =
    "bg-white text-black px-2 py-1 hover:bg-gray-200 w-[88px] text-left flex cursor-pointer no-wrap";

  const trigger = (
    <div className="cursor-pointer">
      {options.find((option) => option.value === currentLocale)?.label}
    </div>
  );

  return (
    <div className="flex items-center gap-2">
      <Dropdown trigger={trigger}>
        <div className="flex flex-col w-fit">
          {options.map((option) => (
            <Link
              key={option.value}
              className={optionsClass}
              href="/"
              locale={option.value}
            >
              {option.label}
            </Link>
          ))}
        </div>
      </Dropdown>
    </div>
  );
}
