function array_diff(a, b) {
  let unique = [];

  //I'm going to create 2 loops in order to subtract the lists and return the result
  //if list a equals 0 it will return an empty array
  if (a.length === 0){
  return [];
  }
  //The push method adds new items to the end of an array, and returns the new length
  for (let i = 0; i < a.length; i++){
    if (b.indexOf(a[i]) === -1){
      unique.push(a[i]);
    }
  }
   for (let i = 0; i < b.length; i++){
    if (a.indexOf(b[i]) === -1){
      unique.push(b[i]);
    }
    }
 return unique;

}
