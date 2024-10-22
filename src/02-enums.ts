enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}


type User = {
  username: string
  role: ROLES
}

const pepeUser: User = {
  username: "Pepe",
  role: ROLES.CUSTOMER
}
