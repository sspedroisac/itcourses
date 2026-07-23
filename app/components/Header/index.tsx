// === Components ===
import Logo from "../Logo";
import Button from "../Button";
import Link from "next/link";

// === Component ===
export default function Header() {
  return (
    <header className="bg-background text-olive px-site-px py-4 border-b border-b-olive-200">
      <div className="w-full max-w-site-w mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/explore">
          <Button
            label="Explore Courses"
            className="bg-olive-900 hover:opacity-85"
          />
        </Link>
      </div>
    </header>
  );
}
