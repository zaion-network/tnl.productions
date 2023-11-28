const auth = {
  development: "/staging/auth",
  production: "/auth",
};
export const handleAuthDomain = (url: URL, env: keyof typeof auth) => {
  url.pathname = auth[env];
};
