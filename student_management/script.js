let student1 = {
    firstName: "James",
    secondName: "Milner",
    age: "19",
    course: "Computer Science",
    isPresent: true
}

let student2 = {
    firstName: "Marco",
    secondName: "Polo",
    age: "24",
    course: "Acturial Science",
    isPresent: false
}

const students = [student1, student2];

console.log(students)

for (let student of students) {
    console.log(`${student.firstName} ${student.secondName} pursues ${student.course} and is ${student.isPresent === true ? "present" : "absent"}`)
}   