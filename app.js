// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "Kenya",
//   title: "Elder of the Order of the Golden Heart of Kenya"
// }

// // const {
// //   first,
// //   last,
// //   time
// // } = runner;

// const {
//   country: nation,
//   title: honorific
// } = runner;

// const {
//   first,
//   last,
//   ...other
// } = runner;
const p = {
  f: "r",
  l: "i",
  t: "rbjb",
};
// const { f: nf, l: nl, t: nt } = p;
// console.log(nf);
// console.log(nl);
// console.log(nt);
// console.log(f);
const { f, ...o } = p;
console.log(f);
console.log(o);
