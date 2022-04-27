function filefunction() {
  var fileinput = document.getElementById("file").files[0];
  var data = new FormData();
  data.append("file", fileinput);
  fetch('https://yeti.roe.hr/api/v1/check/file', {
      method: 'POST',
      body: data,
    })
		.then(response => response.json())
		.then(data =>{
			if(data.resp.detections != 0){
				document.getElementById("res").value = "Found a yeti!\n"
				document.getElementById("res").value += "Link is potentially malicious"
        document.getElementById("res").value += "Name of malware is "+data.resp.name;
        document.getElementById("res").value += data.resp.name+" is a "+data.resp.category;
			}
			else{
				document.getElementById("res").value = "No malicious content found\n"
        //console.log('{ "detections": "'+data.resp.detections+'" }');
			}
		})

}
