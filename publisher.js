const bus = require("./eventbus");

var students = [
    {
        Name: "Jack",
        ID: 2018001,
		Roll: 01
    },
    {
        Name: "Trump",
        ID: 2017005,
		Roll: 03
    },
    {
        Name: "Smith",
        ID: 2019007,
		Roll: 02
    },
    {
        Name: "Bill",
        ID: 2018013,
		Roll: 07
    },
    {
        Name: "Hilary",
        ID: 2019003,
		Roll: 05
    }
];

students[2].Name = "Willy";
students[1].Roll = 09;

function sort(){
	for(var i = 0; i < students.length; i++){
		for(var j = i+1; j < students.length; j++){
			if( students[i].Roll < students[j].Roll)
				[students[i],students[j]]=[students[j],students[i]];
		}
	}
	module.exports = {
	  publishEvent() {
		const data = students;
		bus.publish("ClassRoom-A", data);
	  }
	};
}
sort();