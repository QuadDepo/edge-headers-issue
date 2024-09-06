import { NextRequest, NextResponse } from "next/server"

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

 
export function middleware(req: NextRequest) {

    req.headers.set('x-test', 'foo-bar');
    
    const response = NextResponse.next({
        headers: {
            'x-foo': 'foo-bar'
        }
    });

    response.headers.set('x-test', 'foo-bar');

    return response;
}