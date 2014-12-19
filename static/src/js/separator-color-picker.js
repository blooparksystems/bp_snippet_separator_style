$(document).ready( function(){
	// if window is loaded (e.g. after change background color) set bg_color and bg_color_lighten
	$(window).load( function(){
			
			// var id = 0;
   //          $(".ss-style-boxes").each(function () {
   //              var sid = 1 + parseInt($(this).attr("id").replace(/[^0123456789]/g, ''),10);
   //              if (id < sid) id = sid;
   //          });
   //          return "ss-style-boxes" + id;

				if ('editable_mode') {
			$('.ss-style-boxes').removeClass('change');
		// change color to ss-style-boxes separator element
		// ################################################
			console.log('ich BIN DIRION');
		}

		console.log('ich nichts edit fsdafsfdafx');
		$('.ss-style-boxes').addClass('change');			// toggle the class change to style the separator class pseudo element
		var bg_color = $('.ss-style-boxes').css('background-color');
		
		//write the new style informations in the head of the document TODO: find a better way to set the style information
		$('<style>.ss-style-boxes.change:before{background: linear-gradient(to right, '+bg_color+' 50%, '+shadeRGBColor(bg_color, 0.3)+' 50%); background-size: 130px 100%}</style>').appendTo('head');
		// end of ss-style-boxes separator element


		// change color to ss-style-doublediagonal separator element
		// #########################################################

		$('.ss-style-doublediagonal').addClass('change');
		var bg_color_diagonal = $('.ss-style-doublediagonal').css('background');

		$('<style>.ss-style-doublediagonal.change:before{background:'+shadeRGBColor(bg_color_diagonal, 0.3)+'</style>').appendTo('head');


	// function to get a lighter version of the selected color
	function shadeRGBColor(color, percent) {
		if (color){
		var f=color.split(","),
			t=percent<0?0:255,
			p=percent<0?percent*-1:percent,
			R=parseInt(f[0].slice(4)),
			G=parseInt(f[1]),
			B=parseInt(f[2]);
		return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
	}
	}
	// end of shadeRGBColor function
	});
	// end of window.load() function


       
        

}); 