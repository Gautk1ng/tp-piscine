interface Voiture {
    marque: string
    modele: string
    annee: number
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    console.log(obj, key)
    return obj[key]
}

let maVoiture: Voiture = {
    marque: "Ferrari",
    modele: "F40",
    annee: 1987
}

getProperty(maVoiture.marque, maVoiture.annee)