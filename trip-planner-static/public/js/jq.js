$(document).ready(function() {

function searchDB(name, type){
	if (type === 'hotels'){
		all_hotels.forEach(function(elem){
			if (name === elem.name){
				gmaps.drawLocation(elem['place'][0]['location'], {
    				icon: '/images/lodging_0star.png'
  					}, name);
			}
		})
	}

	if (type === 'restaurants'){
		all_restaurants.forEach(function(elem){
			if (name === elem.name){
				gmaps.drawLocation(elem['place'][0]['location'],{
     			 icon: '/images/restaurant.png'
    			}, name);
			}
		})
	}

	if (type === 'activities'){
		all_activities.forEach(function(elem){
			if (name === elem.name){
				gmaps.drawLocation(elem['place'][0]['location'],{
     			 icon: '/images/star-3.png'
    			}, name);
			}
		})
	}
}


$('.pull-right').on('click', function(){
	var selected = ($(this).siblings().eq(1).val());
	if ($(this).siblings().eq(0).text() === "Hotels"){
		if ($('.hotels').children().length <1) {
			$('.panel-body').find('.hotels').append('<div class=itinerary-item><span class=title>' + selected + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>')
		searchDB(selected, 'hotels')
		}
		else {
			console.log($('.panel-body').find('.hotels').children());
			$('.panel-body').find('.title').text(selected);
		}
	}
	else if ($(this).siblings().eq(0).text() === "Restaurants"){
		$('.panel-body').find('.restaurants').append('<div class=itinerary-item><span class=title>' + selected + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>')
		searchDB(selected, 'restaurants')
	}
	else if ($(this).siblings().eq(0).text() === "Activities"){
		$('.panel-body').find('.activities').append('<div class=itinerary-item><span class=title>' + selected + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>')
		searchDB(selected, 'activities')
	}
	})

$('.day-buttons').on('click', '.day-btn', function(){
	console.log("hi");
	if ($(this).text() == "+") {
		return;
	}
	$(this).toggleClass('current-day').siblings('.current-day').toggleClass('current-day');
})

$('.add-new').on('click', function(){
	console.log("adding")

	$(this).before('<button class="btn btn-circle day-btn ">' + $('.day-buttons').children().length + '</button>')
})

$('.list-group').on('click', '.remove', function(){
	
	gmaps.deleteLocation($(this).siblings().eq(0).text())

	$(this).siblings().eq(0).remove();
	$(this).remove()


})





});