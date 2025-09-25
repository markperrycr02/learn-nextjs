"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./utils/db";
import { revalidatePath } from "next/cache";

export async function deleteSinglePost(id: string) {
  await prisma.blogPost.delete({ where: { id: id } });
  revalidatePath("/");
  redirect("/dashboard");
}

export async function editSinglePost(id: string) {}

export async function handleSubmission(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const url = formData.get("url");
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }

  await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: url as string,
      authorID: user.id as string,
      authorImage: user?.picture as string,
      authorName: user?.given_name as string,
    },
  });

  revalidatePath("/");

  return redirect("/dashboard");
}
