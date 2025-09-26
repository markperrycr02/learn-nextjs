"use client";
import Link from "next/link";
import { deleteSinglePost } from "@/app/actions";

import { useState } from "react";
import Alertit from "./Alert";

export default function DeletePostButton(props: { id: string }) {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  return (
    <div className="flex gap-2">
      <Link
        onClick={(e) => {
          {
            setIsAlertDialogOpen(true);
            e.preventDefault();
          }
        }}
        className="cursor-pointer text-rounded-sm text-red-600 hover:text-red-800"
        href="#"
      >
        delete
      </Link>

      <Alertit
        isAlertDialogOpen={isAlertDialogOpen}
        setIsAlertDialogOpen={setIsAlertDialogOpen}
        serverAction={() => deleteSinglePost(props.id)}
        id={props.id}
        title="Confirm Deletion"
      />
    </div>
  );
}
