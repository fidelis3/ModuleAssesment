// TOGGLE SECTION TO SWITCH BTN TWO AUDIENCES
const childrenBtn=document.getElementById("childrenBtn");
const adultBtn=document.getElementById("adultBtn");
const childrencontent=document.getElementById("childrencontent");
const adultcontent=document.getElementById("adultcontent");

childrenBtn.addEventListener("click",() => {
    childrenBtn.classList.add("active");
    adultBtn.classList.remove("active");

    childrencontent.classList.add("active");
    adultcontent.classList.remove("active");
})
adultBtn.addEventListener("click", () => {
    adultBtn.classList.add("active");
    childrenBtn.classList.remove("active");

    adultcontent.classList.add("active");
    childrencontent.classList.remove("active");
})

// FAQ SECTION
const faqs =document.querySelectorAll(".faq");
faqs.forEach(faq =>{
    const question=faq.querySelector(".question");
    
    question.addEventListener("click", () => {
        faqs.forEach(item=>{
            if(item!=faq){
                item.classList.remove("open")
            }

        });
        faq.classList.toggle("open");
    });
});

// CONTACT FORM
const form=document.getElementById("contactForm");
const feedback=document.getElementById("feedback");

form.addEventListener("submit",function(e){
    e.preventDefault();


const name=form.name.value.trim();
const email=form.email.value.trim();
const message=form.message.value.trim()
const emailPattern= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!name || !email || !message){
    feedback.textContent="Please fill in all fields";
    feedback.className="error";
    return;
}
if(!emailPattern.test(email)){
    feedback.textContent="Please enter a valid email address.";
    feedback.className="error";
    return;
}
feedback.textContent="Thankyou! Your message has been sent.";
feedback.className="success";
form.reset();
});

// LOCAL STORAGE
let count=localStorage.getItem("visitCount");

count=count?parseInt(count)+1:1;

localStorage.setItem("visitCount",count);

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById('count').textContent=count;
});

// TOGGLE LIGHT/DARK MODE
document.addEventListener("DOMContentLoaded",()=>{
    const toggleButton=document.getElementById("theme-toggle");
    const currentTheme=localStorage.getItem("theme");


if(currentTheme==="dark"){
    document.body.classList.add("dark-mode");

}
toggleButton.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    const newTheme=document.body.classList.contains("dark-mode")? "dark":"light";
    localStorage.setItem("theme",newTheme);
});
});

// BACK TO TOP BUTTON

window.addEventListener("scroll",()=>{
    const btn=document.getElementById("back-to-top");
    if(window.scrollY>100){
        btn.style.display="block";
    }
    else{
        btn.style.display="none";
    }

});

document.getElementById("back-to-top").addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});