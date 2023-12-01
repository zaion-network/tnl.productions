class Blinker {
  constructor(public element: HTMLElement) {}
  blink = () =>
    (this.element.style.color =
      this.element.style.color === "white" ? "transparent" : "white");
  clearAndBlink = (
    typingIntervalId: NodeJS.Timeout,
    res: (value: void | PromiseLike<void>) => void
  ) => clearAndBlink(typingIntervalId, this.blink, res);
}

const clearAndBlink = (
  typingIntervalId: NodeJS.Timeout,
  blink: () => "white" | "transparent",
  res: (value: void | PromiseLike<void>) => void
) => {
  clearInterval(typingIntervalId);
  setInterval(blink, 500);
  res();
};

class Inserter {
  constructor(public target: HTMLElement, public source: HTMLElement) {}
  insert = (textOrElement: string | HTMLElement) => {
    if (typeof textOrElement === "string") this.#createTextNode(textOrElement);
    else this.target.insertBefore(textOrElement, this.source);
  };
  #createTextNode = (textOrElement: string) => {
    const el = document.createTextNode(textOrElement);
    this.target.insertBefore(el, this.source);
  };
}

class StringManager {
  constructor(
    public word: string,
    public words: string[],
    public i: number,
    public wordMap?: Map<string, string>
  ) {}
  addLetter = (
    insert: (text: string | HTMLElement) => void,
    nextLetter: string
  ) => {
    this.word += nextLetter;
    insert(nextLetter);
    return { word: this.word, i: this.i };
  };
  insertLink = (
    insert: (text: string | HTMLElement) => void,
    wordMap: Map<string, string>
  ) => {
    const link = document.createElement("a");
    link.href = wordMap.get(this.words[this.i])!;
    link.textContent = this.words[this.i];
    insert(" ");
    insert(link);
    this.word = "";
    this.i++;
    // Add a space after each word
    if (this.i < this.words.length) insert(" ");
    else doNothing();
    return { word: this.word, i: this.i };
  };
  initWord = (insert: (text: string | HTMLElement) => void) => {
    this.word = "";
    this.i++;
    // condizione che controlla se la parola corrente è contenuta nel word map
    const wIsHasCWord = this.wordMap && this.wordMap.has(this.words[this.i]);
    if (wIsHasCWord) return this.insertLink(insert, this.wordMap!);
    else doNothing();
    if (this.i < this.words.length) insert(" ");
    else doNothing();
    return { word: this.word, i: this.i };
  };
  splitWord = (insert: (text: string | HTMLElement) => void) => {
    let nextLetter = this.words[this.i][this.word.length];
    let nextWord = this.word + nextLetter;
    if (this.wordMap && this.wordMap.has(nextWord)) doNothing();
    else return this.addLetter(insert, nextLetter);
    return { word: this.word, i: this.i };
  };
  insertBefore = (insert: (textOrElement: string | HTMLElement) => void) => {
    const parolaNonFinita = this.word.length < this.words[this.i].length;
    if (parolaNonFinita) return this.splitWord(insert);
    else return this.initWord(insert);
  };
}

const doNothing = () => {};

const logErrReturn = (elementId: string) => {
  console.error(`Element with id ${elementId} not found`);
  return;
};

export function typeWriter(
  text: string,
  delay: number,
  elementId: string,
  wordMap?: Map<string, string>
): Promise<void> {
  return new Promise((res, rej) => {
    let i = 0;
    let word = "";
    const words = text.split(" ");
    const manager = new StringManager(word, words, i, wordMap);
    const element = document.getElementById(elementId);
    if (!element) return logErrReturn(elementId);
    const getSpan = () => document.getElementsByTagName("span").item(0);
    if (getSpan()) element.removeChild(getSpan()!);
    element.classList.add("fontRoboto");
    element.textContent = "";
    const cursor = document.createElement("span");
    cursor.textContent = "|";
    cursor.style.color = "white";
    element.appendChild(cursor);
    const blinker = new Blinker(cursor);
    const blink = blinker.blink;
    const insert = new Inserter(element, cursor).insert;
    const cursorIntervalId = setInterval(blink, 500);
    setTimeout(() => {
      clearInterval(cursorIntervalId);
      cursor.style.color = "white";
      const insertOrClear = () => {
        const clearAndBlink = blinker.clearAndBlink;
        if (i < words.length) ({ i, word } = manager.insertBefore(insert));
        else if (i === words.length) clearAndBlink(typingIntervalId, res);
      };
      const typingIntervalId = setInterval(insertOrClear, delay);
    }, 1000);
  });
}
