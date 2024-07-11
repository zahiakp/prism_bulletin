import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token: any = request.cookies.get("token");

  if (token) {
    try {
      if (token && token?.value === "prismpass") {
        return NextResponse.next();
      }
    } catch (error) {
      return NextResponse.rewrite(new URL("/login", request.url));
    }
  } else {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};