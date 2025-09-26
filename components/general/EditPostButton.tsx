import Link from "next/link";
function EditPostButton(props: { postId: string }) {
  console.log("props.id", props.postId.trim());
  return (
    <>
      <div className="text-gray-300">|</div>
      <Link
        href={`/dashboard/edit/${props.postId}`}
        className="cursor-pointer text-rounded-sm text-green-600 hover:text-green-500"
      >
        edit
      </Link>
    </>
  );
}

export default EditPostButton;
