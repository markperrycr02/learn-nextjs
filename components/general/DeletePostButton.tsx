"use client";
import Link from "next/link";
import { deleteSinglePost, editSinglePost } from "@/app/actions";

export default function DeletePostButton(props: { id: string }) {
  return (
    <div className="flex gap-2">
      <Link
        onClick={(e) => {
          {
            confirm("Are you sure you want to delete this post?") &&
              deleteSinglePost(props.id);
            e.preventDefault();
          }
        }}
        className="cursor-pointer text-rounded-sm text-red-600 hover:text-red-800"
        href="#"
      >
        delete
      </Link>
      <div className="text-gray-300">|</div>
      <Link
        onClick={(e) => {
          editSinglePost(props.id);
          e.preventDefault();
        }}
        className="cursor-pointer text-rounded-sm text-red-600 hover:text-red-800"
        href="#"
      >
        edit
      </Link>
    </div>
  );
}
