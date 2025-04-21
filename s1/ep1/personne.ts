interface Personne {
    nom: string
    age: number
}

function afficherPersonne(perso: Personne) { 
    console.log(`Bonjour, je m'appelle ${perso.nom} et j'ai ${perso.age} ans.`)
}

let personne1 = afficherPersonne({nom: "Dubois", age: 22})

console.log(personne1)