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

const CLIENT_ID = 'ojq7x24ftqbzx1uevy6o5had2c5mbc';
const BASE_URL = 'https://api.twitch.tv/kraken';
const USER = 'Pink_Whale';

$(document).ready(function(){

	//Pedido de Status sobre el streaming de un usuario
	$.ajax({
		type: "GET",
		url:`${BASE_URL}/streams/${USER}`,
		headers:{
			'Client-ID': CLIENT_ID
		},
		success: function(resp) {

				// !null = true
				// !undefind = true
				// !0 = true
				// !'' = true
				// !!{} = true
				// !false = true

			if (!resp.stream) {
				$("#userStatus").html(`Desconectado <i style="color: grey" class="fa fa-circle"></i>`);
			} else {
				$("#userStatus").html(`En vivo <i style="color: green" class="fa fa-circle"></i>`);
			}
		}
	});

	//Pedido de Follows
	$.ajax({
		type: "GET",
		url:`${BASE_URL}/users/${USER}/follows/channels/`,
		headers:{'Client-ID': CLIENT_ID
	},
		success: function(response) {
			response.follows.map((follow) => {
					// Sacamos del obj follow.channel las keys
					// (esto se llama DESTRUCTURING ES6)
			    const {
			    	display_name,
			    	logo,
			    	status,
						views,
						followers
			    } = follow.channel;

			    $("#favUs").prepend(`
			       <div class="row" >
			        	<a href="https://www.twitch.tv/${display_name}" target="_blank">
										<div class="logo-container">
												 <img src="${logo}" class="logoF">
										</div>
										<div class= usuarioF>
												${display_name}
										</div>  
										<div class="statusF">
												${status}
										</div> 
										<div class="fans">
												Vistas totales: ${views} <i class="fas fa-eye"></i>
										</div>
										<div class="fans">
												seguidores: ${followers} <i class="fas fa-users"></i>
										</div>
							 </a>
			       </div>     
			    `);
	        });
		}
    });

	$.ajax({
		type: "GET",
		url: `${BASE_URL}/users/${USER}`,
		headers:{'Client-ID': CLIENT_ID
	},
		success: function(user) {
			const created_at = user.created_at.slice(0, 10);
			$("#userName").html(user.display_name);
			$("#createDate").html(created_at);
			$(".part1").prepend(`<img src='${user.logo}'>`);
		}
	})
});
