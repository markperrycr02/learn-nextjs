"use client";
// import { deleteSinglePost } from "@/app/actions";
import { Button } from "../ui/button";

export default function DeletePostButton(postId: any) {
  return (
    <Button
      // onClick={() => deleteSinglePost(postId)}
      className="cursor-pointer text-xs rounded-sm"
      variant="destructive"
    >
      delete post
    </Button>
  );
}
