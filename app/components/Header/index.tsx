import Link from "next/link";
import Button from "../Button";

export default function Header() {
  return (
    <header className="bg-background text-olive px-16 py-4">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Courses</h1>
        <Button label="Explore Courses" />
      </div>
    </header>
  );
}
