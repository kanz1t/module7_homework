class DeviceName{
    constructor(name){
    this.devise='desktop';
    this.name=name;
}
    getCondition(power, on, time){
    let status = on;
    if (on == 1) {
        status='Вкл';
    }else{
        status='Выкл';
    }
    console.log(`${this.name} потребляет ${power*time} Вт за ${time} часа!!  `)
}
}

class DeviseColor extends DeviceName{
    constructor(name,color) {
        super(name);
        this.color=color;
    }
}

const lamp = new DeviseColor('Лампа', 'red');
const computer = new DeviseColor('Компьютер', 'black');

console.log(lamp);
lamp.getCondition(40,1,2);

console.log(computer);
computer.getCondition(180,1,4);