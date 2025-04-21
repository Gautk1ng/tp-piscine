function premierElement<Type>(tableau: Type[]): Type[] { 
    return tableau
}

let tableau1 = [34, 55, 24]
let tableau2 = ["Gauthier", "Thomas", "Charlotte", "Solène"]
let tableau3 = ["C", "D", "E"]

console.log(premierElement(tableau1))
console.log(premierElement(tableau2))
console.log(premierElement(tableau3))