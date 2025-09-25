"use client";
import Link from "next/link";
import { deleteSinglePost, editSinglePost } from "@/app/actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

export default function DeletePostButton(props: { id: string }) {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  return (
    <div className="flex gap-2">
      <Link
        onClick={(e) => {
          {
            setIsAlertDialogOpen(true);
            // deleteSinglePost(props.id);
            e.preventDefault();
          }
        }}
        className="cursor-pointer text-rounded-sm text-red-600 hover:text-red-800"
        href="#"
      >
        delete
      </Link>

      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-400"
              onClick={() => deleteSinglePost(props.id)}
            >
              Yes, delete it!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
