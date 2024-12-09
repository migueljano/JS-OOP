/* Essercizio 1 */

class User {
    constructor(_firsName, _lastName, _age, _location) {
        this.firsName = _firsName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    printUser(user) {
        return this.age > user.age ? `${this.firstName} è più vecchio di ${user.firstName}` : `${this.firsName} è più giovane di ${user.firsName}`;
    }

}

const userOne = new User('Gatto', 'Grande', 20, 'Milano');
const userTwo = new User('Cane', 'Dalmata', 15, 'Discovery');

console.log(userTwo.printUser(userOne)); //invertendo i valori in consol cambia i risultati!

/*Essercizio 2 */

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

