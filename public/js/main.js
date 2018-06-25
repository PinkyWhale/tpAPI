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

$(document).ready(function(){

	//Pedido de Status sobre el streaming de un usuario
	$.ajax({
		type: "GET",
		url:`${BASE_URL}/streams/Pink_Whale`,
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
				$("#userStatus").html("STREAMER off");
			} else {
				$("#userStatus").html("STREAMER on");
			}	
		}
	});
 
	//Pedido de Follows
	$.ajax({
		type: "GET",
		url:`${BASE_URL}/users/Pink_Whale/follows/channels/`,
		headers:{'Client-ID': CLIENT_ID
	},
		success: function(response) {
			response.follows.map((follow) => {
			// sacamos del objeto channel las keys, display_name, logo y status (esto se llama DESTRUCTURING ES6)
			    const {
			    	display_name,
			    	logo,
			    	status,
			    } = follow.channel;
    
			    $("#favUs").prepend(`
			       <div class="row" >
			    	   <div class="logoF">
			    	       <a href="https://www.twich.tv/${display_name}" target="_blank">
			    	           <img src="${logo}">
			    	       </a>
			    	   </div>
			    	   <div class= usuarioF>
			    	        ${display_name}
			    	   </div>  
			    	   <div class="statusF">
			    			${status}
			    	   </div> 
			       </div>     
			    `);
	        }); 
		}
    });

	$.ajax({
		type: "GET",
		url: `${BASE_URL}/users/Pink_Whale`,
		headers:{'Client-ID': CLIENT_ID
	},
		success: function(user) {			
			$("#userName").html(user.display_name);
			$("#createDate").html(user.created_at);
			$(".part1").prepend(`<img src='${user.logo}'>`);
		}
	})
});