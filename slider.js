function slidefunction(value){
  console.log('slider changed');
  const fontsize = document.querySelector('style');
  //var value = document.getElementById("textrange").value;
  console.log(value);
  fontsize.innerHTML = 'head {font-size: '+ value +'px;}';
  fontsize.innerHTML = 'body {font-size: '+ value +'px;}';
  localStorage.setItem("fontvaluestore",value);
}

window.onload = function(){
	if(localStorage.getItem("fontvaluestore").length>1){
		var valueload = localStorage.getItem("fontvaluestore");
    document.getElementById("textrange").value = valueload;
    slidefunction(valueload);
	}
}
