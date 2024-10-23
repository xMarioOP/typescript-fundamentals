import { BaseModel } from "../base.model"
import { category } from "../categories/category.model"

export type Sizes = "S" | "M" | "L" | "XL"


export interface Product extends BaseModel {
  title: string
  image: string
  description: string
  stock: number
  size?: Sizes
  color: string
  price: number
  category: category
  isNew: boolean
  tags: string[]
}
