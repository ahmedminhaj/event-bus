const bus = require("./eventbus");

let subscription;

subscription = bus.subscribe("ClassRoom-A", data => {
	console.log(data);
	  subscription.unsubscribe();
	}
);