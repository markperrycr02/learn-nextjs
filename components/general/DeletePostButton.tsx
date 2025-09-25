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
  AlertDialogTrigger,
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
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
