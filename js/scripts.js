

$(document).ready(function(){

	//Abrir menu mobile
	$( "nav button" ).click(function() {
	  $( ".main-menu" ).slideToggle( "slow" );
	});

	//Tabs em Bio
	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})


});

