const oneday = 60 * 60 * 24 * 1000;
const twoday = 2 * 60 * 60 * 24 * 1000;
const oneweek = oneday * 8;

const onedayago = Date.now() - oneday;
const twodayago = Date.now() - twoday;
const oneweekago = Date.now() - oneweek;

export class Post {
  imageUrl;
  text;
  userName;
  time;
  verified;
}

const post1 = new Post();
post1.text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus ligula sed lectus pretium placerat. Nunc dignissim, urna eu dapibus ullamcorper, nunc massa rhoncus urna, nec faucibus dui mauris in erat. Ut cursus egestas vehicula. Aenean venenatis, massa quis finibus efficitur, neque augue fringilla sapien, at aliquet libero velit non velit. Suspendisse quis neque auctor, hendrerit erat non, venenatis risus. Duis tristique nec elit ut imperdiet. Proin blandit risus ac congue dapibus. Nulla sit amet ipsum tristique, finibus ex ac, malesuada augue. Morbi ante sem, venenatis vel erat vel, viverra hendrerit velit. Quisque vulputate interdum mauris, at auctor leo tristique vel. Nunc sagittis risus vel eros tristique, sed commodo nisl lacinia. Nam vel urna sed dui efficitur interdum vel ac magna. Donec sodales rhoncus massa sit amet molestie. Vivamus cursus, ipsum venenatis vehicula laoreet, libero tortor posuere ligula, quis pharetra sapien risus id odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut eros sed ipsum imperdiet mattis vel eget ipsum. Etiam lectus purus, commodo sed bibendum id, suscipit vel libero. Nullam mattis lacus dictum nibh fringilla commodo. Sed pharetra purus id gravida consequat. Curabitur at elit velit. Nunc ac scelerisque ante. Vestibulum sit amet aliquet nisl. Duis ultricies.";
post1.userName = "Il labrador mini";
post1.time = onedayago;
post1.verified = true;

const post2 = new Post();
post2.text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a tempus nisi, sit amet viverra erat. Ut eget velit tortor. Aliquam eleifend sagittis mollis. Quisque sem felis, feugiat ultrices convallis ac, feugiat in massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ut iaculis odio. Vivamus ut turpis ipsum. Donec laoreet sit amet ante eu sodales.";
post2.imageUrl = "http://placehold.it/1000x1500/678226/ffffff&text=HTML.it";
post2.time = twodayago;

const post3 = new Post();
post3.imageUrl = "http://placehold.it/350x150/678226/ffffff&text=HTML.it";
post3.text = "Integer tempus mattis velit at fringilla.";
post3.time = oneweekago;

const post4 = new Post();
post4.imageUrl = "http://placehold.it/1000x1000/678226/ffffff&text=HTML.it";
post4.text = "Pellentesque cursus ligula sed lectus pretium placerat.";
post4.time = oneweekago;

export const POSTSLIST = [post1, post2, post3, post4];
