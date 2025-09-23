"use client";
import Link from "next/link";
// import { deleteSinglePost } from "@/app/actions";
import { Button } from "../ui/button";

export default function DeletePostButton() {
  return (
    <>
      <Link
        // onClick={() => deleteSinglePost(postId)}
        className="cursor-pointer text-rounded-sm text-red-600 hover:text-red-800"
        href="#"
      >
        delete
      </Link>
      {" | "}
      <Link
        // onClick={() => deleteSinglePost(postId)}
        className="cursor-pointer text-rounded-sm text-red-600 hover:text-red-800"
        href="#"
      >
        edit
      </Link>
    </>
  );
}
