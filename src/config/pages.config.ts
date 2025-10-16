export const PAGES = {
  HOME: '/',
  EXPLORE: '/explore',
  MY_PROFILE: '/my-profile',
  SHOP: '/shop',
  SSG: '/shop/ssg',
  ISR: '/shop/isr',
  PROFILE: (username: string) => `/user/${username}`
}