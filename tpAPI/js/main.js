	//- ID de Cliente
	//- ojq7x24ftqbzx1uevy6o5had2c5mbc
	// curl -H 'Client-ID: ojq7x24ftqbzx1uevy6o5had2c5mbc' -X GET 'https://api.twitch.tv/helix/streams?first=20'

$(document).ready(function(){
	$.ajax({
		type: "GET",
		url:'https://api.twitch.tv/helix/streams?first=20',
		headers:{
			'Client-ID': 'ojq7x24ftqbzx1uevy6o5had2c5mbc'},
		success:function(data1){
			debugger;
			if(data1.stream === null){
				$("#prueba1").html("usuario off");
			}else{
				$("#prueba1").html("usuario on");
			};	
		}
	});
});
