var numbers = []; // new empty array

var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var modalVideo = document.getElementById("video01");
var captionTitle = document.getElementById("title");
var captionText = document.getElementById("caption");


document.addEventListener('mouseover', changeImages);

var newData;

modal.addEventListener('click', overlayToggle);
document.addEventListener('DOMContentLoaded', randomNumber(2, 50, 49));

var currentOne;

const observer = lozad();
observer.observe();

function createElements() {

  $.getJSON("data.json", function (json) {
    data = json;
    newData = data.artworks;
    console.log(numbers);

    console.log(newData[6].name);

    for (var i = 0; i <= 47; i++) {
      var currentnumb = numbers[i];
      createImages(28 + i, "", 'image/3D/Image (' + numbers[i] + ').png', newData[currentnumb-2].name, newData[currentnumb-2].description)
    }

  });
}

function changeImages(e) {
  //alle elemente die img Tags sind
  var imgs = document.getElementsByTagName("img");
  var videos = document.getElementsByTagName("video");

  //normal wurde man jedes Bild einzeln nehmen und eine onmouse over/out function zuweisen
  //getelement byid oder class
  //forschleife geht alle Bilder mit Tag img durch und checkt welches mouseover/out hat
  //leichter mit on hover oder curser tag im css, bei div Bildern jedoch nicht so einfach machbar
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].onmousedown = function () {
      if (e.target.id == "images") {
        modal.style.display = "block";
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
        modalImg.src = this.src;
        modalImg.alt = this.src;
        captionTitle.innerHTML = this.nextElementSibling.children[0].children[0].innerHTML;
        captionText.innerHTML = this.nextElementSibling.children[0].children[1].innerHTML;
        currentOne = parseInt($(e.target).attr('class'));
        document.querySelectorAll('.prev').forEach(function (el) {
          el.style.display = 'block';
        });
        document.querySelectorAll('.next').forEach(function (el) {
          el.style.display = 'block';
        });
      }
    }
  }

  for (var i = 0; i < videos.length; i++) {
    videos[i].onmousedown = function () {
      if (e.target.id == "anima") {
        modal.style.display = "block";
        modalVideo.style.display = "block";
        modalImg.style.display = "none";
        var frontpart = this.firstElementChild.src.substr(0, this.firstElementChild.src.lastIndexOf("/") + 1);
        var newName = "Large" + this.firstElementChild.src.split("/").pop();
        var newsrc = frontpart + newName;
        modalVideo.src = newsrc;
        modalVideo.alt = this.firstElementChild.src;
        captionTitle.innerHTML = this.children[1].children[0].innerHTML;
        captionText.innerHTML = this.children[1].children[1].innerHTML;
        currentOne = parseInt($(e.target).attr('class'));
        document.querySelectorAll('.prev').forEach(function (el) {
          el.style.display = 'none';
        });
        document.querySelectorAll('.next').forEach(function (el) {
          el.style.display = 'none';
        });
      }
    }
  }
}



function overlayToggle(e) {
  if (e.target.id != "back") {
    modal.style.display = "none";
    modalVideo.style.display = "none";
    modalImg.style.display = "none";
    modalImg.src = "";
    modalImg.alt = "";
    captionTitle.innerHTML = "";
    captionText.innerHTML = "";
    modalVideo.src = "";
    modalVideo.alt = "";
    captionTitle.innerHTML = "";
    captionText.innerHTML = "";
    // showSlides(1);
  }
}

function randomNumber(min, max, r) {
  var n, p;

  for (let i = 0; i < r; i++) {
    do {
      n = Math.floor(Math.random() * (max - min + 1)) + min;
      p = numbers.includes(n);
      if (!p) {
        numbers.push(n);
      }
    }
    while (p);
  }
  createElements();
}


function createImages(firstclass, secondClass, imgSrc, title, caption) {
  var div = document.createElement("div");
  div.setAttribute('class', 'gallery__item');

  var randomNum = randomInteger(0, 20)
  if (randomNum >= 15 && randomNum < 18) {
    div.setAttribute('class', "gallery__item gallery__item--hor");
  }
  if (randomNum > 18) {
    div.setAttribute('class', "gallery__item gallery__item--lg");
  }
  if (randomNum >= 12 && randomNum < 15) {
    div.setAttribute('class', "gallery__item gallery__item--vert");
  }

  if (secondClass != "") {
    div.setAttribute('class', secondClass);
  }
  var img = document.createElement("img");
  img.setAttribute('class', firstclass);
  img.setAttribute('id', "images");
  img.setAttribute('src', imgSrc);

  div.appendChild(img);

  var div2 = document.createElement("div");
  div2.setAttribute('class', 'transparent-box');
  div.appendChild(div2);

  var div3 = document.createElement("div");
  div3.setAttribute('class', 'caption');
  div2.appendChild(div3);

  var p = document.createElement("p");
  p.innerHTML = title;
  div3.appendChild(p);

  var p2 = document.createElement("p");
  p2.innerHTML = caption;
  p2.setAttribute('class', 'opacity-low');
  div3.appendChild(p2);

  document.getElementsByClassName("gallery")[0].appendChild(div);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function plusSlides(n) {
  slideIndex = currentOne += n;
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = currentOne = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("gallery");
  console.log(currentOne);
  if (currentOne == 16) { currentOne = 73 }
  if (currentOne == 74) { currentOne = 17 }
  console.log(currentOne);
  var urlslides = slides[0].children[currentOne - 17].children[0];
  modalImg.src = urlslides.src;
  modalImg.alt = urlslides.src;
  captionTitle.innerHTML = slides[0].children[currentOne - 17].children[1].children[0].children[0].innerHTML;
  captionText.innerHTML = slides[0].children[currentOne - 17].children[1].children[0].children[1].innerHTML;
}

// function showSlides(n) {
//   console.log(currentOne);
//   if (currentOne == 0) { currentOne = 73 }
//   if (currentOne == 74) { currentOne = 1 }
//   var urlslides = document.getElementsByClassName(currentOne.toString());
//   console.log(urlslides[0]);
//   if (urlslides[0].id == "images") {
//     console.log("imagesOnly");
//     modalImg.src = urlslides[0].src;
//     modalImg.alt = urlslides[0].src;
//     captionTitle.innerHTML = urlslides[0].parentNode.children[1].children[0].children[0].innerHTML;
//     captionText.innerHTML = urlslides[0].parentNode.children[1].children[0].children[1].innerHTML;
//   }
//   if (urlslides[0].id == "anima") {
//     console.log("animaOnly");
//     var frontpart = urlslides[0].parentNode.children[1].children[0].src.substr(0, urlslides[0].parentNode.children[1].children[0].src.lastIndexOf("/") + 1);
//     var newName = "Large" + urlslides[0].parentNode.children[1].children[0].src.split("/").pop();
//     var newsrc = frontpart + newName;
//     modalVideo.src = newsrc;
//     console.log(newsrc);
//     modalVideo.alt = urlslides[0].parentNode.children[1].children[0].src;
//     captionTitle.innerHTML = urlslides[0].parentNode.children[1].children[1].children[0].innerHTML;
//     captionText.innerHTML = urlslides[0].parentNode.children[1].children[1].children[1].innerHTML;
//   }
// }

// let files;
// try{
//     const response = await fetch("/");
//     files = await response.json();
//     console.log(files);
//     // files is now an array of file names, do what you want with that (create <img> tags, etc.)
// } catch(err){
//     console.error(err)
// }