import { getCookie } from 'cookies-next'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const authPath = '/login'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const sessionId = request.cookies.get('sessionId')?.value
  console.log(sessionId)
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith(authPath) && sessionId)
    return NextResponse.redirect(new URL('/cart', request.url))

  if (request.nextUrl.pathname.startsWith('/cart') && !sessionId)
    return NextResponse.redirect(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login', '/cart']
}
