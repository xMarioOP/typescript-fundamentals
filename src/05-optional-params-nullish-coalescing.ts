const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
  }
}

//0 == false
//"" == false   IF WE USE ||
//false == false

const product1 = createProduct("1", true, 20)
console.log(product1);

const product2 = createProduct("2", false)
console.log(product2);

const product3 = createProduct(1, false, 0)
console.log(product3);

