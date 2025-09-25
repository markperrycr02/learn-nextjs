"use client";
import { editSinglePost } from "@/app/actions";
import Link from "next/link";
function EditPostButton(props: { id: string }) {
  return (
    <>
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
    </>
  );
}

export default EditPostButton;
