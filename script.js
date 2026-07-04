const text = [
    "Web Developer",
    "Frontend Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type,1000);
    }
    else{
        setTimeout(type,120);
    }

})();



const statCards = document.querySelectorAll(".stat-card");

statCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});


const infoBoxes=document.querySelectorAll(".info-box");

infoBoxes.forEach(box=>{

    box.addEventListener("click",()=>{

        box.style.background="#dbeafe";
        box.style.borderLeftColor="orange";

        setTimeout(()=>{

            box.style.background="#f8fbff";
            box.style.borderLeftColor="royalblue";

        },500);

    });

});

const fade=document.querySelectorAll("h2,p,li,table");

window.addEventListener("scroll",()=>{

    fade.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){
            item.classList.add("show");
            item.classList.add("fade");
        }

    });

});


const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.onscroll=function(){

    if(document.documentElement.scrollTop>300){
        topBtn.style.display="block";
    }

    else{
        topBtn.style.display="none";
    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

const projectCards=document.querySelectorAll("ol li");

document.querySelectorAll("ol li").forEach(project=>{

    project.classList.add("project");

});

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("click", function(){

        skillCards.forEach(item=>{
            item.classList.remove("clicked");
        });

        this.classList.add("clicked");

    });

});

const buttons = document.querySelectorAll(".project-card button");

const messages = [
    "Object Detection Web Application built using Python, Flask and OpenCV for real-time object recognition.",
    "Image Captioning System developed using AI techniques to generate captions from uploaded images.",
    "Study Planner Web App helps students organize their study schedule and daily tasks.",
    "Tea Time Stories is a creative storytelling website designed using HTML and CSS."
];

buttons.forEach((button,index)=>{

    button.addEventListener("click",function(){

        alert(messages[index]);

    });

});



