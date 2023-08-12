let arr = [
  { id: 1, name: "john", age: 18, profession: "developer" },
  { id: 2, name: "jack", age: 20, profession: "developer" },
  { id: 3, name: "karen", age: 19, profession: "admin" },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  for (const emp of arr) {
    if (emp.profession === "developer") {
      console.log(emp.name);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let newEmp = { id: 4, name: "susan", age: 20, profession: "intern" };
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  for (const employee of arr) {
    if (employee.profession === "admin") {
      let index = arr.indexOf(employee);
      arr.splice(index, 1);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let Employees = [
    { id: 3, name: "karen", age: 19, profession: "admin" },
    { id: 5, name: "johnWick", age: 18, profession: "developer" },
    { id: 6, name: "jackSnyder", age: 20, profession: "developer" },
    { id: 7, name: "karenSmith", age: 19, profession: "admin" },
    { id: 8, name: "susanO'brien", age: 20, profession: "intern" },
  ];
  arr = arr.concat(Employees);
  console.log(arr);
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log("Consoling Array Variable", arr);
  // Over here I can directly access the variable.
}
