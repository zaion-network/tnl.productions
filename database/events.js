const oneday = 60 * 60 * 24 * 1000;
const twoday = 2 * 60 * 60 * 24 * 1000;
const oneweek = oneday * 8;

const onedayago = Date.now() - oneday;
const twodayago = Date.now() - twoday;
const oneweekago = Date.now() - oneweek;

const req = [
  "REQ",
  "31954",
  {
    limit: 100,
    kinds: [1],
    authors: [
      "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    ],
  },
];
const event1 = [
  "EVENT",
  "31954",
  {
    id: "0298e17dd53f9faf787b6e92b199e5e6c95c76859e876344f66accfe34d3292e",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: 1698057342,
    kind: 1,
    tags: [],
    content: "we are almost there!!",
    sig: "04ac622be6c4de7973dfae187be9f64109ca55eb284b96a8f871be0714638197bb37c828173a7c54f4fa180155c458e4db7606d1c31c75070115968dc4045265",
  },
];
const event2 = [
  "EVENT",
  "31954",
  {
    id: "5c0709f6292658f61af6f092f199b569e8ceb05f9b6064d8f1642b62c2f68a5a",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: 1694516483,
    kind: 1,
    tags: [
      [
        "e",
        "58e851de88c451505a82d3e2fc62ff131fce067c6c3a2971da86f8a891ced540",
        "",
        "reply",
      ],
      ["p", "3eb574a5dfc3a3a03f20d20d77e815a96a2121c89dd27c144e69603068733f49"],
    ],
    content:
      "well the same from going from 1$ = 3829 sat (right now) to 1$ = 100 sats, isn't it more connected to the time span? a 100sats for 1$ is a 1.000.000 worth bitcoin ... it depends how quick it goes there to call it hyper inflation, but yeah, anyway before reaching 1$ = 1sats there will be a long period where it will be closer to 100 sats 1$.\n\nmaybe is because I am Italian, and I was alive when we had liras, which got exchanged with euros on a fix exhange rate o 1928 Liras = 1€. So it's kinda familiar thinking as 4200sats = 1€\n\nit can also make sense thinking about 42bits = 1€, so in fact bits makes sense\n\nI checked here: https://en.bitcoin.it/wiki/Units and it seems there is no \"nickname\" for a 0,00001 btc (10bits, 1000sats), so it makes sense to show the values on a bit base ..",
    sig: "d6c77c475242227824373cb8686a9acfcd8a1cc75e50f31832707a5c239cb39fc1811037af9161c9540a28fba2e8f4e15d6c244092a5468c43a0b78ec8a9d3fa",
  },
];
const event3 = [
  "EVENT",
  "31954",
  {
    id: "3d17a6afec1df73e65d2daa31130f1fe6a41ba369568a5e79f59eae79cc77aca",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: 1694465442,
    kind: 1,
    tags: [
      [
        "e",
        "6bdf2a0f0ff35527e838f6352e9a579a2007b117e3c7e4d4a4539f849147b7be",
        "",
        "reply",
      ],
      ["p", "3eb574a5dfc3a3a03f20d20d77e815a96a2121c89dd27c144e69603068733f49"],
    ],
    content:
      "makes sense, but eventually one day 1 sats = 1 $, then what do you do?",
    sig: "a366c1a419dfacdabda8a965d0385caa91040a093b9d730510398e9c79d4dbab4e1eb336c33f39403a1a7c2f52ea1bf808762a866f6b746d762d56e5ded38745",
  },
];
const event4 = [
  "EVENT",
  "31954",
  {
    id: "5a1d80010d8125b4df4cedff9b974c7524db169781c3ebda8921f282ce7a9163",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: 1694453056,
    kind: 1,
    tags: [
      [
        "e",
        "2b67ac3e22c23185db3ce751b91a612df05ae12e1eb036725563adfd41959cf5",
        "",
        "reply",
      ],
      ["p", "3d842afecd5e293f28b6627933704a3fb8ce153aa91d790ab11f6a752d44a42d"],
    ],
    content:
      "music is really low! let's make this place a little bit more vibey =)",
    sig: "285dee82f81892aeb47f4c6bb7f56a3b68b6d21aef644295a44c68c20f8144ed094f2323f788b3415c0902d12a0438c331e82295eb0ffff4555ff45eb0f9617b",
  },
];
const event5 = [
  "EVENT",
  "31954",
  {
    id: "ddcb0d3f5b25c4778a13b9d8fbd5f167b1b2340fc865367d6fc82e2e14ccdef0",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: 1694358351,
    kind: 1,
    tags: [],
    content:
      "Hello World! ehm... Nostr 😁!\nWe are here to make you dance a little =)",
    sig: "06a1028b8c8b67a16a70d73f5ea4b06e983a80c8c33cd24c633a74285dde18c19bacff93d047b422be303bbdaa25fda33331335a8e7d3bb0ffadb2555ff7c01c",
  },
];
const event6 = [
  "EVENT",
  "31945",
  {
    id: "fdfdfdfdfdfd7172717271dfdfdfdfdfd7127271727dfdfd712727f123451845",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: onedayago,
    kind: 1,
    tags: [["r", "https://bitkey.build/screens-are-not-a-panacea/"]],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. https://bitkey.build/screens-are-not-a-panacea/ Pellentesque cursus ligula sed lectus pretium placerat. Nunc dignissim, urna eu dapibus ullamcorper, nunc massa rhoncus urna, nec faucibus dui mauris in erat. Ut cursus egestas vehicula. Aenean venenatis, massa quis finibus efficitur, neque augue fringilla sapien, at aliquet libero velit non velit. Suspendisse quis neque auctor, hendrerit erat non, venenatis risus. Duis tristique nec elit ut imperdiet. Proin blandit risus ac congue dapibus. Nulla sit amet ipsum tristique, finibus ex ac, malesuada augue. Morbi ante sem, venenatis vel erat vel, viverra hendrerit velit. Quisque vulputate interdum mauris, at auctor leo tristique vel. Nunc sagittis risus vel eros tristique, sed commodo nisl lacinia. Nam vel urna sed dui efficitur interdum vel ac magna. Donec sodales rhoncus massa sit amet molestie. Vivamus cursus, ipsum venenatis vehicula laoreet, libero tortor posuere ligula, quis pharetra sapien risus id odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut eros sed ipsum imperdiet mattis vel eget ipsum. Etiam lectus purus, commodo sed bibendum id, suscipit vel libero. Nullam mattis lacus dictum nibh fringilla commodo. Sed pharetra purus id gravida consequat. Curabitur at elit velit. Nunc ac scelerisque ante. Vestibulum sit amet aliquet nisl. Duis ultricies.",
    sig: "",
  },
];
const event7 = [
  "EVENT",
  "31945",
  {
    id: "fdfdfdfdfdfd7172717271dfdfdfdfdfd7127271727dfdfd712727f123451845",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: twodayago,
    kind: 1,
    tags: [["r", "http://placehold.it/1000x1500/678226/ffffff&text=HTML.it"]],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a tempus nisi, sit amet viverra erat. Ut eget velit tortor. Aliquam eleifend sagittis mollis. Quisque sem felis, feugiat ultrices convallis ac, \nhttp://placehold.it/1000x1500/678226/ffffff&text=HTML.it feugiat in massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ut iaculis odio. Vivamus ut turpis ipsum. Donec laoreet sit amet ante eu sodales.",
    sig: "",
  },
];
const event8 = [
  "EVENT",
  "31945",
  {
    id: "fdfdfdfdfdfd7172717271dfdfdfdfdfd7127271727dfdfd712727f123451845",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: oneweekago,
    kind: 1,
    tags: [["r", "http://placehold.it/350x150/678226/ffffff&text=HTML.it"]],
    content:
      "Integer tempus mattis velit at fringilla. http://placehold.it/350x150/678226/ffffff&text=HTML.it",
    sig: "",
  },
];
const event9 = [
  "EVENT",
  "31945",
  {
    id: "fdfdfdfdfdfd7172717271dfdfdfdfdfd7127271727dfdfd712727f123451845",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: oneweekago,
    kind: 1,
    tags: [["r", "http://placehold.it/1000x1000/678226/ffffff&text=HTML.it"]],
    content:
      "Pellentesque cursus ligula sed lectus pretium placerat. http://placehold.it/1000x1000/678226/ffffff&text=HTML.it",
    sig: "",
  },
];
const event10 = ["EOSE"];

const metadataevent = [
  "EVENT",
  "31954",
  {
    id: "e0f505c7651440afd270937be3f2b4b6cb0440da9c2f77a91acad2f8fa61a1f9",
    pubkey: "49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc",
    created_at: 1694464952,
    kind: 0,
    tags: [],
    content:
      '{"displayName":"Tek No Logique","display_name":"Tek No Logique","name":"teknologique","about":"Independent Music Label","lud16":"teknologique@getalby.com","pubkey":"49fd86bcb4f59963a2eea88449b46716cc606b53be62b13cd450a7ee9cbd92fc","npub":"npub1f87cd0957kvk8ghw4zzyndr8zmxxq66nhe3tz0x52zn7a89ajt7qk6956j","created_at":1694358495,"nip05":"teknologique@iris.to","picture":"https://m.primal.net/HLCy.png"}',
    sig: "8808bd738bbfcbdc54e389cd35efe0d8608e6b91708f6fd6cb964d405dcb470663c407bda6dde82702b3b0c385213e9675f64233d3afbc85e2607955db265c6d",
  },
];

/**
 * @callback myCallback
 * @param {[string, string, {id: string, pubkey:string, created_at:number, kind:number, content:string,tags:[[string,string]] sig:string}]} param1
 */
/**
 *
 * @param {myCallback} cb
 */
export const requestEvents = cb => {
  [
    event1,
    event2,
    event3,
    event4,
    event5,
    event6,
    event7,
    event8,
    event9,
    event10,
  ].forEach(async e => await cb(e));
};

/**
 *
 * @param {myCallback} cb
 */
export const requestMetadata = cb => {
  [metadataevent].forEach(e => cb(e));
};
