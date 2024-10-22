const prices: (number | string)[] = [1, 2, 3, "as"]
prices.push(1)                                         //ARRAY
prices.push("a")


let user: [string, number, boolean]
user = ["a", 1, false]                                //TUPLE
user = ["Pepe", 2, true]


const [username, age] = user
console.log(username, age);
