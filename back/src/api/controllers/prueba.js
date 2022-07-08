const id = "kvdsmkldmvldkvmdl"

const arrayIds = [
    "gflskdfgsdlkd",
    "kndsdsmdsfvm",
    "ksmvdlvmdlvdf",
    "kvdsmkldmvldkvmdl",
    "kvdsmkldmvldkvmdl",
    "kvdsmkldmvldkvmdl",
    "kvdsmkldmvldkvmdl"
]

const find = arrayIds.find(element => element === id)
console.log(find)
const index = arrayIds.indexOf(find)
console.log(index);
const remp = arrayIds.splice(index,1);
console.log(remp);
console.log(arrayIds);