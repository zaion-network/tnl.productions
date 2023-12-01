import { getMetas } from "./getMetas";

export const handleGetMetas = async (url: URL) => {
  console.log(
    "-------------------------------------------- got a meta request"
  );
  return await getMetas(url.searchParams.get("url")!);
};
