function urlfunction(){
	var urlinput = document.getElementById("ip").value;
	console.log('{ "ip": "'+urlinput+'" }');
	fetch('https://yeti.roe.hr/api/v1/check/ip', {
		method: 'post',
		body: '{ "ip": "'+urlinput+'" }'
	})
	.then(response => response.json())
	.then(data =>{
		document.getElementById("res").value = 'success: ' + data.success + '\n' + 'resp: ' + data.resp + '\n' + 'err: ' + data.err;
	})

	//.then(function (response) {
		//return response.text();
	//}).then(function (text) {
		//console.log(JSON.parse(text).success);
	//})
	//then(data =>{
		//document.getElementById("res").value = JSON.parse(data).success;
	//})

}
