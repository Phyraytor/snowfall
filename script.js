var shows = document.getElementsByClassName('snow');
/*Константы можно менять*/
const MAX_COUNT = 200; 
const HZ_SNOW = 50; /* Частота появления снежинок */
var count_snow = 0;
var body_width = window.innerWidth;

var snowfall = setInterval(function() {
	var new_show = shows[0].cloneNode(true);
	new_show.style.left = String(0 + Math.round( 
		Math.random() * (body_width - 60)
	) ) + "px";
	document.body.appendChild(new_show);

	count_snow++;
	if (count_snow > MAX_COUNT) 
	{
		clearInterval(snowfall);
	}
}, HZ_SNOW); 



