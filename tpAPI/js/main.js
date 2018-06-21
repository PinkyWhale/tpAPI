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

	$.ajax({
		type: "GET",
		url:'https://api.twitch.tv/helix/streams?first=20/follows/channels/',
		headers:{
			'Client-ID': 'ojq7x24ftqbzx1uevy6o5had2c5mbc'},
		success:function(data1){
			debugger;
			for (var i = 0; i < data2.follows.length; i++) {
				console.log(data2.follows[0]);
				  //gets displayName
				  var displayName = data2.follows[i].channel.display_name;
				  var logo = data2.follows[i].channel.logo;
				var status= data2.follows[i].channel.status;
				$("#favUs").prepend("<div class ='row'>" + "<div class='logoF'>" +
              "<a href='https://www.twitch.tv/"+ displayName+"'><img src='" + logo + "'></a>"
              +
              "</div>" + "<div class='usuarioF'>" + displayName + "</div>" + "<div class='statusF'>" + status + "</div></div>");
			}
		}
	});

	
});
