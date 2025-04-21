interface Personne extends Adresse {
    readonly id: number
    nom: string
    age: number
}

interface Adresse { 
    rue?: string
    ville?: string
}

function afficherPersonneAvancee(personne2: Personne) { 
    if (personne2.rue && personne2.ville) { 
        console.log (`Bonjour, je m'appelle ${personne2.nom} (ID: ${personne2.id}), j'ai ${personne2.age} ans et j'habite au ${personne2.rue}, ${personne2.ville}.`)
    } else {
        console.log (`Bonjour je m'appelle ${personne2.nom} (ID: ${personne2.id}) et j'ai ${personne2.age} ans.`)
    }
}

afficherPersonneAvancee({ id: 2, nom: "Dubois", age: 22 })