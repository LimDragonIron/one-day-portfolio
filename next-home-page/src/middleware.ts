import { NextResponse, NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname
  const isFile = request.nextUrl.pathname.match(/\.(.*)$/)

  if (isFile) {
    return NextResponse.next()
  }

  if (pathName === '/') {
    return NextResponse.next()
  }

  if (pathName !== '/portfolio/resume') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*'
}
