import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";

export default async function AuthLayout({
  children,
}: {children: React.ReactNode}
) {
  // 获取用户 ID
  const { userId } = await auth();
  // 如果用户已登录,重定向到首页
  if (userId !== null) redirect("/events");

  return <div className="min-h-screen flex flex-col justify-center items-center">{children}</div>;
}