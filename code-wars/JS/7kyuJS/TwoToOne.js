function longest(s1, s2) {
  let s = s1 + s2
  let s3 = s.split("").filter(function (item, index) {
    return s.indexOf(item) >= index;
  });
  return s3.sort().join("")
}