
function Robot (){
	this.name;
	this.value;
	
	this.constructor = function(name,value){
		this.name = name;
		this.value = value;
	}
	
	this.constructor('Robot',' - Я просто працюю.');
	this.work = function work(){
		console.log('Я '+ this.name + this.value);
	}	
}

function CoffeRobot(){
	Robot.call(this);
	this.constructor('CoffeRobot',' - Я просто варю каву.');
}

function RobotDancer(){
	Robot.call(this);
	this.constructor('RobotDancer',' - Я просто танцюю.');
}

function RobotCoocker(){
	Robot.call(this);
	this.constructor('RobotCoocker',' - Я просто готую.');
}

let robot = new Robot();
let cofferobot = new CoffeRobot();
let robotdancer = new RobotDancer();
let robotcoocker = new RobotCoocker();
let array = [robot, cofferobot, robotdancer, robotcoocker];

for (let key in array){
	array[key].work();
}
