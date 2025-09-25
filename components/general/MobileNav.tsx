import Link from "next/link";
import { Menu } from "lucide-react";
import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";

export default async function MobileNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex py-5 md:hidden">
      <div className="flex justify-start w-full">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-blue-500">Mark</span>
          </h1>
        </Link>
      </div>
      <Sheet modal={false}>
        <div className="flex items-center">
          <p className="flex mr-4 justify-center">{user?.given_name}</p>
          <SheetTrigger className={` buttonVariants({ variant: "ghost"}})`}>
            <Menu />
          </SheetTrigger>
        </div>
        <SheetContent>
          <SheetTitle></SheetTitle>

          <nav className="py-5 mt-10 flex flex-col items-center gap-5">
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
            {user ? (
              <div className="flex gap-4 items-center">
                <LogoutLink
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Logout
                </LogoutLink>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <LoginLink className={buttonVariants()}>Login</LoginLink>
              </div>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
