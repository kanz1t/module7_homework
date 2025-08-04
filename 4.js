function ElectricalAppliance(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
}
      
      ElectricalAppliance.prototype.plugIn = function() {
        this.isPlugged = true;
        console.log(`${this.name} включен в розетку.`);
      };
      
      ElectricalAppliance.prototype.unplug = function() {
        this.isPlugged = false;
        console.log(`${this.name} выключен из розетки.`);
      };
      
      function DeskLamp(name, power, brightness) {
        ElectricalAppliance.call(this, name, power);
        this.brightness = brightness;
      }
      
      DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
      DeskLamp.prototype.constructor = DeskLamp; 
      
      DeskLamp.prototype.adjustBrightness = function(newBrightness) {
        this.brightness = newBrightness;
        console.log(`${this.name}: яркость установлена на ${this.brightness}%.`);
      };
      
      function Computer(name, power, processor, ram) {
        ElectricalAppliance.call(this, name, power);
        this.processor = processor;
        this.ram = ram;
      }
      
      Computer.prototype = Object.create(ElectricalAppliance.prototype);
      Computer.prototype.constructor = Computer;
      
      Computer.prototype.runProgram = function(programName) {
        if (this.isPlugged) {
          console.log(`${this.name}: запускаю программу ${programName}.`);
        } else {
          console.log(`${this.name}: не могу запустить ${programName}, компьютер выключен.`);
        }
      };
      
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
      
