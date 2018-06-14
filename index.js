var Airplane = function (model, seating_capacity, average_speed){
    this.model = model
    this.seating_capacity = seating_capacity + 10
    this.average_speed = average_speed
    //this.maximum_speed = maximum_speed
    this.print = function(){
        return ('Model: ' + model + '  Seating Capacity: ' + seating_capacity + '  Average Speed: ' + average_speed)
    }
}

var airplane1 = new Airplane('A-777', 300, 600)
console.log(airplane1.print())
var airplane2 = new Airplane('A-380', 700, 600)
console.log(airplane2.print())
var airplane3 = new Airplane('A-757', 100, 600)
console.log(airplane3.print())