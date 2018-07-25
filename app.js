let json = {
    "name" : "Milos",
    "last_name" : "Ivankovic"
}

let arrJsons = [
    {
    "name" : "milos"
    },
    {
    "name" : "marko"
    },
]
//klaseee
//Person class
function Person(firstName, lastName, gender)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;

    if (Person.count == undefined) {
        Person.count = 1;
    } else {
        Person.count++;
    }
}

Person.getStatickaPromjenljiva = function() {
    return Person.count;
}
//Worker class

function Worker(firstName, lastName, gender, title)
{
    Person.call(this, firstName, lastName, gender);
    this.title = title;
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

//Test
let onePerson = new Person('Milos', 'Ivankovic', "male");
console.log(Person.count + " One person");
let worker = new Worker('Ime', 'Prezime', 'male', 'web developer');
console.log(Person.count + " worker");


//promises and callbacks

let promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100);
});

let succesCallback = function() {
    console.log('Good');
};

let errorCallback = function() {
    console.log('Bad')
};

promise1.then(succesCallback, errorCallback);
