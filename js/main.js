$(document).ready(function() {
	$('.fa-times').on('click', function() {
		$('.info').removeClass('open').addClass('close').css('right', '0em');
	});
	$('#songs li h2').on('click', function() {
		$(this).find('.info').removeClass('closed').addClass('opened').addClass('open');
	});
	$('#search-trigger').on('click', function() {
		$('#top').toggleClass('opened');
		$('#results').toggleClass('shown');
	});
	$('#import').on('click', function() {
		$('#results #songs li.selected').addClass('import');
	});	
	$('#results #songs li').on('click', function() {
		$(this).toggleClass('selected');
	});
	$('.load-new').on('click', function() {
		$('.load-new').html('<i class="fa fa-circle-o-notch fa-spin"></i> Loading', function() {
			$(this).html('Load new track');
		});
		$('#songs li:last-child').css('font', 'lol').delay(2000).before('<li class="next loaded"><img src="https://i1.sndcdn.com/artworks-000083309656-u6es9y-t120x120.jpg?2aaad5e" alt=""><div class="title"><h2>Snails & Botnek - KRMT (Original Mix)</h2></div><div class="love"><i class="fa fa-heart-o"></i></div></li>');

	});
	$('.love .fa').on('click', function() {
		$(this).addClass('change').delay(100000).removeClass('fa-heart-o').addClass('fa-heart');
	});
	$('#navigation .about').on('click', function() {
		$('#bg').fadeIn();
		$('#bg .about').show().addClass('show');
	});
	$('#navigation .controls').on('click', function() {
		$('#bg').fadeIn();
		$('#bg .controls').show().addClass('show');
	});
	$('#navigation .donate').on('click', function() {
		$('#bg').fadeIn();
		$('#bg .donate').show().addClass('show');
	});
	$('#popup .fa-times').on('click', function() {
		$('#popup').fadeOut();
		$('#bg').fadeOut();
	});
	$('#start ul li').on('click', function() {
		$(this).toggleClass('selected');
	});
	$(function() {    
	    $(".album .pie-wrapper").each(function() {
	        var count = 0;
	        $(this).click(function(){
	        count++;
	        if (count === 1) {
	            $(this).addClass('progress-2');
	        }
else if(count === 1){ $(this).removeClass('progress-1'); $(this).addClass('progress-2'); }
else if(count === 2){ $(this).removeClass('progress-2'); $(this).addClass('progress-3'); }
else if(count === 3){ $(this).removeClass('progress-3'); $(this).addClass('progress-4'); }
else if(count === 4){ $(this).removeClass('progress-4'); $(this).addClass('progress-5'); }
else if(count === 5){ $(this).removeClass('progress-5'); $(this).addClass('progress-6'); }
else if(count === 6){ $(this).removeClass('progress-6'); $(this).addClass('progress-7'); }
else if(count === 7){ $(this).removeClass('progress-7'); $(this).addClass('progress-8'); }
else if(count === 8){ $(this).removeClass('progress-8'); $(this).addClass('progress-9'); }
else if(count === 9){ $(this).removeClass('progress-9'); $(this).addClass('progress-10'); }
else if(count === 10){ $(this).removeClass('progress-10'); $(this).addClass('progress-11'); }
else if(count === 11){ $(this).removeClass('progress-11'); $(this).addClass('progress-12'); }
else if(count === 12){ $(this).removeClass('progress-12'); $(this).addClass('progress-13'); }
else if(count === 13){ $(this).removeClass('progress-13'); $(this).addClass('progress-14'); }
else if(count === 14){ $(this).removeClass('progress-14'); $(this).addClass('progress-15'); }
else if(count === 15){ $(this).removeClass('progress-15'); $(this).addClass('progress-16'); }
else if(count === 16){ $(this).removeClass('progress-16'); $(this).addClass('progress-17'); }
else if(count === 17){ $(this).removeClass('progress-17'); $(this).addClass('progress-18'); }
else if(count === 18){ $(this).removeClass('progress-18'); $(this).addClass('progress-19'); }
else if(count === 19){ $(this).removeClass('progress-19'); $(this).addClass('progress-20'); }
else if(count === 20){ $(this).removeClass('progress-20'); $(this).addClass('progress-21'); }
else if(count === 21){ $(this).removeClass('progress-21'); $(this).addClass('progress-22'); }
else if(count === 22){ $(this).removeClass('progress-22'); $(this).addClass('progress-23'); }
else if(count === 23){ $(this).removeClass('progress-23'); $(this).addClass('progress-24'); }
else if(count === 24){ $(this).removeClass('progress-24'); $(this).addClass('progress-25'); }
else if(count === 25){ $(this).removeClass('progress-25'); $(this).addClass('progress-26'); }
else if(count === 26){ $(this).removeClass('progress-26'); $(this).addClass('progress-27'); }
else if(count === 27){ $(this).removeClass('progress-27'); $(this).addClass('progress-28'); }
else if(count === 28){ $(this).removeClass('progress-28'); $(this).addClass('progress-29'); }
else if(count === 29){ $(this).removeClass('progress-29'); $(this).addClass('progress-30'); }
else if(count === 30){ $(this).removeClass('progress-30'); $(this).addClass('progress-31'); }
else if(count === 31){ $(this).removeClass('progress-31'); $(this).addClass('progress-32'); }
else if(count === 32){ $(this).removeClass('progress-32'); $(this).addClass('progress-33'); }
else if(count === 33){ $(this).removeClass('progress-33'); $(this).addClass('progress-34'); }
else if(count === 34){ $(this).removeClass('progress-34'); $(this).addClass('progress-35'); }
else if(count === 35){ $(this).removeClass('progress-35'); $(this).addClass('progress-36'); }
else if(count === 36){ $(this).removeClass('progress-36'); $(this).addClass('progress-37'); }
else if(count === 37){ $(this).removeClass('progress-37'); $(this).addClass('progress-38'); }
else if(count === 38){ $(this).removeClass('progress-38'); $(this).addClass('progress-39'); }
else if(count === 39){ $(this).removeClass('progress-39'); $(this).addClass('progress-40'); }
else if(count === 40){ $(this).removeClass('progress-40'); $(this).addClass('progress-41'); }
else if(count === 41){ $(this).removeClass('progress-41'); $(this).addClass('progress-42'); }
else if(count === 42){ $(this).removeClass('progress-42'); $(this).addClass('progress-43'); }
else if(count === 43){ $(this).removeClass('progress-43'); $(this).addClass('progress-44'); }
else if(count === 44){ $(this).removeClass('progress-44'); $(this).addClass('progress-45'); }
else if(count === 45){ $(this).removeClass('progress-45'); $(this).addClass('progress-46'); }
else if(count === 46){ $(this).removeClass('progress-46'); $(this).addClass('progress-47'); }
else if(count === 47){ $(this).removeClass('progress-47'); $(this).addClass('progress-48'); }
else if(count === 48){ $(this).removeClass('progress-48'); $(this).addClass('progress-49'); }
else if(count === 49){ $(this).removeClass('progress-49'); $(this).addClass('progress-50'); }
else if(count === 50){ $(this).removeClass('progress-50'); $(this).addClass('progress-51'); }
else if(count === 51){ $(this).removeClass('progress-51'); $(this).addClass('progress-52'); }
else if(count === 52){ $(this).removeClass('progress-52'); $(this).addClass('progress-53'); }
else if(count === 53){ $(this).removeClass('progress-53'); $(this).addClass('progress-54'); }
else if(count === 54){ $(this).removeClass('progress-54'); $(this).addClass('progress-55'); }
else if(count === 55){ $(this).removeClass('progress-55'); $(this).addClass('progress-56'); }
else if(count === 56){ $(this).removeClass('progress-56'); $(this).addClass('progress-57'); }
else if(count === 57){ $(this).removeClass('progress-57'); $(this).addClass('progress-58'); }
else if(count === 58){ $(this).removeClass('progress-58'); $(this).addClass('progress-59'); }
else if(count === 59){ $(this).removeClass('progress-59'); $(this).addClass('progress-60'); }
else if(count === 60){ $(this).removeClass('progress-60'); $(this).addClass('progress-61'); }
else if(count === 61){ $(this).removeClass('progress-61'); $(this).addClass('progress-62'); }
else if(count === 62){ $(this).removeClass('progress-62'); $(this).addClass('progress-63'); }
else if(count === 63){ $(this).removeClass('progress-63'); $(this).addClass('progress-64'); }
else if(count === 64){ $(this).removeClass('progress-64'); $(this).addClass('progress-65'); }
else if(count === 65){ $(this).removeClass('progress-65'); $(this).addClass('progress-66'); }
else if(count === 66){ $(this).removeClass('progress-66'); $(this).addClass('progress-67'); }
else if(count === 68){ $(this).removeClass('progress-68'); $(this).addClass('progress-69'); }
else if(count === 69){ $(this).removeClass('progress-69'); $(this).addClass('progress-70'); }
else if(count === 70){ $(this).removeClass('progress-70'); $(this).addClass('progress-71'); }
else if(count === 71){ $(this).removeClass('progress-71'); $(this).addClass('progress-72'); }
else if(count === 72){ $(this).removeClass('progress-72'); $(this).addClass('progress-73'); }
else if(count === 73){ $(this).removeClass('progress-73'); $(this).addClass('progress-74'); }
else if(count === 74){ $(this).removeClass('progress-74'); $(this).addClass('progress-75'); }
else if(count === 75){ $(this).removeClass('progress-75'); $(this).addClass('progress-76'); }
else if(count === 76){ $(this).removeClass('progress-76'); $(this).addClass('progress-77'); }
else if(count === 77){ $(this).removeClass('progress-77'); $(this).addClass('progress-78'); }
else if(count === 78){ $(this).removeClass('progress-78'); $(this).addClass('progress-79'); }
else if(count === 79){ $(this).removeClass('progress-79'); $(this).addClass('progress-80'); }
else if(count === 80){ $(this).removeClass('progress-80'); $(this).addClass('progress-81'); }
else if(count === 81){ $(this).removeClass('progress-81'); $(this).addClass('progress-82'); }
else if(count === 82){ $(this).removeClass('progress-82'); $(this).addClass('progress-83'); }
else if(count === 83){ $(this).removeClass('progress-83'); $(this).addClass('progress-84'); }
else if(count === 84){ $(this).removeClass('progress-84'); $(this).addClass('progress-85'); }
else if(count === 85){ $(this).removeClass('progress-85'); $(this).addClass('progress-86'); }
else if(count === 86){ $(this).removeClass('progress-86'); $(this).addClass('progress-87'); }
else if(count === 87){ $(this).removeClass('progress-87'); $(this).addClass('progress-88'); }
else if(count === 88){ $(this).removeClass('progress-88'); $(this).addClass('progress-89'); }
else if(count === 89){ $(this).removeClass('progress-89'); $(this).addClass('progress-90'); }
else if(count === 90){ $(this).removeClass('progress-90'); $(this).addClass('progress-91'); }
else if(count === 91){ $(this).removeClass('progress-91'); $(this).addClass('progress-92'); }
else if(count === 92){ $(this).removeClass('progress-92'); $(this).addClass('progress-93'); }
else if(count === 93){ $(this).removeClass('progress-93'); $(this).addClass('progress-94'); }
else if(count === 94){ $(this).removeClass('progress-94'); $(this).addClass('progress-95'); }
else if(count === 95){ $(this).removeClass('progress-95'); $(this).addClass('progress-96'); }
else if(count === 96){ $(this).removeClass('progress-96'); $(this).addClass('progress-97'); }
else if(count === 97){ $(this).removeClass('progress-97'); $(this).addClass('progress-98'); }
else if(count === 98){ $(this).removeClass('progress-98'); $(this).addClass('progress-99'); }
else if(count === 99){ $(this).removeClass('progress-99'); $(this).addClass('progress-100'); }
	        });
	    });
	});
});