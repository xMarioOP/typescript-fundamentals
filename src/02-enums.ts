export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}


export type User = {
  username: string
  role: ROLES
}

const pepeUser: User = {
  username: "Pepe",
  role: ROLES.CUSTOMER
}
