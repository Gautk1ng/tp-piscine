interface Personne2 extends Adresse {
    readonly id: number
    nom: string
    age: number
}

interface Adresse { 
    rue?: string
    ville?: string
}

function afficherPersonneAvancee(perso: Personne2) { 
    if (perso.rue && perso.ville) { 
        console.log (`Bonjour, je m'appelle ${perso.nom} (ID: ${perso.id}), j'ai ${perso.age} ans et j'habite au ${perso.rue}, ${perso.ville}.`)
    } else {
        console.log (`Bonjour je m'appelle ${perso.nom} (ID: ${perso.id}) et j'ai ${perso.age} ans.`)
    }
}

let personne2 = afficherPersonneAvancee({ id: 2, nom: "Gauthier", age: 22, rue: "Tournanfis", ville: "Bry-sur-Marne" })
let personne3 = afficherPersonneAvancee({ id: 3, nom: "Solène", age: 25 })

console.log(personne2)
console.log(personne3)