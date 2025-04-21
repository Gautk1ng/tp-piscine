function premierElement2<Type extends {length: number}>(tableau: Type[]): Type[] { 
    if (tableau.length > 0) { 
        console.log(tableau.length)
    } else {
        console.log("undefined")
    }
    return tableau
}

premierElement2(["Gauthier", "Dubois", "Thomas"])