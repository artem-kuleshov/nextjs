export const PAGES = {
  HOME: '/',
  EXPLORE: '/explore',
  MY_PROFILE: '/my-profile',
  PROFILE: (username: string) => `/user/${username}`
}