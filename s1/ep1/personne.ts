interface Personne {
    nom: string
    age: number
}

function afficherPersonne(personne1: Personne) { 
    console.log(`Bonjour, je m'appelle ${personne1.nom} et j'ai ${personne1.age} ans.`)
}

afficherPersonne({ nom: "Dubois", age: 22 })