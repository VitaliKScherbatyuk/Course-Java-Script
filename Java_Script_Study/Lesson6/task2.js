function Robot (){
	this.name;
	this.value;
}

Robot.prototype.construct = function Robot (name,value){
	this.name = name;
	this.value = value;
}

Robot.prototype.construct('Robot',' - Я просто працюю.');

Robot.prototype.work = function work(){
	console.log('Я '+ this.name + this.value);
}	

function CoffeRobot(){}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;
CoffeRobot.prototype.construct('CoffeRobot',' - Я просто варю каву.');


function RobotDancer(){}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.construct('RobotDancer',' - Я просто танцюю.');


function RobotCoocker(){}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;
RobotCoocker.prototype.construct('RobotCoocker',' - Я просто готую.');


let robot = new Robot();
let cofferobot = new CoffeRobot();
let robotdancer = new RobotDancer();
let robotcoocker = new RobotCoocker();
let array = [robot, cofferobot, robotdancer, robotcoocker];

for (let key in array){
	array[key].work();
}

