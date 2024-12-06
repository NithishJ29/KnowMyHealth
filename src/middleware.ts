import {
  authMiddleware,
  withAuth,
} from "@kinde-oss/kinde-auth-nextjs/middleware";

export default function middleware(req: Request) {
  return withAuth(req);
}

export const config = {
<<<<<<< HEAD
  matcher: ["/profile", "/appointments","/health","/surgery","/wellness","/medicine","/diagnostics","/dental"],
=======
  matcher: ["/profile", "/appointments","/consultation","/health","/surgery","/wellness"],
>>>>>>> 906d4111242898be760e4f4ac5ff6854ba6d62e1
};
