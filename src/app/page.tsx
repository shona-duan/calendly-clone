import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  // 获取用户 ID
  const { userId } = await auth();
  // 如果用户已登录,重定向到首页
  if (userId !== null) redirect("/events");
  
  return <div className="text-center container my-4mx-auto">
    <h1 className="text-3xl mb-4">Fancy Home page</h1>
    <div className="flex gap-2 justify-center">
      <Button asChild>
        <SignInButton />
      </Button>
      <Button asChild>
        <SignUpButton />
      </Button>
      <UserButton />
    </div>
  </div>;
}