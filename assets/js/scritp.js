/* Essercizio 1 */

class User {
    constructor (_firsName, _lastName, _age, _location) {
        this.firsName = _firsName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    printUser(user) {
        return this.age > user.age ? this.firsName + ' è piu vecchio di' + user.firsName : this.firsName + ' è più giovani di ' + user.firsName; 
    }

}

const userOne = new User ('Gatto', 'Grande', 20, 'Milano');
const userTwo = new User ('Cane', 'Dalmata', 15, 'Discovery');

console.log(userTwo.printUser(userOne)); //invertendo i valori in consol cambia i risultati!