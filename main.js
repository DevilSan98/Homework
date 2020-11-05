var steps = 5000; //steps
var time;  //time spend
var speed; //speed
var weight; //Kalloris
var hight; // Hight
var callories1 = 0.035; //contstant callories 1
var callories2 = 0.029; //contstant callories 2
var all ;

do{  
    var time = prompt("Сколько времени.",""); //
    var speed = prompt("Какая скорость ходьбы.","");
    var hight = prompt("Ваш рост.","");
    var weight = prompt("Вас вес","");
	all     = callories1 * weight + (speed * speed)/hight * callories2 * weight; //Math Form
	alert("Ты потратил " + all );                           //Take out on the screen
}while(uahValue !== null)                          