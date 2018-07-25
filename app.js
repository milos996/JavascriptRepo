let json = {
    "name" : "Milos",
    "last_name" : "Ivankovic"
}

let arr_jsons = [
    {
    "name" : "milos"
    },
    {
    "name" : "marko"
    },
]
//klaseee
//Person class
function Person(first_name, last_name, gender)
{
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;

    if(Person.count == undefined){
        Person.count = 1;
    }
    else{
        Person.count ++;
    }
}

Person.getStatickaPromjenljiva = function()
{
    return Person.count;
}
//Worker class

function Worker(first_name, last_name, gender, title)
{
    Person.call(this, first_name, last_name, gender);
    this.title = title;
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

//Test
let one_person = new Person('Milos', 'Ivankovic', "male");
console.log(Person.count + " One_person");
let worker = new Worker('Ime', 'Prezime', 'male', 'web developer');
console.log(Person.count + " worker");


//promises and callbacks

let promise1 = new Promise(function(resolve, reject)
{
    setTimeout(resolve, 100);
});

let succesCallback = function()
{
    console.log('Good');
};

let errorCallback = function()
{
    console.log('Bad')
};

promise1.then(succesCallback, errorCallback);
