var myList = document.getElementsByTagName("li");
var i;

var close = document.getElementsByClassName("remove");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
//done toggle
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('bg-neutral-400');
    var p = ev.target.querySelector('p');
    if (p) {
      p.classList.toggle('done');
    }
  }
}, false);

function newElement() {
  var inputValue = document.getElementById("note").value;
  var li = document.createElement("li");
  li.className = "item flex items-center justify-between w-full";
  var p = document.createElement("p");
  p.className = "";
  var text = document.createTextNode(inputValue);
  p.appendChild(text);
  li.appendChild(p);
  if (inputValue == "") {
    alert("Please Input a value");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("note").value = "";

  //remove function
  var button = document.createElement("button");
  var txt = document.createTextNode("Remove");
  button.className = "remove rounded";

  button.appendChild(txt);
  myList[i].appendChild(button);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
