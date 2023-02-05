function DeviceName(name){
    this.devise='desktop';
    this.name=name;
}
DeviceName.prototype.getCondition = function (power, on, time){
    let status = on;
    if (on == 1) {
        status='Вкл';
    }else{
        status='Выкл';
    }
    console.log(`${this.name} потребляет ${power*time} Вт за ${time} часа!!  `)
}
function DeviseColor(name, color) {
    this.color=color;
    this.name=name;
}

DeviseColor.prototype= new DeviceName();

const lamp = new DeviseColor('Лампа', 'red');
const computer = new DeviseColor('Компьютер', 'black');

console.log(lamp);
lamp.getCondition(40,1,2);

console.log(computer);
computer.getCondition(180,1,4);