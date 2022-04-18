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
