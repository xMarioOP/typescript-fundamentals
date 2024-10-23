const numbers: ReadonlyArray<number> = [1,2,3]
numbers.push(9)
numbers.pop()                                                  // MUTABLE
numbers.unshift(1)

numbers.filter(item => item > 1)                               // INMUTABLE
numbers.reduce(number => number+ 2)
