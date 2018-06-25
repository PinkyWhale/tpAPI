/*
LINKs DE INTERES:
https://dev.twitch.tv/docs/v5/

- ID de Cliente
- ojq7x24ftqbzx1uevy6o5had2c5mbc

estoy probando cosas (ERI):
curl -H 'Client-ID: ojq7x24ftqbzx1uevy6o5had2c5mbc' -X GET 'https://api.twitch.tv/kraken/streams/Pink_Whale'
curl -H 'Accept: application/vnd.twitchtv.v5+json' -H 'Client-ID: ojq7x24ftqbzx1uevy6o5had2c5mbc' -X GET https://api.twitch.tv/kraken/users/44322889?client_id=ojq7x24ftqbzx1uevy6o5had2c5mbc

Aca si funciona:
	- Pegar lo siguiente en el Browser:
	https://api.twitch.tv/kraken/users/Pink_Whale?client_id=ojq7x24ftqbzx1uevy6o5had2c5mbc

	Se va a ver el JSON, Raw Data y Headers

*/

$(document).ready(function(){

	//Pedido de Status de Usuario
	$.ajax({
		type: "GET",
		url:'https://api.twitch.tv/kraken/streams/Pink_Whale',
		headers:{
			'Client-ID': 'ojq7x24ftqbzx1uevy6o5had2c5mbc'},
		success:function(data1){
			
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
		headers:{'Client-ID': 'ojq7x24ftqbzx1uevy6o5had2c5mbc'},
		success:function(data2){
			
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

	$.ajax({
		type: "GET",
		url: "https://api.twitch.tv/kraken/users/Pink_Whale?client_id=ojq7x24ftqbzx1uevy6o5had2c5mbc",
		headers:{'Client-ID': 'ojq7x24ftqbzx1uevy6o5had2c5mbc'},
		success:function(data3){
			
			console.log(data3.display_name);
			$("#userName").html(data3.display_name);
			
		}
	})

	$.ajax({
		type: "GET",
		url: "https://api.twitch.tv/kraken/users/Pink_Whale?client_id=ojq7x24ftqbzx1uevy6o5had2c5mbc",
		headers:{'Client-ID': 'ojq7x24ftqbzx1uevy6o5had2c5mbc'},
		success:function(data4){
			
			console.log(data4.created_at);
			$("#createDate").html(data4.created_at);

		}
	})

	$.ajax({
		type: "GET",
		url: "https://api.twitch.tv/kraken/users/Pink_Whale?client_id=ojq7x24ftqbzx1uevy6o5had2c5mbc",
		headers:{'Client-ID': 'ojq7x24ftqbzx1uevy6o5had2c5mbc'},
		success:function(data5){
			
			console.log(data5.logo); // en console de html aparece la url pero no puedo hacerlo aparecer
			$(".part1").prepend("<img src='" + data5.logo + "'>");

		}
	})

	
});
