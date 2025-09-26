import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { saveSinglePost } from "@/app/actions";
import SubmitButon from "@/components/general/SubmitButon";
import prisma from "@/app/utils/db";
import { notFound } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData(postId: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: postId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

type Params = Promise<{ postId: string }>;

const EditBlogPost = async ({ params }: { params: Params }) => {
  console.log("postId=", (await params).postId);
  const { postId } = await params;
  const data = await getData(postId);
  console.log("data=", data.id);
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Edit Post</CardTitle>
          <CardDescription>You are editing your existing Post</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="edit-post-form"
            className="flex flex-col gap-4"
            action={async (formData: FormData) => {
              "use server";
              await saveSinglePost(data.id, formData);
            }}
          >
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input
                name="title"
                required
                type="text"
                placeholder="Title"
                defaultValue={data.title}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea
                name="content"
                required
                placeholder="Content"
                defaultValue={data.content}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input
                name="url"
                required
                type="url"
                placeholder="Image url"
                defaultValue={data.imageUrl}
              />
            </div>
            <SubmitButon />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditBlogPost;
