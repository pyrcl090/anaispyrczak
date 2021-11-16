console.log("Bienvennue a mon portfolio digital :) Welcome to my digital portfolio");

//top nav//
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let aboutInfo = document.querySelector(".infoA");
let contactInfo = document.querySelector(".infoC");
let image = document.querySelector(".lesimgfichiers");
let image2 = document.querySelector(".lesimgfichiers2");
let image3 = document.querySelector(".lesimgfichiers3");
let image4 = document.querySelector(".lesimgfichiers4");
let image5 = document.querySelector(".lesimgfichiers5");
let image6 = document.querySelector(".lesimgfichiers6");
let link = document.querySelector(".lien");
let link2 = document.querySelector(".lien2");
let link3 = document.querySelector(".lien3");
let text = document.querySelector(".sidetext")

about.addEventListener("mouseover", function(){
    about.innerHTML = "anaïs";
})
about.addEventListener("mouseout", function(){
    about.innerHTML = "about";
})
about.addEventListener("click", function(){
    aboutInfo.classList.toggle("Adisplay");
    about.classList.toggle("detailles");
    image.innerHTML = "";
    image2.innerHTML = "";
    image3.innerHTML = "";
    image4.innerHTML = "";
    image5.innerHTML = "";
    image6.innerHTML = "";
    document.body.style.backgroundImage = "url('IMG_5694-2.png')";
    link.classList.add("cache");
    aboutInfo.classList.add("detailles");
    project2.innerHTML ="Mould"
    project3.innerHTML ="Web as Architecture"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="nouille"
    project7.innerHTML ="prints"
    project1.innerHTML ="how experiences influence designs";
    text.innerHTML =""
    link2.classList.add("cache")
    link3.classList.add("cache")
    link.classList.add("cache")
    
    
})
contact.addEventListener("mouseover", function(){
    contact.innerHTML = "email";
})
contact.addEventListener("mouseout", function(){
    contact.innerHTML = "contact";
})
contact.addEventListener("click", function(){
    contactInfo.classList.toggle("Adisplay");
    contact.classList.toggle("detailles");
    image.innerHTML = "";
    image2.innerHTML = "";
    image3.innerHTML = "";
    image4.innerHTML = "";
    image5.innerHTML = "";
    image6.innerHTML = "";
    document.body.style.backgroundImage = "url('IMG_5694-2.png')";
    link.classList.add("cache");
    contactInfo.classList.add("detailles");
    project2.innerHTML ="Mould"
    project3.innerHTML ="Web as Architecture"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="nouille"
    project7.innerHTML ="prints"
    project1.innerHTML ="how experiences influence designs";
    text.innerHTML =""
    link2.classList.add("cache")
    link3.classList.add("cache")
    link.classList.add("cache")
})



//project preview nav//

let project1 = document.querySelector(".n1");
let project2 = document.querySelector(".n2");
let project3 = document.querySelector(".n3");
let project4 = document.querySelector(".n4");
let project5 = document.querySelector(".n5");
let project6 = document.querySelector(".n6");
let project7 = document.querySelector(".n7");
let figure = document.querySelector(".fig")

//hover for preview//

project1.addEventListener("mouseover", function(){
     //transparent text//
    project1.classList.remove("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project7.classList.add("transparent")
    
})
project1.addEventListener("mouseleave", function(){
    
    project1.classList.add("transparent")
})
project1.addEventListener("click", function(){
    figure.classList.add("cache");
    document.body.style.backgroundImage = "url('./projets/ffb.png')";
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project2.innerHTML ="Mould"
    project3.innerHTML ="Web as Architecture"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="nouille"
    project7.innerHTML ="prints"
    project1.innerHTML = "how experiences influence designs";
    text.innerHTML ="how experiences influence designs<br><br> is a collaborative zine in which I interviewed my friend Izzy Wu on how her lived experiences have influenced her design practice."
    image.innerHTML = "<img src='projets/fixedformats2' />";
    image2.innerHTML = "<img src='projets/fixedformats1' />";
    image3.innerHTML = "<img src='projets/fixedformats3' />";
    image4.innerHTML = "<img src='projets/fixedformats4.png' />";
    image5.innerHTML = "<img src='projets/fixedformats5' />";
    image6.innerHTML = "<img src='projets/fixedformats6' />";
    link.classList.add("cache");
    link2.classList.add("cache")
    link3.classList.add("cache")
    

    //detailles de texte
    project1.classList.add("detailles")
    project2.classList.remove("detailles")
    project3.classList.remove("detailles")
    project4.classList.remove("detailles")
    project5.classList.remove("detailles")
    project6.classList.remove("detailles")
    project7.classList.remove("detailles")
    project4.classList.remove("grey")
    project3.classList.remove("blue")

})

project2.addEventListener("mouseover", function(){
    

    project1.classList.add("transparent")
    project2.classList.remove("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project7.classList.add("transparent")

})
project2.addEventListener("mouseleave", function(){
    
    project2.classList.add("transparent")
})
project2.addEventListener("click", function(){
    figure.classList.add("cache");
    document.body.style.backgroundImage = "url('./projets/mould2.png')";
    project1.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project1.innerHTML ="how experiences influence designs"
    project3.innerHTML ="Web as Architecture"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="nouille"
    project7.innerHTML ="prints"
    project2.innerHTML = "Mould";
    text.innerHTML = "Mould is an exhibit of international works by designers that use clay as their primary mode of construction. This exhibition is meant to highlight the modernization of ceramic works as they diverge from historical vessels to something entirely new."
    image.innerHTML = "<img src='projets/mould.png' />";
    image2.innerHTML = "";
    image3.innerHTML = "";
    image4.innerHTML = "";
    image5.innerHTML = "";
    image6.innerHTML = "";
    link.classList.remove("cache");
    link2.classList.add("cache")
    link3.classList.add("cache")

    //detailles de texte
    project1.classList.remove("detailles")
    project2.classList.add("detailles")
    project3.classList.remove("detailles")
    project4.classList.remove("detailles")
    project5.classList.remove("detailles")
    project6.classList.remove("detailles")
    project7.classList.remove("detailles")
    project4.classList.remove("grey")
    project3.classList.remove("blue")
})
project3.addEventListener("mouseover", function(){

    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.remove("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project7.classList.add("transparent")
})
project3.addEventListener("mouseleave", function(){
    
    project3.classList.add("transparent")
})
project3.addEventListener("click", function(){
    figure.classList.add("cache");
    document.body.style.backgroundImage = "url('')";
    document.body.style.backgroundColor = "grey";
    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    
    project1.innerHTML ="how experiences influence designs"
    project2.innerHTML ="Mould"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="nouille"
    project7.innerHTML ="prints"
    project3.innerHTML = "Web as Architecture";
    text.innerHTML = "What makes a space? <br><br> How do you create a living space within this browser?<br><br> This website seeks to use these questions to guide the contents. A Digital Directory of my class: the physical inventory, the physical work space, and thoughts in the headspace.    "
    image.innerHTML = "<img src='projets/webasarc/un.png' />";
    image2.innerHTML = "<img src='projets/webasarc/deux.png' />";
    image3.innerHTML = "<img src='projets/webasarc/trois.png' />";
    image4.innerHTML = "<img src='projets/webasarc/quatre.png' />";
    image5.innerHTML = "<img src='projets/web.png' />";
    image6.innerHTML = "";
    

    //detailles de texte
    project1.classList.remove("detailles")
    project2.classList.remove("detailles")
    project3.classList.add("detailles")
    project4.classList.remove("detailles")
    project5.classList.remove("detailles")
    project6.classList.remove("detailles")
    project7.classList.remove("detailles")
    link.classList.add("cache");
    project3.classList.add("blue")
    project4.classList.remove("grey")
    link2.classList.remove("cache")
    link3.classList.add("cache")

})
project4.addEventListener("mouseover", function(){
    

    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.remove("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project7.classList.add("transparent")
})
project4.addEventListener("mouseleave", function(){
    
    project4.classList.add("transparent")
})
project4.addEventListener("click", function(){
    figure.classList.add("cache");
    document.body.style.backgroundImage = "url('./projets/rpt.png')";
    document.body.style.backgroundColor = "grey";
    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project2.innerHTML ="Mould"
    project3.innerHTML ="Web as Architecture"
    project1.innerHTML ="how experiences influence designs"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="nouille"
    project7.innerHTML ="prints"
    project4.innerHTML = "Record Playback Transmission"
    text.innerHTML = "recording +<br>pencil<br>paper<br> phone camera<br><br>transmission +<br>Projection and distortion of<br>meaning<br>size<br><br>playback +<br>From the ideas of the size distortion, and loss of meaning, and created an extremely small digital receipt in the form of a noodle, creating a different perception of the initial observation.<br><br> full details in link above."
    image.innerHTML = "<img src='projets/rpt3.png' />";
    image2.innerHTML = "<img src='projets/rpt2.png' />";
    image3.innerHTML = "<img src='projets/rpt1.png' />";
    image4.innerHTML = "<img src='projets/rpt.png' />";
    image5.innerHTML = "";
    image6.innerHTML = "";

    //detailles de texte
    project1.classList.remove("detailles")
    project2.classList.remove("detailles")
    project3.classList.remove("detailles")
    project4.classList.add("grey")
    project3.classList.remove("blue")
    project5.classList.remove("detailles")
    project6.classList.remove("detailles")
    project7.classList.remove("detailles")
    link.classList.add("cache");
    link2.classList.add("cache")
    link3.classList.remove("cache")
})
project5.addEventListener("mouseover", function(){
   

    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.remove("transparent")
    project6.classList.add("transparent")
})
project5.addEventListener("mouseleave", function(){
    
    project5.classList.add("transparent")
})
project5.addEventListener("click", function(){
    figure.classList.add("cache");
    document.body.style.backgroundImage = "url('./projets/pain.png')";
    document.body.style.backgroundColor = "grey";
    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project6.classList.add("transparent")

    //detailles de texte
    project1.classList.remove("detailles")
    project2.classList.remove("detailles")
    project3.classList.remove("detailles")
    project4.classList.remove("detailles")
    project5.classList.add("detailles")
    project6.classList.remove("detailles")
    project7.classList.remove("detailles")
    link.classList.add("cache");
    project4.classList.remove("grey")
    project3.classList.remove("blue")

    project2.innerHTML ="Mould"
    project3.innerHTML ="Web as Architecture"
    project1.innerHTML ="how experiences influence designs"
    project4.innerHTML ="Record Playback Transmission"
    project6.innerHTML ="nouille"
    project7.innerHTML ="prints"
    project5.innerHTML = "pain de mie de pain"
    text.innerHTML ="Useing bread as an indicator of overconsumption, overproduction, and the overall detriments brought on under capitalism.<br><br> In this project / pain de mie de pain / I aim to elaborate useing images and notes I make on Pyotr Alexeyevich Kropotkin's book La Conquête du Pain. <br><br>project in progress..."
    image.innerHTML = "<img src='projets/pain2.png' />";
    image2.innerHTML = "";
    image3.innerHTML = "";
    image4.innerHTML = "";
    image5.innerHTML = "";
    image6.innerHTML = "";
    link2.classList.add("cache")
    link3.classList.add("cache")
})
project6.addEventListener("mouseover", function(){
    

    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.remove("transparent")
    project7.classList.add("transparent")
})
project6.addEventListener("mouseleave", function(){
    
    project6.classList.add("transparent")
})
project6.addEventListener("click", function(){
    figure.classList.add("cache");
    document.body.style.backgroundImage = "url('./projets/doodle.png')";
    document.body.style.backgroundColor = "grey";
    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")

    //detailles de texte
    project1.classList.remove("detailles")
    project2.classList.remove("detailles")
    project3.classList.remove("detailles")
    project4.classList.remove("detailles")
    project5.classList.remove("detailles")
    project6.classList.add("detailles")
    project7.classList.remove("detailles")
    link.classList.add("cache");
    project4.classList.remove("grey")
    project3.classList.remove("blue")

    project2.innerHTML ="Mould"
    project3.innerHTML ="Web as Architecture"
    project1.innerHTML ="how experiences influence designs"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project7.innerHTML ="prints"
    project6.innerHTML = "nouille"
    text.innerHTML = "My stable diet consists of mainly nouilles so I am making them into a typeface so that I can consume them visually as well. This typeface embodies what it means to be a nouille."
    image.innerHTML = "<img src='./projets/nouille3.png' />";
    image2.innerHTML = "<img src='./projets/nouille.png' />";
    image3.innerHTML = "<img src='./projets/nouille1.png' />";
    image4.innerHTML = "";
    image5.innerHTML = "";
    image6.innerHTML = "";
    link2.classList.add("cache")
    link3.classList.add("cache")
})

project7.addEventListener("mouseover", function(){
    

    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project7.classList.remove("transparent")
})
project7.addEventListener("mouseleave", function(){
    
    project7.classList.add("transparent")
})
project7.addEventListener("click", function(){
    figure.classList.add("cache");
    document.body.style.backgroundImage = "url('./projets/prints1.png')";
    document.body.style.backgroundColor = "grey";
    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project7.classList.remove("transparent")

    //detailles de texte
    project1.classList.remove("detailles")
    project2.classList.remove("detailles")
    project3.classList.remove("detailles")
    project4.classList.remove("detailles")
    project5.classList.remove("detailles")
    project6.classList.remove("detailles")
    project7.classList.add("detailles")
    link.classList.add("cache");
    project4.classList.remove("grey")
    project3.classList.remove("blue")

    project2.innerHTML ="Mould"
    project3.innerHTML ="Web as Architecture"
    project1.innerHTML ="how experiences influence designs"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project7.innerHTML ="prints"
    project6.innerHTML = "nouille"
    text.innerHTML ="riso prints 11 x 17"
    image.innerHTML = "";
    image2.innerHTML = "";
    image3.innerHTML = "";
    image4.innerHTML = "";
    image5.innerHTML = "";
    image6.innerHTML = "";
    link2.classList.add("cache")
    link3.classList.add("cache")
})










