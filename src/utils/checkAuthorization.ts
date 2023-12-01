export const checkAuthorization = async (serialized: string) => {
  const authorizeHeaders = new Headers();
  authorizeHeaders.append("Authorize", serialized);
  const response = await (
    await fetch(`./auth`, { headers: authorizeHeaders })
  ).text();
  return response;
};
