$(document).ready(function() {

	$('.hamburger').on('click', function(){
		$(this).toggleClass('open');
		$('.itens-menu-mobile').toggleClass('open');
		$('.nav-pcamp').toggleClass('open');
	});

	$("a[href*='#']:not([href='#'])").click(function(e) {
    e.preventDefault();
    var hash = this.hash;
    var section = $(hash);

    if (hash) {
      $('html, body').animate({
        scrollTop: section.offset().top - 82
      }, 1000, 'swing', function(){
        history.replaceState({}, "", hash);
      });
    }
  });


	var sponsors_t1_html = '';
	var sponsors_t2_html = '';
	var last_edition_html = '';
	var keynote_html = '';
	var speakers_html = '';
	$.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/Sponsors_Tier01?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
		var values = data.values;
		for (var i = 1 ; i < values.length ; i++) {
			sponsors_t1_html += '\
			<div class="col-lg-4 col-md-6 col-sm-12 col-12">\
				<a href="' + values[i][1] + '" target="_blank">\
					<div class="container-partner">\
						<img src="/img/sponsor/' + values[i][2] + '" alt="' + values[i][0] + '" class="img-fluid">\
					</div>\
				</a>\
			</div>';
		}
		$('#sponsors_t1').html(sponsors_t1_html);
	});
	$.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/Sponsors_Tier02?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
		var values = data.values;
		for (var i = 1 ; i < values.length ; i++) {
			sponsors_t2_html += '\
			<div class="col-lg-3 col-md-4 col-sm-6 col-6">\
				<a href="' + values[i][1] + '" target="_blank">\
					<div class="container-partner">\
						<img src="' + values[i][2] + '" alt="' + values[i][0] + '" class="img-fluid">\
					</div>\
				</a>\
			</div>';
		}
		$('#sponsors_t2').html(sponsors_t2_html);
	});
	$.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/Last_Edition?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
		var values = data.values;
		for (var i = 1 ; i < values.length ; i++) {
			last_edition_html += '\
			<div class="col-6">\
				<img src="/img/last-edition/' + values[i][1] + '" alt="' + values[i][0] + '" class="img-fluid">\
			</div>';
		}
		$('#last_edition').html(last_edition_html);
	});
	$.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/Keynotes?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
		var values = data.values;
		for (var i = 1 ; i < values.length ; i++) {
			keynote_html += '\
			<div class="col-lg-3 col-md-6">\
				<div class="keynote-container">\
					<a href="' + values[i][4] + '" target="_blank">\
						<img src="/img/speakers/' + values[i][3] + '" class="img-fluid" alt="' + values[i][0] + ',' + values[i][1] + ' na ' + values[i][2] + '">\
						<div class="keynote-info">\
							<span class="label-track label-track-keynote">Keynote</span>\
							<h3>' + values[i][0] + '</h3>\
							<p>' + values[i][1] + ' na ' + values[i][2] + '</p>\
						</div>\
					</a>\
				</div>\
			</div>';
		}
		$('#keynote').html(keynote_html);
	});
	$.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/Speakers?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
		var values = data.values;
		for (var i = 1 ; i < values.length ; i++) {
			speakers_html += '\
			<div class="col-lg-3 col-md-4 col-sm-6 col-12">\
				<div class="speaker-container">\
					<a href="' + values[i][4] + '" target="_blank">\
						<img src="/img/speakers/' + values[i][3] + '" class="img-fluid" alt="' + values[i][0] + ',' + values[i][1] + ' na ' + values[i][2] + '">\
						<div class="speaker-info">\
							<h3>' + values[i][0] + '</h3>\
							<p>' + values[i][1] + ' na ' + values[i][2] + '</p>\
						</div>\
					</a>\
				</div>\
			</div>';
		}
		$('#speakers').html(speakers_html);
	});

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
				$("nav").removeClass("top");
				$("nav").addClass("scrolling");
		} else {
				$("nav").addClass("top");
				$("nav").removeClass("scrolling");
		}

		if (scroll >= 500) {
				$("#btnmobile").addClass("in");
		} else {
				$("#btnmobile").removeClass("in");
		}
	});

	$(window).load(function(){
		$('.loader').fadeOut(600, 'linear',function(){$(this).remove();});

		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
				$("nav").removeClass("top");
				$("nav").addClass("scrolling");
		} else {
				$("nav").addClass("top");
				$("nav").removeClass("scrolling");
		}

		if (scroll >= 500) {
				$("#btnmobile").addClass("in");
		} else {
				$("#btnmobile").removeClass("in");
		}

	});

});
