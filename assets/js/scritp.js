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

// console.log(p1.utente())

const p2 = new Person ()
p2.firstName = ' Maria';
p2.lastName = 'Trees';
p2.age= 29;
p2.location = 'milano';

// console.log(p2.utente())


class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;

        this.Trees = () => {
            if (p1.age >= p2.age) {
                return `${p1.firstName} ${p1.lastName} ha ${p1.age} anni e vive a ${p1.location} ed è più vecchio di ${p2.lastName} ${p2.lastName} ha ${p2.age} anni e vive a ${p2.location}`
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

const fomrImput = document.getElementById('myList');
const btnClick = document.getElementById ('clickPets');

 



