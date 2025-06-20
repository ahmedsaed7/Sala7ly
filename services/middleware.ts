import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of paths where we don't want to show Header and Footer
const noHeaderFooterPaths = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/client'
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const shouldShowHeaderFooter = !noHeaderFooterPaths.some(path => 
    pathname.startsWith(path)
  );

  // Add a custom header to indicate whether to show header and footer
  const response = NextResponse.next();
  response.headers.set('x-show-header-footer', shouldShowHeaderFooter.toString());
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 