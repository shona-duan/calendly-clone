import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 首页、登陆页、注册页都是公开路由
const isPublicRoute = createRouteMatcher(
  ['/', '/sign-in(.*)', '/sign-up(.*)']
)

// 确保私人路由不会被访问，只能自己访问
export default clerkMiddleware((auth, req) => {
  // 如果不是公开路由，就只能自己访问
  if (!isPublicRoute(req)) {
    auth.protect()
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};