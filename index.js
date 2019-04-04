function sumItems(array) {
  // Sum all the numbers in the array
  let x = 0
  array.forEach(element => {
    if (Array.isArray(element)) {
      return x += sumItems(element)
    }
    else {
        return x += element
      }
  })
  return x;
    
  }

console.log(sumItems([[1,2],1,2,4,5]))
module.exports = sumItems;