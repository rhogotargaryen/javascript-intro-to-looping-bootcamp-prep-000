function forLoop(array) {
  var t = array.length
  for (let i = 0; i < 25; i++) {
    if (i + t == t) {
      array[i + t] = 'I am 1 strange loop.';
    }
    else {
      array[i + t] = `I am ${i} strange loops.`;
    }
  }
  return array;
}

function whileLoop(n) {
console.log(n);
while( n >= 0) {
  console.log(--n)
}
return 'done'
}
