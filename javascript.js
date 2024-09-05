let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let title = document.getElementById("title");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let contact = document.getElementById("contact");



arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};

function setLanugage(getLanuage){
    if(getLanuage === "arabic"){
        title.innerHTML = "مبرمج أدم";
text1.innerHTML = "تعلم HTML/CSS/JS";
text2.innerHTML = "معلومات عنا";
text3.innerHTML = "تعلم لغات البرمجة الاساسية";
contact.innerHTML = "تواصل معنا ";


 }else if(getLanuage ==="english"){
        title.innerHTML = "Coder Adam";
        text1.innerHTML = "Learn HTML/CSS/JS";
        text2.innerHTML = "about us";
text3.innerHTML = "Learn HTML/CSS/JS";
contact.innerHTML = " contact ";
}
}












