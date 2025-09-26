import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";

export default function Alertit(props: {
  isAlertDialogOpen: boolean;
  setIsAlertDialogOpen: (open: boolean) => void;
  title?: string;
  id: string;
  serverAction: (id: string) => void;
}) {
  const title = props.title || "Are you absolutely sure?";
  return (
    <AlertDialog
      open={props.isAlertDialogOpen}
      onOpenChange={props.setIsAlertDialogOpen}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-400"
            onClick={() => props.serverAction(props.id)}
          >
            Yes, delete it!
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
