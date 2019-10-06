console.log('access');

// HTTP request using XHR
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open("GET","https://5d99ad5e5641430014051a68.mockapi.io/users",true);
xhttp.send();
