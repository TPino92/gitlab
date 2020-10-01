// body variable
var body = document.body;

// elements
var h1El = document.createElement ('h1');
var h2El = document.createElement ('h2');
var infoEl = document.createElement ('div');
var imgEl = document.createElement ('img');
var booksEl = document.createElement ('div')
var nameEl = document.createElement('div');
var favoriteEl = document.createElement('div');
var listEl = document.createElement('ol');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

//li as variable
var listItems = document.getElementsByTagName('li');

//content
h1El.textContent = 'Welcome to my page';
h2El.textContent ='This HTML document was created using JavaScript and Chrome Dev Tools';
booksEl.textContent = 'OOoo Books!';
nameEl.textContent = "Don't you love books?";
favoriteEl.textContent = 'My favorite books are:';
li1.textContent = "Dune";
li2.textContent = "Ender's Game";
li3.textContent = 'Good Omens';
li4.textContent = "Lord of the Rings";

//append children
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(booksEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

//style
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoNCLCqgpPMinoRDSarBeahj5jKvHFedAnjA&usqp=CAU'); 'height', 200; 'width', 200;
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
booksEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');
listEl.setAttribute('style', 'background:#333333; padding:20px;');
listItems[0].setAttribute(
  'style',
  ' color:white; background: #666666; padding: 5px; margin-left: 35px;'
);
listItems[1].setAttribute(
  'style',
  ' color:white; background: #777777; padding: 5px; margin-left: 35px;'
);
listItems[2].setAttribute(
  'style',
  ' color:white; background: #888888; padding: 5px; margin-left: 35px;'
);
listItems[3].setAttribute(
  'style',
  ' color:white; background: #999999; padding: 5px; margin-left: 35px;'
);