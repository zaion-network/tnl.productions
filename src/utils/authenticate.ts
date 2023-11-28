export const authenticate = async (npub: string) => {
  const autheticateHeaders = new Headers();
  autheticateHeaders.append("Authenticate", npub);
  const challenge = await (
    await fetch(`./auth`, { headers: autheticateHeaders })
  ).text();
  return challenge;
};
