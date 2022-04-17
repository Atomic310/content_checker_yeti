function filefunction(){
	var fileinput = document.getElementById("file").files[0];
	//var fileread = new FileReader();
	//fileread.readAsDataURL(fileinput.files[0]);
	console.log('{ "file": "'+fileinput+'" }');
	fetch('http://roe.hr/api/v1/check/file', {
		method: 'POST',
		headers: {
			'Content-Type':'multipart/form-data'
		},
		body: '{ "file": "'+fileinput+'" }'
	})
	.then(response => console.log(response);)
	//.then(data =>{
		//document.getElementById("res").value = data;
		//console.log(data);
	//})

}
