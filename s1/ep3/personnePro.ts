interface Employe { 
    nom: string
    poste: string
}

interface Client {
    nom: string
    entreprise: string
}

type personnePro = Employe & Client

function afficherInfoProfessionnelle(perso: personnePro) { 
    if (perso.poste) {
        console.log(`Emlpoyé: ${perso.nom} travaille comme ${perso.poste}.`)
    } else { 
        console.log(`Client: ${perso.nom} est associé à l'entreprise ${perso.entreprise}.`)
    }
}

let employe1 = afficherInfoProfessionnelle({ nom: "Bob", entreprise: "", poste: "Informatique" })
let client1 = afficherInfoProfessionnelle({ nom: "Charlotte", entreprise: "Fleuriste", poste: "" })

console.log(employe1)
console.log(client1)