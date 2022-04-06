function urlfunction(){
	var urlinput = document.getElementById("ip").value;
	console.log('{ "ip": "'+urlinput+'" }');
	fetch('https://yeti.roe.hr/api/v1/check/ip', {
		method: 'post',
		body: '{ "ip": "'+urlinput+'" }'
	}).then(function (response) {
		return response.text();
	}).then(function (text) {
		console.log(text);
		document.getElementById("res").value = text;
	})

}
