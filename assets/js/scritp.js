// Esercizi 1
const Person = function() {
    this.firstName = '';
    this.lastName= '';
    this.age = '';
    this.location= '';

    this.utente = () => {
        return `${this.firstName} ${this.lastName} ha ${this.age} anni e vive a ${this.location}`
    }
}
const p1 = new Person ()
p1.firstName = 'Gabriele';
p1.lastName = 'pippo';
p1.age = 50;
p1.location = 'Milano'

console.log(p1.utente())


const p2 = new Person ()
p2.firstName = ' Maria';
p2.lastName = 'Trees';
p2.age= 209;
p2.location = 'milano';

console.log(p2.utente())


class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;//nome
        this.lastName = _lastName;//cognome
        this.age = _age;//eta
        this.location = _location;//cita

        this.Trees = () => {
            if (p1.age >= p2.age) {
                return `${p1.firstName} ${p1.lastName} ha ${p1.age} anni e vive a ${p1.location} ed è più maggiore di ${p2.firstName} ${p2.lastName} ha ${p2.age} anni e vive a ${p2.location}`
            }else {
                return `${p2.firstName} ${p2.lastName} ha ${p2.age} anni e vive a ${p2.location} ed è minore a ${p1.firstName} ${p1.lastName} ha ${p1.age} anni e vive a ${p1.location}`
            }
        }
    }
}

const p1User = new User ();
const p2User = new User ();
console.log(p1User.Trees(p1User,p2User));

// Esercizio 2

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed = _breed;
    }

}

const petValue = document.getElementById('myList');
const listUl = document.getElementById('petList');


const petName = document.getElementById('PetName');
const ownerName = document.getElementById('OwnerName');
const species = document.getElementById('Species');
const breed = document.getElementById('Breed');

let textPets = [];

myList.addEventListener('submit', function (e) {
    e.preventDefault();

    const newPet = new Pet(petName.value, ownerName.value, species.value, breed.value);
    textPets.push(newPet.value)
    const liText = `Pet Name: ${newPet.petName}, Owner Name: ${newPet.ownerName}, Species: ${newPet.species}, Breed: ${newPet.breed}`;
    const li = document.createElement("li");
    li.textContent = liText;
    petList.appendChild(li);
    petName.value = '';
    ownerName.value = '';
    species.value = '';
    breed.value = '';
    myList.value = '';

})

 



