import { SimpleServer } from "@zaionstate/server";

export const handleStagingHtml = () => {
  const headers = new Headers();
  headers.append(
    SimpleServer.Header.HeaderKeys.CONTENT_TYPE,
    SimpleServer.Header.ContentTypeValues.TEXT_HTML
  );
  const filestring = SimpleServer.getFileString("./staging.html");
  return { response: filestring, headers };
};
