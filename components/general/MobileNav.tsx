import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="md:hidden flex flex-col item-center gap-6">
      <Link
        className="text-sm font-medium hover:text-blue-500 transition-colors"
        href="/"
      >
        Home
      </Link>

      <Link
        className="text-sm font-medium hover:text-blue-500 transition-colors"
        href="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  );
}
