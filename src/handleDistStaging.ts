import { SimpleServer } from "@zaionstate/server";

export const handleDistStaging = () => {
  const headers = new Headers();
  headers.append(
    SimpleServer.Header.HeaderKeys.CONTENT_TYPE,
    SimpleServer.Header.ContentTypeValues.TEXT_JAVASCRIPT
  );
  const filestring = SimpleServer.getFileString("./dist/staging.js");
  return { response: filestring, headers };
};
