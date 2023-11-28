import { SimpleServer } from "@zaionstate/server";

export const handleStagingCss = () => {
  const headers = new Headers();
  headers.append(
    SimpleServer.Header.HeaderKeys.CONTENT_TYPE,
    SimpleServer.Header.ContentTypeValues.TEXT_CSS
  );
  const filestring = SimpleServer.getFileString("./assets/style.css");
  return { response: filestring, headers };
};
