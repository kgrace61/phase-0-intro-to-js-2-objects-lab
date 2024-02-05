// Write your solution in this file!
const employee = {
    name: "Kristen",
    streetAdress: "2623 Banks St",
}
function updateEmployeeWithKeyAndValue(employee, name, streetAdress) {
    return {
        ...employee,
        [name]:streetAdress,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAdress) {
    employee[name]= streetAdress;
    return employee;
}
function deleteFromEmployeeByKey(employee,name) {
    const updatedEmployee = {...employee};
    delete updatedEmployee[name];
    return updatedEmployee
    }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}
