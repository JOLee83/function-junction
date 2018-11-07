function DNAStrand(dna) {
  return dna.split('').map(x => {
    return x === 'A' ? 'T' : x === 'T'
      ? 'A' : x === 'G' ? 'C' : x === 'C'
        ? 'G' : null
  }).join('')
}