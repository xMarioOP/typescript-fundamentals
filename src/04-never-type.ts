const withoutEnd = () => {
  while (true) {
    console.log(("infinte bucle"));

  }
}

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if (typeof input === "string") {
    return "yes"
  } else if (Array.isArray(input)) {
    return "Is array"
  } else {
    return fail("not mach")
  }
}

console.log(example("hi"));
console.log(example([1, 2, 3]));
console.log(example(456));
console.log(example("hi after fail"));

