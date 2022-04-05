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
    document.body.style.backgroundImage = "url('yeasty.png')";
    link.classList.add("cache");
    aboutInfo.classList.add("detailles");
    project2.innerHTML ="Mould"
    project3.innerHTML ="recettes générées"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="frigo"
    project7.innerHTML ="prints"
    project1.innerHTML ="Aisle Preservation";
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
    document.body.style.backgroundImage = "url('yeasty.png')";
    link.classList.add("cache");
    contactInfo.classList.add("detailles");
    project2.innerHTML ="Mould"
    project3.innerHTML ="recettes générées"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="frigo"
    project7.innerHTML ="prints"
    project1.innerHTML ="Aisle Preservation";
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
    document.body.style.backgroundImage = "url('back.png')";
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project2.innerHTML ="Mould"
    project3.innerHTML ="recettes générées"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="frigo"
    project7.innerHTML ="prints"
    project1.innerHTML = "Aisle Preservation";
    text.innerHTML ="Aisle Preservation is a book created from a series of screen grabs of aisles in grocery stores captured via google maps and subjected to two variables which manipulate their values to create the resulting images. <br><br> Both variables the humidity at the location of the grocery store, and the time of the store's closure was recorded, and were applied in an effort to subject these screen grabs to artificial time-like distortion. "
    image.innerHTML = "<img src='book2-11.png' />";
    image2.innerHTML = "<img src='book2.png' />";
    image3.innerHTML = "<img src='book2-6.png' />";
    image4.innerHTML = "<img src='book2-5.png' />";
    image5.innerHTML = "";
    image6.innerHTML = "";
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
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "grey";
    project1.classList.add("transparent")
    project3.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project1.innerHTML ="Aisle Preservation"
    project3.innerHTML ="recettes générées"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="frigo"
    project7.innerHTML ="prints"
    project2.innerHTML = "Mould";
    text.innerHTML = "Mould is an exhibit featuring works from contemporary handmade ceramics studio SHOKKI."
    image.innerHTML = "";
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
    document.body.style.backgroundImage = "url('ordinateuretfillesbitmap.png')";
    document.body.style.backgroundColor = "grey";
    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project4.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    
    project1.innerHTML ="Aisle Preservation"
    project2.innerHTML ="Mould"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="frigo"
    project7.innerHTML ="prints"
    project3.innerHTML = "recettes générées";
    text.innerHTML = "Recipe books are archives of taste, method, and history. With this generative recipe book, these factors become distorted changing the methods and outcomes of the traditional recipe book. ";
    image.innerHTML = "";
    image2.innerHTML = "<img src='book1.9.png' />";
    image3.innerHTML = "<img src='book1.5.png' />";
    image4.innerHTML = "<img src='Scan-1.4.png' />";
    image5.innerHTML = "<img src='book1.6.png' />";
    image6.innerHTML = "<img src='book1.8.png' />";
    

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
    link2.classList.add("cache")
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
    document.body.style.backgroundImage = "url('rpt.png')";
    document.body.style.backgroundColor = "grey";
    project1.classList.add("transparent")
    project2.classList.add("transparent")
    project3.classList.add("transparent")
    project5.classList.add("transparent")
    project6.classList.add("transparent")
    project2.innerHTML ="Mould"
    project3.innerHTML ="recettes générées"
    project1.innerHTML ="Aisle Preservation"
    project5.innerHTML ="pain de mie de pain"
    project6.innerHTML ="frigo"
    project7.innerHTML ="prints"
    project4.innerHTML = "Record Playback Transmission"
    text.innerHTML = "recording +<br>pencil<br>paper<br> phone camera<br><br>transmission +<br>Projection and distortion of<br>meaning<br>size<br><br>playback +<br>From the ideas of the size distortion, and loss of meaning, I created an extremely small digital receipt in the form of a noodle, creating a different perception of the initial observation.<br><br> full details in link above."
    image.innerHTML = "<img src='rpt3.png' />";
    image2.innerHTML = "<img src='rpt2.png' />";
    image3.innerHTML = "<img src='rpt1.png' />";
    image4.innerHTML = "<img src='rpt4.png' />";
    image5.innerHTML = "<img src='rpt.png' />";
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
    document.body.style.backgroundImage = "url('pain.png')";
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
    project3.innerHTML ="recettes générées"
    project1.innerHTML ="Aisle Preservation"
    project4.innerHTML ="Record Playback Transmission"
    project6.innerHTML ="frigo"
    project7.innerHTML ="prints"
    project5.innerHTML = "pain de mie de pain"
    text.innerHTML ="Using bread as an indicator of overconsumption, overproduction, and the overall detriments created on under capitalism.<br><br> In this project / pain de mie de pain / I aim to elaborate using images and notes made on Pyotr Alexeyevich Kropotkin's book La Conquête du Pain."
    image.innerHTML = "";
    image2.innerHTML = "";
    image3.innerHTML = "";
    image4.innerHTML = "";
    image5.innerHTML = "";
    image6.innerHTML = "";
    link2.classList.remove("cache")
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
    document.body.style.backgroundImage = "url('3dfrigo.png')";
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
    project3.innerHTML ="recettes générées"
    project1.innerHTML ="Aisle Preservation"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project7.innerHTML ="prints"
    project6.innerHTML = "frigo"
    text.innerHTML = "In preservation there is a distortion of time and of material. In this book I examine the ways in which the food in my and my flatmate’s fridge is distorted through 3-D scanning. <br><br>*work in progress*"
    image.innerHTML = "<img src='workinprogrss1.png' />";
    image2.innerHTML = "<img src='workinprogrss2.png' />";
    image3.innerHTML = "";
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
    document.body.style.backgroundImage = "url('prints1.png')";
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
    project3.innerHTML ="recettes générées"
    project1.innerHTML ="Aisle Preservation"
    project4.innerHTML ="Record Playback Transmission"
    project5.innerHTML ="pain de mie de pain"
    project7.innerHTML ="prints"
    project6.innerHTML = "frigo"
    text.innerHTML ="riso prints 11 x 17"
    image.innerHTML = "<img src='prints.png' />";
    image2.innerHTML = "";
    image3.innerHTML = "";
    image4.innerHTML = "";
    image5.innerHTML = "";
    image6.innerHTML = "";
    link2.classList.add("cache")
    link3.classList.add("cache")
})













