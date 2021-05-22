function includeHTML(ID, file) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById(`${ID}`).innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", `../includes/${file}.html`, true);
    xhttp.send();
  }

 