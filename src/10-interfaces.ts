type Sizes = "S" | "M" | "L" | "XL"     //Type can do this
// type Product = {
//   id: string | number
//   title: string
//   createdAt: Date                   //type no can extend
//   stock: number
//   size?: Sizes
// }



// interface Sizes = "S" | "M" | "L" | "XL"     //Interface can´t do this
interface Product {
  id: string | number
  title: string
  createdAt: Date                     //interface can extend
  stock: number
  size?: Sizes
}

const products: Product[] = []

products.push({
  id: 1,
  title: "p1",
  createdAt: new Date(),
  stock: 90
})

const addProduct = (data: Product) => {
  products.push(data)
}
