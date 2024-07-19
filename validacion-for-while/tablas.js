let n = 1; 
do {
  let mult = 1; 
  do {
    console.log(`${n} x ${mult} = ${n * mult}`); 
    mult++; 
  } while (mult <= 10);
  n++; 
} while (n <= 10);
