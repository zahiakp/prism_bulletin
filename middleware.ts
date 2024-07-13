import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  console.log("Token:", token);

  if (token) {
    try {
      if (token && token?.value === "prismpass") {
        console.log("Token is valid");
        return NextResponse.next();
      } else {
        console.log("Token is invalid");
        return NextResponse.rewrite(new URL("/login", request.url));
      }
    } catch (error) {
      console.error("Error:", error);
      return NextResponse.rewrite(new URL("/login", request.url));
    }
  } else {
    console.log("No token found");
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
