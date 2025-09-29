let computer={cpu:12}
let lenevo={
    screen:"HD",
    __proto__:computer,
}
let tomhardware={};

console.log(`lenevo`,lenevo.__proto__);



//
let genericcar={tyres:4}
let tesla={
    driver:"AI"
}
Object.setPrototypeOf(tesla,genericcar)
console.log(`tesla` ,Object.getPrototypeOf(tesla));
