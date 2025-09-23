import Link from "next/link";

export default function DesktopNav() {
  return (
    <div className="flex sm:flex-col md:flex-row item-center gap-6 sm:gap-2  justify-end">
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
