console.log('test webpack!')

let obj = {
  test: 'test',
  set() {
    console.log('test set method')
  },
  get() {
    console.log('test get method')
  },
}

let newObj = {...obj}

console.log(newObj)
