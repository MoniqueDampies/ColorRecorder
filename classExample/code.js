// let data = [7, 8, 3, 'Peter', 98.8, true, 'Joel', false];
// let onlyDigits = data.filter( (item)=> {
//     return typeof item === 'number' ? item : null;
// });
// console.log(onlyDigits);
// let onlyString = data.filter( (item)=> {
//     return typeof item === 'string' ? item : null;
// } );
// console.log(onlyString);
// let numbers = [2, 3, 4, 6];
// ** = sqrt()
// let modify = numbers.map( (item)=>{
//     return item ** item;
// } );
// console.log(modify);
// localStorage.removeItem('records');
let lists = JSON.parse(localStorage.getItem("records"))  //records is the key for the getItem method
  ? JSON.parse(localStorage.getItem("records"))  //if 'records' 
  : [
      {
        name: "Lerato",
        surname: "Tebi",
        age: 39,
      },
    ];
function addData() {
  // e.preventDefault();
    lists.push(
        {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        age: parseInt(document.getElementById("age").value),  
    }
  );
  // Save data to a localstorage
  localStorage.setItem("records", JSON.stringify(lists));
}
document.querySelector("#addRecord").addEventListener("click", addData); //Add data when add record button is clicked


// Displaying data in table form in the console
(function loadData() {
  console.table(lists);
})();
