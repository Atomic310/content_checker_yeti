function slidefunction(){
  console.log('slider changed');
  const fontsize = document.querySelector('style');
  var value = document.getElementById("textrange").value;
  console.log(value);
  fontsize.innerHTML = 'head {font-size: '+ value +'px;}';
  fontsize.innerHTML = 'body {font-size: '+ value +'px;}';
}
