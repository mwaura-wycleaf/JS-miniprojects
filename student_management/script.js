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
    let output = `${student.firstName} ${student.secondName} pursues ${student.course} and is ${student.isPresent === true ? "present" : "absent"}`

    document.getElementById("demo").innerHTML += output + "<br><br>"
    console.log(output);
}   

function addStudent(firstName, secondName, age, course, isPresent){
    const newStudent = {
        firstName:firstName,
        secondName:secondName,
        age:age,
        course:course,
        isPresent:isPresent,
    }
    students.push(newStudent);
}
addStudent("Flora", "Kendi", 21, "Food Science", true)
console.log(students);