


$(function () {
	function slideMenu() {
		var activeState = $("#menu-container .menu-list").hasClass("active");
		$("#menu-container .menu-list").animate({
			left: activeState ? "0%" : "-100%"
		}, 400);
	}
	$("#hamburger-menu").click(function (event) {
		event.stopPropagation();
		$("#hamburger-menu").toggleClass("open");
		$("#menu-container .menu-list").toggleClass("active");
		slideMenu();

		$("body").toggleClass("overflow-hidden");
		$(".bg-shadow").toggleClass("view smooth");
	});

	$(".menu-list").find(".accordion-toggle").click(function () {
		$(this).next().toggleClass("open").slideToggle("fast");
		$(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

		$(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
		$(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
	});

	$(".bg-shadow").click(function() {
		$("#menu-container .menu-list").animate({
			left: '-100%'
		}, 400),

		$("#menu-wrapper").removeClass("header-on");
		
		$(".bg-shadow").removeClass("view");

		$("#hamburger-menu").removeClass("open");
		$("#menu-container .menu-list").removeClass("active");
	});
});




$("#hamburger-menu").click(function () {
	if ($("#menu-wrapper").hasClass("header-on")) {
		$("#menu-wrapper").addClass("header-off").removeClass("header-on");
	} else {
		$("#menu-wrapper").addClass("header-on").removeClass("header-off");
	}
});


const items = document.querySelectorAll(".area button");

function togglearea() {
	const itemToggle = this.getAttribute('area-expanded');

	for (i = 0; i < items.length; i++) {
		items[i].setAttribute('area-expanded', 'false');
	}
	if (itemToggle == 'false') {
		this.setAttribute('area-expanded', 'true');
	}
}

items.forEach(item => item.addEventListener('click', togglearea));







$(window).scroll(function () {
	if ($(this).scrollTop() > 600) {
		$('.top-btn').show();
	} else {
		$('.top-btn').fadeOut();
	}
});








$(document).ready(function () {
	var scroll_pos = 0;
	$(document).scroll(function () {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > 150) {
			$(".gnb").css('background', '#000');
		} else {
			$(".gnb").css('background', 'rgba(0, 0, 0, 0.2)');
		}
	});
});




$(".modal").each(function () {
	$(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function (e) {
	e.preventDefault();
	e.stopImmediatePropagation;

	var $this = $(this),
		modal = $($this).data("modal");

	$(modal).parents(".overlay").addClass("open");
	setTimeout(function () {
		$(modal).addClass("open");
	}, 350);

	$(document).on('click', function (e) {
		var target = $(e.target);

		if ($(target).hasClass("overlay")) {
			$(target).finfd(".modal").each(function () {
				$(this).removeClass("open");
			});
			setTimeout(function () {
				$(target).removeClass("open");
			}, 350);
		}

	});

});

$(".close-modal").on('click', function (e) {
	e.preventDefault();
	e.stopImmediatePropagation;

	var $this = $(this),
		modal = $($this).data("modal");

	$(modal).removeClass("open");
	setTimeout(function () {
		$(modal).parents(".overlay").removeClass("open");
	}, 350);

});