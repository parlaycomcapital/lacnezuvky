import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Security headers for maximum protection
const securityHeaders = {
  'X-DNS-Prefetch-Control': 'off',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'Content-Security-Policy': `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: blob:;
    connect-src 'self';
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
  `.replace(/\s+/g, ' ').trim(),
}

export function middleware(request: NextRequest) {
  // Password protection for all routes except static assets
  if (!request.nextUrl.pathname.startsWith('/_next') && 
      !request.nextUrl.pathname.startsWith('/images') &&
      !request.nextUrl.pathname.startsWith('/favicon')) {
    
    const password = request.cookies.get('lz-auth')?.value
    
    if (!password || password !== 'lz25') {
      if (request.nextUrl.pathname === '/') {
        return NextResponse.next()
      }
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Apply security headers
  const response = NextResponse.next()
  
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
