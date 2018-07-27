let letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
function crypto(captals, offset) {
  return captals.map((l) => { return letters.indexOf(l)%offset});
}
let captals = ['c', 'y', 'j', 'd', 'q', 's'];
console.log(crypto(captals, 9));