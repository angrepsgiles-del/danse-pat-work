import { withAuth } from '@clerk/nextjs/edge'

export default withAuth({
  publicRoutes: ['/', '/events'],
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
