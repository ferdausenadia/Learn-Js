var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = this.responseText;
    jsonData(data);
  }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
function jsonData(json_obj) {
  var js_obj = JSON.parse(json_obj);
  //console.log(js_obj.persons);
  //console.log(js_obj);
  for (x in js_obj.persons) {
    //console.log(x);
    // console.log(js_obj.persons[x]);
    var persons = js_obj.persons;
    //console.log(persons[x]);

    for (y in persons[x]) {
      console.log(persons[x][y]);
    }
  }
}
