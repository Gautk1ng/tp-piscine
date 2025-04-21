interface Voiture {
    marque: string
    modele: string
    annee: number
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

let maVoiture: Voiture

getProperty({maVoiture.marque, maVoiture.annee})