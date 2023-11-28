import { sendDM } from "./handleNostr";

export const handleSubscribe = async (url: URL) => {
  try {
    if (url.pathname === "/subscribe") {
      const TNLPUB =
        "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc";
      const TESTPUB =
        "005be03966ded6393a773e61469698b48a90944f6ce2b055b1d099e2c5fb1756";
      const sk = process.env.SEC;
      const pk = process.env.PUB;
      const res = await sendDM(
        process.env.NODE_ENV === "development" ? TESTPUB : TNLPUB,
        url.searchParams.get("m"),
        sk,
        pk,
        (e: any) => {}
      );
      return url.searchParams.get("m");
    }
  } catch (error) {
    console.log(error);
    throw new Error("there was and error handling the subscribe request");
  }
};
