var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var modalVideo = document.getElementById("video01");
var captionTitle = document.getElementById("title");
var captionText = document.getElementById("caption");


document.addEventListener('mouseover', changeImages);
modal.addEventListener('click', overlayToggle);
document.addEventListener('DOMContentLoaded', createElements);
const observer = lozad();
observer.observe();

function createElements() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        var n = (xmlhttp.responseText.match(/png/g) || []).length;
        console.log(n);

        for (var i = 2; i <= 48; i++) {
          createImages("", 'image/3D/Image (' + i + ').png', "test", "ipsumdipsum")
        }
      }
    }
  };

  xmlhttp.open("GET", "/image/3D/", true);
  xmlhttp.send();

}


function changeImages(e) {

  console.log(e.target.id)
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
        console.log(newsrc);
        modalVideo.src = newsrc;
        modalVideo.alt = this.firstElementChild.src;
        captionTitle.innerHTML = this.children[1].children[0].innerHTML;
        captionText.innerHTML = this.children[1].children[1].innerHTML;
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
    showSlides(1);
  }
}


function createImages(secondClass, imgSrc, title, caption) {
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
  img.setAttribute('class', "lozad");
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

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("gallery");
  var currentOne = slides[0].childElementCount;
  if(n == 59 ){ n = 1}
  if(n == 0 ){ n = 59}
  console.log(currentOne);
  var urlslides = slides[0].children[n].children[0];
  modalImg.src = urlslides.src;
  modalImg.alt = urlslides.src;
  captionTitle.innerHTML = slides[0].children[n].children[1].children[0].children[0].innerHTML;
  captionText.innerHTML = slides[0].children[n].children[1].children[0].children[1].innerHTML;
  console.log(n);
}
