const sidebarTag = document.querySelector('.sidebar');
const bodyTag = document.querySelector('body');

document.getElementById("navbar").addEventListener("click", openNav);
document.getElementById("closebtn").addEventListener("click", closeNav);
document.getElementById("toTop").addEventListener("click", scrollTop);


const placeholder = document.querySelector('.placeholder');

var logoVideo = document.getElementById("LogoVideo");
logoVideo.defaultPlaybackRate = 0.25;
logoVideo.play();


logoVideo.addEventListener('canplaythrough', () => {
    logoVideo.style.display = 'block';
    placeholder.style.display = 'none';
  });

document.addEventListener('scroll', function () {
    const pixels = window.pageYOffset;

    const pageHeight = bodyTag.getBoundingClientRect().height;
    // gBCR erzeugt ein Objekt mit den Maßen der Seite
    // wirwollen den value des keys height

    const totalScrollableDistance = pageHeight - window.innerHeight;
    // windows ist auch ein Objekt mit den Werten des Fensters

    const percentage = pixels / totalScrollableDistance;

    if (percentage * 100 >= 90) {
        toTop.classList.remove('hide');
        toTop.classList.add('show');
    }
    else {
        toTop.classList.remove('show');
        toTop.classList.add('hide');
    }
    console.log(percentage);
});


function scrollTop() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function openNav() {
    document.getElementById("navbar").style.display = "none";
    document.getElementById("closebtn").style.display = "block";
    document.body.style.width = "100% - 250px"
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("navbar").style.display = "block";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("mySidebar").style.width = "0";
}
