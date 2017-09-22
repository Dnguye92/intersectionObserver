function createElement(el) {
	return document.createElement(el);
};

function append(parent, child) {
	return parent.appendChild(child);
};

var ul = document.getElementById('people');
var API = 'https://randomuser.me/api/?results=50';

$.ajax({
	url: API,
	dataType: 'json',
	type: 'GET',
	success: function(data) {
		var authors = data.results;
		var randColor = ['navy', 'maroon', 'salmon', 'darkgreen', 'silver'];
		// var img = createElement('img');
		// img.src = authors.picture.medium;
		// append(li, img);
		// append(ul, li);
		for(var i = 0; i < authors.length; i++) {
			var li = createElement('li');
			var img = createElement('img');
			img.src = authors[i].picture.large;
			li.style.background = randColor[Math.floor(Math.random() * randColor.length)];
			li.style.listStyle = 'none';
			img.className = 'img-responsive';
			append(li, img);
			append(ul, li);
		}

		console.log(data);
	}
})