(() => {
  const createProduct = (
    id: string | number,
    isNew: boolean = true,
    stock: number = 10
  ) => {
    return {
      id,
      stock,
      isNew
    }
  }



  const product1 = createProduct("1", true, 20)
  console.log(product1);

  const product2 = createProduct("2", false)
  console.log(product2);

  const product3 = createProduct(1, false, 0)
  console.log(product3);

  const product4 = createProduct(110, true, 100)
  console.log(product4);

  const product5 = createProduct(110)
  console.log(product5);


})()
