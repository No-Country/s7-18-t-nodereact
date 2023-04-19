export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/home', '/explore', '/followed', '/followers', '/profile', '/usersProfile', '/detailRecipe'],
};
