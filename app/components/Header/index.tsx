// === Components ===
import { MapIcon } from "lucide-react";
import Button from "../Button";

// === Utils ===
import Link from "next/link";

// === Component ===
export default function Header() {
  return (
    <header className="bg-background text-olive px-site-px py-4 border-b border-b-olive-200">
      <div className="w-full max-w-site-w mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <MapIcon className="text-primary" size={32} />
          <h1 className="text-xl font-bold">Courses</h1>
        </Link>
        <Button
          label="Explore Courses"
          className="bg-olive-900 hover:opacity-85"
        />
      </div>
    </header>
  );
}
