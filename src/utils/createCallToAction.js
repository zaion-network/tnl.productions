import { UIDesign } from "@zaionstate/ui/";

class UserInput extends EventTarget {
  constructor(userInput) {
    super();
    if (!userInput) return;
    this.userInput = userInput;
  }
  sanitizeEmail(sanitizer) {
    if (!this.userInput) throw `no user input provided`;
    this.sanitizedEmail = sanitizer(this.userInput);
    return this;
  }
  encryptEmail(encrypter) {
    if (!this.sanitizedEmail) throw `email was not sanitized`;
    this.encryptedEmail = encrypter(this.sanitizedEmail);
    return this;
  }
  send(sender) {
    if (!this.encryptedEmail) throw `email was not encrypted`;
    this.sendResponse = sender(this.encryptedEmail);
    return this;
  }
}

/**
 * crea call to action
 * @param {document} document
 */
export const createCallToAction = document => {
  const BUTTONMESSAGE = "NEWS, PLEASE!!";
  const containerDesing = new UIDesign({
    className: "flex flex-wrap pc_c",
    id: "call-to-action",
    tag: "div",
  });
  const container = containerDesing.element;

  const buttonDesign = new UIDesign({
    tag: "button",
    id: "button",
  });
  const button = buttonDesign.element;
  buttonDesign.setInnerText(BUTTONMESSAGE);

  container.appendChild(button);

  button.addEventListener("click", () => {
    const askToSubscribe = () => {
      const answer = window.prompt(
        "Enter your email to subscribe to our newsletter"
      );
      return answer;
    };
    const promptWip = () => {
      const message = `we are currently working on this feature, encrypting messages is fun!!
        `;
      window.confirm(message);
    };
    const answer = askToSubscribe();
    try {
      new UserInput(answer)
        .sanitizeEmail(answer => {
          console.log(validator.isEmail(answer));
          if (answer === null) {
            throw Error("rejected");
          } else if (!validator.isEmail(answer)) {
            window.alert("You Must input a valid email");
          } else return answer;
        })
        .encryptEmail(sanitizedInput => {
          return sanitizedInput;
        })
        .send(ecryptedInput => {
          try {
            fetch(`/subscribe?m=${ecryptedInput}`);
            window.confirm(
              `thank you for subscribing with this address: ${ecryptedInput}`
            );
            return true;
          } catch (error) {
            throw Error(error);
          }
        });
    } catch (error) {
      console.log(error);
    }
  });
  return container;
};
