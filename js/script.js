$(document).ready(function(){

	if ( $(".collapse-content").length > 0 ) {
		$(".collapse-content").hide();

		var link = window.location.hash.substr(1);
		$("#collapse-"+link).show();

		$("#sidenav a[href='#"+link+"']").parent().addClass("active");
	}

	$(".link-button").click( function() {
		var link = $(this).attr("href").substr( $(this).attr("href").indexOf("#")+1 );
		if ( $(".collapse-content").length > 0 ) {
			$(".collapse-content").hide();
			$("#collapse-"+link).show();
			
			$("#sidenav a").parent().removeClass("active");
			$("#sidenav a[href='#"+link+"']").parent().addClass("active");
		}
		else {
			$("body").scrollspy("refresh");
		}
	});

	if ( $("#sidenav").length ) {
		if ( $(".collapse-content").length == 0 ) {
			$("body").scrollspy({ target: "#sidenav" });
		}

		$("#sidenav").affix({
			offset: {
				top: Math.max(200, $("#sidenav").offset().top - 100),
			}
		});

		$("#sidenav").width( $("#sidenav").width() );
	}

	$(window).resize( function() {
		$("#sidenav").width( $("#sidenav").parent().width() );
	});

	$("span.seebio").click( function() {
		$(this).parents("div").next().toggle();
	})
});