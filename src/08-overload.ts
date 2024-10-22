function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join("")
  } else {
    return input.split("")
  }
}

const rtaArray = parseStr("Pepe")
console.log("rtaArray: ", rtaArray);

const rtaStr = parseStr(["P", "e", "p", "e"])
console.log("rtaStr: ", rtaStr);
