document.body.style.fontFamily = 'sans-serif';

var box = document.createElement("div");
box.setAttribute('id', 'mainDiv');

var heading = document.createElement("h1");
heading.innerHTML = "Creative";
heading.style.textAlign = "center";
heading.style.fontFamily = 'sans-serif';

box.append(heading);

var pic = document.createElement("img");
pic.setAttribute('src', 'images/1.jpg');
pic.setAttribute('alt', 'mainImage');
pic.setAttribute('height', '100%');
pic.setAttribute('width', '100%');
pic.setAttribute('text-align', 'center');

box.append(pic);

var heading = document.createElement("h1");
heading.innerHTML = "Creative";
heading.style.textAlign = "center";
heading.style.margin = '30px 0px 0px 0px';

box.append(heading);

var peragraph = document.createElement("p");
peragraph.innerHTML = "Polycarp had no creative genius.";
peragraph.style.textAlign = 'center';
peragraph.style.margin = '0px 0px 30px 0px';

box.append(peragraph);

var newDiv = document.createElement("div");
newDiv.style.backgroundColor = '##0000000d';

box.append(newDiv);

var newPeragraph = document.createElement("p");
var breakTag = document.createElement("br").innerHTML = "<br>";
newPeragraph.innerHTML = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." + breakTag + breakTag + breakTag + "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.";
newPeragraph.style.textAlign = 'left';
newPeragraph.style.width = '90%';
newPeragraph.style.margin = 'auto';
newPeragraph.style.backgroundColor = '#0000000a';
newPeragraph.style.padding = '60px 70px';
newPeragraph.style.lineHeight = '21px';

newDiv.append(newPeragraph);

document.childNodes[1].childNodes[2].append(box);