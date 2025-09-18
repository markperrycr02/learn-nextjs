"use client";

import { Button } from "../ui/button";

export default function DeletePostButton() {
  return (
    <Button
      onClick={() => deletePost("SDSD")}
      className="cursor-pointer text-xs rounded-sm"
      variant="destructive"
    >
      delete post
    </Button>
  );
}

async function deletePost(id: string) {
  "server only";

  console.log(id);
}
