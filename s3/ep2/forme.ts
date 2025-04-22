class Rectangle { 
    largeur: number
    hauteur: number

    calculerSurface(largeur: number, hauteur: number) {
        return largeur * hauteur
    }
}

class Cercle {
    rayon: number

    calculerSurface(rayon: number) { 
        return Math.PI * rayon * rayon
    }
}

function afficherSurface(forme: Rectangle | Cercle): void { 
    if (forme instanceof Rectangle) {
        console.log(`Ceci est un rectangle de surface ${Rectangle}`)
    } else { 
        console.log(`Ceci est un cercle de surface ${Cercle}`)
    }
}

const rectangle = new Rectangle()
rectangle.largeur = 5
rectangle.hauteur = 10
console.log(rectangle.calculerSurface(rectangle.largeur, rectangle.hauteur))

const cercle = new Cercle()
cercle.rayon = 3
console.log(cercle.calculerSurface(cercle.rayon))