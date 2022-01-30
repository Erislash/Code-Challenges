function DNAStrand(dna){
  const dict = {
    'A':'T',
    'T':'A',
    'G':'C',
    'C':'G',
  };
  return dna.split('').map(l => dict[l]).join('');
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
