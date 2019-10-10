$(document).ready(function() {

	// Gets the video src from the data-src on each button
	var $videoSrc;
	$('.video-btn').click(function() {
			$videoSrc = $(this).data( "src" );
	});

	// when the modal is opened autoplay it
	$('#modalVideo01').on('shown.bs.modal', function(e) {

		// set the video src to autoplay and not to show related video
		$("#video01").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;autoplay=1" );
	});

	// stop playing the youtube video when I close the modal
	$('#modalVideo01').on('hide.bs.modal', function(e) {
		// a poor man's stop video
		$("#video01").attr('src',$videoSrc);
	});

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
	var product_html = '';
	var ux_html = '';
	var growth_html = '';
	// var speakers_html = '';
	var workshops_html = '';
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
						<img src="/img/speakers/' + values[i][3] + '" class="img-fluid" alt="' + values[i][0] + ',' + values[i][1] + ' - ' + values[i][2] + '">\
						<div class="keynote-info">\
							<h3>' + values[i][0] + '</h3>\
							<p>' + values[i][1] + ' - ' + values[i][2] + '</p>\
							<figure><img src="/img/brands/' + values[i][5] + '" alt="' + values[i][2] + '"></figure>\
						</div>\
					</a>\
				</div>\
			</div>';
		}
		$('#keynote').html(keynote_html);
	});

	$.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/Product?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
		var values = data.values;
		for (var i = 1 ; i < values.length ; i++) {
			product_html += '\
			<div class="col-lg-3 col-md-4 col-sm-6 col-6">\
				<div class="speaker-container">\
					<a href="' + values[i][4] + '" target="_blank">\
						<img src="/img/speakers/' + values[i][3] + '" class="img-fluid" alt="' + values[i][0] + ',' + values[i][1] + ' - ' + values[i][2] + '">\
						<div class="speaker-info">\
							<h3>' + values[i][0] + '</h3>\
							<p>' + values[i][1] + ' - ' + values[i][2] + '</p>\
							<figure><img src="/img/brands/' + values[i][5] + '" alt="' + values[i][2] + '"></figure>\
						</div>\
					</a>\
				</div>\
			</div>';
		}
		$('#product').html(product_html);
	});

	$.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/UX?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
		var values = data.values;
		for (var i = 1 ; i < values.length ; i++) {
			ux_html += '\
			<div class="col-lg-3 col-md-4 col-sm-6 col-6">\
				<div class="speaker-container">\
					<a href="' + values[i][4] + '" target="_blank">\
						<img src="/img/speakers/' + values[i][3] + '" class="img-fluid" alt="' + values[i][0] + ',' + values[i][1] + ' - ' + values[i][2] + '">\
						<div class="speaker-info">\
							<h3>' + values[i][0] + '</h3>\
							<p>' + values[i][1] + ' - ' + values[i][2] + '</p>\
							<figure><img src="/img/brands/' + values[i][5] + '" alt="' + values[i][2] + '"></figure>\
						</div>\
					</a>\
				</div>\
			</div>';
		}
		$('#ux').html(ux_html);
	});

	$.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/Growth?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
		var values = data.values;
		for (var i = 1 ; i < values.length ; i++) {
			growth_html += '\
			<div class="col-lg-3 col-md-4 col-sm-6 col-6">\
				<div class="speaker-container">\
					<a href="' + values[i][4] + '" target="_blank">\
						<img src="/img/speakers/' + values[i][3] + '" class="img-fluid" alt="' + values[i][0] + ',' + values[i][1] + ' - ' + values[i][2] + '">\
						<div class="speaker-info">\
							<h3>' + values[i][0] + '</h3>\
							<p>' + values[i][1] + ' - ' + values[i][2] + '</p>\
							<figure><img src="/img/brands/' + values[i][5] + '" alt="' + values[i][2] + '"></figure>\
						</div>\
					</a>\
				</div>\
			</div>';
		}
		$('#growth').html(growth_html);
	});

	// $.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/Speakers?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
	// 	var values = data.values;
	// 	for (var i = 1 ; i < values.length ; i++) {
	// 		speakers_html += '\
	// 		<div class="col-lg-3 col-md-4 col-sm-6 col-12">\
	// 			<div class="speaker-container">\
	// 				<a href="' + values[i][4] + '" target="_blank">\
	// 					<img src="/img/speakers/' + values[i][3] + '" class="img-fluid" alt="' + values[i][0] + ',' + values[i][1] + ' - ' + values[i][2] + '">\
	// 					<div class="speaker-info">\
	// 						<h3>' + values[i][0] + '</h3>\
	// 						<p>' + values[i][1] + ' - ' + values[i][2] + '</p>\
	// 					</div>\
	// 				</a>\
	// 			</div>\
	// 		</div>';
	// 	}
	// 	$('#speakers').html(speakers_html);
	// });
	$.getJSON('https://sheets.googleapis.com/v4/spreadsheets/1Cu9buu8ibZl048JUK0hSiuPrN95qbIdNQbTICA2m5L8/values/Workshops?key=AIzaSyB7TU0ePqNvWdrxrBdMGs9_HjnNThGP9Ns', function(data) {
		var values = data.values;
		for (var i = 1 ; i < values.length ; i++) {
			workshops_html += '\
			<div class="col-lg-6 col-md-6" target="_blank" alt="' + values[i][0] + ', ' + values[i][1] + '">\
        <div class="workshop-container">\
					<a href="' + values[i][9] + '" target="_blank">\
            <figure>\
              <img src="' + values[i][8] + '" class="img-fluid" alt="">\
						</figure>\
					</a>\
          <div class="workshop-content">\
            <span class="label-track label-track-' + values[i][2] + '">' + values[i][2] + '</span>\
            <h2>' + values[i][0] + ' <small>' + values[i][1] + '</small></h2>\
            <p>' + values[i][3] + '</p>\
            <ul>\
              <li>' + values[i][4] + '</li>\
              <li>' + values[i][5] + '</li>\
            </ul>\
          </div>\
          <div class="workshop-footer">\
            <p><span>R$</span>' + values[i][6] + ' <span>' + values[i][7] + '</span></p>\
						<a href="' + values[i][9] + '" target="_blank" class="btn btn-primary">Saiba mais</a>\
          </div>\
        </div>\
      </div>';
		}
		$('#workshops').html(workshops_html);
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
