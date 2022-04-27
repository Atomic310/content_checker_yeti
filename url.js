function urlfunction(){
	var urlinput = document.getElementById("ip").value;
	//console.log('{ "ip": "'+urlinput+'" }');
	//regex determine if ip/url
	var type = /[a-zA-Z]/;
	//console.log('{ "type": "'+type+'" }');
	//console.log('{ "test": "'+type.test(urlinput)+'" }');
	if(type.test(urlinput) == true){
		fetch('https://yeti.roe.hr/api/v1/check/url', {
			method: 'post',
			body: '{ "url": "'+urlinput+'" }'
		})
		.then(response => response.json())
		.then(data =>{
			if(data.resp == true){
				document.getElementById("res").value = "Found a yeti!\n"
				document.getElementById("res").value += "Link is potentially malicious"
			}
			else{
				document.getElementById("res").value = "No malicious content found in link"
			}
		})
	}
	else{
		fetch('https://yeti.roe.hr/api/v1/check/ip', {
			method: 'post',
			body: '{ "ip": "'+urlinput+'" }'
		})
		.then(response => response.json())
		.then(data =>{
			if(data.resp == true){
				document.getElementById("res").value = "Found a yeti!\n"
				document.getElementById("res").value += "IP is potentially malicious"
			}
			else{
				document.getElementById("res").value = "No malicious content found in IP"
			}
		})
	}

}
