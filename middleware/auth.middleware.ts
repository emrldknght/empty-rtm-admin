import {NextRequest, NextResponse} from "next/server";

export default function middleware(request: NextRequest) {
  console.log('auth middleware!');
  console.log(request);


  return NextResponse.redirect(new URL('/auth', request.url))
}