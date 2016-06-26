var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    }
];
function showList() {
    var myTable = '<table class="table table-hover" id="MTable" border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th id="myTd">Salary</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'
            +employeesList[i].phone+'</td><td >'+employeesList[i].salary+'</td></tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}
function addEmployee() {
    var table = document.getElementById('MTable');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var firstN= document.getElementById('firstName').value;
    var lastN= document.getElementById('lastName').value;
    var fhone= document.getElementById('phone').value;
    var salaryy= document.getElementById('salary').value;
    cell1.innerHTML =firstN;
cell2.innerHTML = lastN;
cell3.innerHTML = fhone;
cell4.innerHTML = salaryy;
}
function SalaryT(){

    var Salary= 0 ;

    var table = document.getElementById('MTable');

    for( var i=0;i<x;i++){
        Salary=document.table.rows[i].cell(3).value+Salary;
    }//NU VREAAAA SA MEARGA !!!!!!!!
document.write(i);

}
function deleteEmployee() {
    document.getElementById("MTable").deleteRow(1);

}