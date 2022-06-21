// let lists = JSON.parse(localStorage.getItem("records")) //records is the key for the getItem method
//   ? JSON.parse(localStorage.getItem("records")) //if 'records'
//   : [
//       {
//         name: "Monique",
//         color: "Black",
//       },
//     ];
// function addData() {
//   // e.preventDefault();
//   lists.push({
//     name: document.getElementById("name").value,
//     color: document.getElementById("color").value,
//   });
//   // Save data to a localstorage
//   localStorage.setItem("records", JSON.stringify(lists));
// }
// document.querySelector("#addRecord").addEventListener("click", addData); //Add data when add record button is clicked

// // Displaying data in table form in the console
// (function loadData() {
//   console.table(lists);
// })();


// function getVal(color) {
//   document.body.style.background = color;
// }


// function convert(rgb) {
//   rgb = rgb.match(/^rgb\((\d+), \s*(\d+), \s*(\d+)\)$/);
//   function hexCode(i) {
//     // Take the last 2 characters and convert
//     // them to Hexadecimal.
//     return ("0" + parseInt(i).toString(16)).slice(-2);
//   }
//   return "#" + hexCode(rgb[1]) + hexCode(rgb[2]) + hexCode(rgb[3]);
// }


// function gfg_Run() {
//   // Taking the input
//   var color = document.getElementById("addRecord").value;
//   getVal(color);
//   // Getting the Color in RGB format
//   var rgb = window.getComputedStyle(el_up).color;
//   el_down.innerHTML = "The HexCode value of " + color + " is " + convert(rgb);
// }



// const btnDisplay = document.querySelector('#addRecord');

// btnDisplay.addEventListener('click',()=>{

//     let hexcode = parseInt(document.querySelector('#color').value);

//     let hcode = hexcode.toString(8);

// var faveclr = document.body.style.backgroundColor = value;
// let value =
//   "color(" +
//   parseInt(hexcode, 8),
//   ")";

// faveclr.style = `background-color: ${value}`;


function getVal(color) {
    // Setting the color
    document.body.style.background = color;
}
function convert(rgb) {
    rgb = rgb.match(/^rgb\((\d+), \s*(\d+), \s*(\d+)\)$/);
    function hexCode(i) {
        // Take the last 2 characters and convert
        // them to Hexadecimal.
        return ("0" + parseInt(i).toString(16)).slice(-2);
    }
    return "#" + hexCode(rgb[1]) + hexCode(rgb[2])
                    + hexCode(rgb[3]);
}
function gfg_Run() {
    // Taking the input
    var color = document.getElementById('color').value;
    getVal(color);
    // Getting the Color in RGB format
    var rgb = window.getComputedStyle(el_up).color;
        el_down.innerHTML = "The HexCode value of "
                + color +" is "+ convert(rgb);
}

let lists = JSON.parse(localStorage.getItem("records"))  //records is the key for the getItem method
  ? JSON.parse(localStorage.getItem("records"))  //if 'records' 
  : [
      {
        name: "Jamie",
        color: "Purple",
      },
    ];

    function addData() {
        // e.preventDefault();
          lists.push(
              {
              name: document.getElementById("name").value,
              color: document.getElementById("color").value, 
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


      function remove() {
        document.getElementById('name').value ="";
    document.getElementById('color').value ="";
      }
      document.querySelector('#reset').addEventListener('click', remove);