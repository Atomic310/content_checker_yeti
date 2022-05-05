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
				document.getElementById("res").innerHTML = "Link is potentially malicious<br/>"
        document.getElementById("res").innerHTML += "Name of malware is "+data.resp.name+"<br/>";
        document.getElementById("res").innerHTML += "It is a "+data.resp.category;
			}
			else{
				document.getElementById("res").innerHTML = "No malicious content found"
        //console.log('{ "detections": "'+data.resp.detections+'" }');
			}
		})

}
