interface Vehicule { 
    marque: string
    annee: number
}

function isVehicule(obj: any): obj is Vehicule {
    if (typeof obj === "string" || typeof obj === "number") { 
        return true
    }
    return false
}

function afficherVehicule(marque: any, annee: any) {
    if (isVehicule(marque || annee) === true) {
        console.log(`Le véhicule ${marque} de l'année ${annee} est valide`)
    } else { 
        console.log("Objet invalide pour un véhicule")
    }
}

afficherVehicule("Ferrari", 1987)