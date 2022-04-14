function urlfunction(){
	var urlinput = document.getElementById("ip").value;
	console.log('{ "ip": "'+urlinput+'" }');
	fetch('https://yeti.roe.hr/api/v1/check/url', {
		method: 'post',
		body: '{ "url": "'+urlinput+'" }'
	})
	.then(response => response.json())
	.then(data =>{
		document.getElementById("res").value = data.resp ? "Link is potentially malicious" : "No malicious content found";
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
