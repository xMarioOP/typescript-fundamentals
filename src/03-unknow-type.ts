let anyVar: any
anyVar = "a"
anyVar = 2
anyVar = true                        // with any
anyVar = {}
anyVar = []
let isNew: boolean = anyVar
anyVar.doSomething()
anyVar.tolowercase()




let unknowVar: unknown
unknowVar = "a"
unknowVar = null
unknowVar = undefined
unknowVar = 2
unknowVar = true                         // with unknow
unknowVar = {}
unknowVar = []

// unknowVar.doSomething()  WRONG!

if (typeof unknowVar === "string") {
  unknowVar.toLowerCase()
}



const parse = (str: string): unknown => {
 return JSON.parse(str)
}
