export const showAboutPage = how => {
  const message = `Tek No Logique Records, since 2001.
We are an indipendent record label.
We believe in freedom and music!

TNL is stepping in the decentralization world and has created a DAO.

We will be using the nostr protocol to enable unstoppable communication.
If you wish to be a step ahead get yourself an Alby account to be able to have a
Bitcoin lightning wallet to connect to the network.
Subscribe for more news`;

  const shortMessage = `
Tek No Logique Records, since 2001.
We are an indipendent record label.
We believe in freedom and music!

TNL is stepping in the decentralization world and has created a DAO.

Subscribe (when enabled 😅) for more news!!
${document.documentElement.clientHeight}`;
  if (document.documentElement.clientHeight < 600) {
    how(shortMessage);
  } else {
    how(message);
  }
};
