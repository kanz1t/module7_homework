class ElectricalAppliance {
        constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
}

        plugIn() {
        this.isPlugged = true;
        return (`${this.name} включен в розетку.`);
}

        unplug(){
        this.isPlugged = false;
        console.log(`${this.name} выключен из розетки.`);
};


}
class DeskLamp extends ElectricalAppliance {
        constructor(name, power, brightness){
        super(name, power)
        this.brightness = brightness;
      }
      adjustBrightness (newBrightness) {
        this.brightness = newBrightness;
        console.log(`${this.name}: яркость установлена на ${this.brightness}%.`);
      };
}



class Computer extends ElectricalAppliance {
        constructor(name, power, processor, ram){
        super(name, power);
        this.processor = processor;
        this.ram = ram;
        }

        runProgram (programName) {
        if (this.isPlugged) {
                console.log(`${this.name}: запускаю программу ${programName}.`);
        } else {
                console.log(`${this.name}: не могу запустить ${programName}, компьютер выключен.`);
        }
};
    
}


const lamp = new DeskLamp("Настольная лампа", 60, 75);
const computer = new Computer("Компьютер", 300, "Intel Core i7", 16);


lamp.plugIn();
computer.plugIn();

console.log(lamp);
console.log(computer);

lamp.adjustBrightness(50);
computer.runProgram("Visual Studio Code");
lamp.unplug();

 
function calculateTotalPower(appliances) {
        let totalPower = 0;
        for (let i = 0; i < appliances.length; i++) {
          if (appliances[i].isPlugged) {
            totalPower += appliances[i].power;
          }
        }
        return totalPower;
      }
      
const appliances = [lamp, computer];
      
const totalPower = calculateTotalPower(appliances);
console.log(`Суммарная потребляемая мощность включенных приборов: ${totalPower} Вт.`);
      
