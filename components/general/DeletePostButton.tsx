"use client";
// import { deleteSinglePost } from "@/app/actions";
import { Button } from "../ui/button";

export default function DeletePostButton() {
  return (
    <Button
      // onClick={() => deleteSinglePost(postId)}
      className="cursor-pointer text-rounded-sm text-white"
      variant="destructive"
    >
      delete post
    </Button>
  );
}
