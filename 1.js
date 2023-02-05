
const student= {
    name: 'Ivan',
    age: 19
}
function userStudent(us) { 
    for (let key in us) {

        if (us.hasOwnProperty(key)) {

            console.log(`${key}: ${us[key]}`);
        }   
    }
}
userStudent(student);