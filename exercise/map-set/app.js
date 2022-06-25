console.log(new Set([1,1,2,2,3,4])) // 1, 2, 3, 4

const a = [...new Set("referee")].join("") // ref

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length
}

vowelCount('aaaaaaaa') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('bbbbbbbbbbbbb') // Map { 'o' => 1 }

function vowelCount(str){
  const maps = new Map();
  for(let char of str){
    let noCase = char.toLowerCase()
    if("aeiou".includes(noCase)){
      if(maps.has(noCase)){
        maps.set(noCase, maps.get(noCase) + 1);
      } else {
        maps.set(noCase, 1);
      }
    }
  }
  return maps;
}