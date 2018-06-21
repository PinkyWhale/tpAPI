/*
LINKs DE INTERES:
https://dev.twitch.tv/docs/v5/

- ID de Cliente
- ojq7x24ftqbzx1uevy6o5had2c5mbc

estoy probando cosas (ERI):
curl -H 'Client-ID: ojq7x24ftqbzx1uevy6o5had2c5mbc' -X GET 'https://api.twitch.tv/kraken/streams/Pink_Whale'
curl -H 'Accept: application/vnd.twitchtv.v5+json' -H 'Client-ID: ojq7x24ftqbzx1uevy6o5had2c5mbc' -X GET https://api.twitch.tv/kraken/users/44322889?client_id=ojq7x24ftqbzx1uevy6o5had2c5mbc


*/

$(document).ready(function(){

	//Pedido de Status de Usuario
	$.ajax({
		type: "GET",
		url:'https://api.twitch.tv/kraken/streams/Pink_Whale',
		headers:{
			'Client-ID': 'ojq7x24ftqbzx1uevy6o5had2c5mbc'},
		success:function(data1){
			debugger;
			if(data1.stream === null){
				$("#userStatus").html("STREAMER off");
			}else{
				$("#userStatus").html("STREAMER on");
			};	
		}
	});

	//Pedido de Follows
	$.ajax({
		type: "GET",
		url:'https://api.twitch.tv/kraken/users/Pink_Whale/follows/channels/',
		headers:{
			'Client-ID': 'ojq7x24ftqbzx1uevy6o5had2c5mbc'},
		success:function(data2){
			debugger;
			for (var i = 0; i < data2.follows.length; i++) {
				console.log(data2.follows[0]);
					var displayName = data2.follows[i].channel.display_name;
					var logo = data2.follows[i].channel.logo;
					var status= data2.follows[i].channel.status;
				$("#favUs").prepend("<div class ='row'>" + "<div class='logoF'>" +
				  "<a href='https://www.twitch.tv/"+ displayName+"'><img src='" + logo + 
				  "'></a>" + "</div>" + "<div class='usuarioF'>" + displayName + "</div>" + 
				  "<div class='statusF'>" + status + "</div></div>");
			}
		}
	});

	
});
