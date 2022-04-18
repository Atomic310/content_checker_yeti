function urlfunction(){
	var urlinput = document.getElementById("ip").value;
	console.log('{ "ip": "'+urlinput+'" }');
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
			document.getElementById("res").value = "No yetis spotted!\n"
			document.getElementById("res").value += "No malicious content found"
		}
	})

}
