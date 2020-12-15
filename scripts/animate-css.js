(function ($) {
	// фунция для эффекта при появлении
	$.fn.animatedX = function (inEffect) {
		$(this).css("opacity", "0").addClass("animated").waypoint(function (dir) {
			if (dir === "down") {
				$(this).addClass(inEffect).css("opacity", "1");
			};
		}, {
			offset: "85%"
		});
	};

	// фунция для эффектов при появлении и исчезании
	$.fn.animated = function (inEffect, outEffect) {
		$(this).css("opacity", "0").addClass("animated").waypoint(function (dir) {
			if (dir === "down") {
				$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
			} else {
				$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
			};
		}, {
			offset: "80%"
		}).waypoint(function (dir) {
			if (dir === "down") {
				$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
			} else {
				$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
			};
		}, {
			offset: -$(window).height()
		});
	};
})(jQuery);