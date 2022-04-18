// call back function

// let persons = [
//     {firstName: "Mosiur", lastName: "Rahman"},
//     {firstName: "Redwan", lastName: "Rahman"}
// ];

// function createperson (person){
//     setTimeout(function (){
//         persons.push(person);
//     }, 4000);
// };

// function getperson () {
//     setTimeout(function(){
//         let output = " ";
//         persons.forEach(function(item){
//             output += `<li>${item.firstName} ${item.lastName}</li>`
//         });
//         document.getElementById("output").innerHTML = output;
//     }, 1000);
// }

// createperson({firstName: "Rony", lastName: "Shikder"});
// getperson();

// let persons = [
//     {firstName: "Mosiur", lastName: "Rahman"},
//     {firstName: "Redwan", lastName: "Rahman"}
// ];

// function createperson (person, callback){
//     setTimeout(function (){
//         persons.push(person);
//         callback();
//     }, 200);
// };

// function getperson () {
//     setTimeout(function(){
//         let output = " ";
//         persons.forEach(function(item){
//             output += `<li>${item.firstName} ${item.lastName}</li>`
//         });
//         document.getElementById("output").innerHTML = output;
//     }, 500);
// }

// createperson({firstName: "Rony", lastName: "Shikder"}, getperson);



// Promises
let persons = [
    {firstName: "Mosiur", lastName: "Rahman"},
    {firstName: "Redwan", lastName: "Rahman"}
];

function createperson (person){
 let prom = new Promise(function(resolve, reject){
    persons.push(person);
    let error = false;
    if(!error){
        resolve();
    } else{
        reject("Error!: Somthing Wrong!");
    }
 });
 return prom;
};

function getperson () {
    setTimeout(function(){
        let output = " ";
        persons.forEach(function(item){
            output += `<li>${item.firstName} ${item.lastName}</li>`
        });
        document.getElementById("output").innerHTML = output;
    }, 500);
}

createperson({firstName: "Rony", lastName: "Shikder"}).then(getperson).catch(function(err){
    console.log(err);
});
