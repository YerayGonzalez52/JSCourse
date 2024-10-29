const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'HR', salary: 60000 },
    //... More employee records can be added here
  ];


function displayEmployees(){
    let totalEmployees ="";
    for(i = 0; i < employees.length; i++){
        totalEmployees = totalEmployees + `<p>${employees[i].id}: ${employees[i].name} - ${employees[i].department} - $${employees[i].salary}</p>`;
    }
    document.getElementById("employeesDetails").innerHTML = totalEmployees;
}


function displayHREmployees(){
    let hrEmployeesDisplay ="";
    const hrEmployees = employees.filter(employee => employee.department === "HR");
    for(i = 0; i < hrEmployees.length; i++){
        hrEmployeesDisplay = hrEmployeesDisplay + `<p>${hrEmployees[i].id}: ${hrEmployees[i].name} - ${hrEmployees[i].department} - $${hrEmployees[i].salary}</p>`;
    }
    document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

function calculateTotalSalaries(){
    totalSalaries = 0;
    for(i = 0; i<employees.length; i++){
        totalSalaries = totalSalaries + employees[i].salary;
    }
    alert("Total Salaries: " + totalSalaries);
}

function findEmployeeById(employeeId){
    for(i=0; i < employees.length; i++){
        if(employees[i].id == employeeId){
            document.getElementById('employeesDetails').innerHTML =`<p>${employees[i].id}: ${employees[i].name} - ${employees[i].department} - $${employees[i].salary}</p>`;
            break;
        }
        else{
            document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
        }
    }
}