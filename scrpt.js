
 //nav-menu slider
 const toggleBtn=document.getElementsByClassName("toggle-btn")[0]
 const navmenu=document.getElementsByClassName("nav-menu")[0] 

 toggleBtn.addEventListener("click",()=>
 {
     navmenu.classList.toggle("active")
 })


    // code for login pop up -----
    const loginbtnEl=document.querySelector(".loginbtn")
    const bodyEl=document.querySelector(".body-blur");
    const popupcontainerEl=document.querySelector(".popup-container");
    const closeiconEl=document.querySelector(".close-icon")
    const containerEl=document.querySelector(".container")
    const blurdivEl=document.querySelector(".blur-div")
    const flowhdnsEl=document.querySelector(".blur-body")
    

    loginbtnEl.addEventListener("click",()=>
    {
       popupcontainerEl.classList.remove("active");
       containerEl.classList.add("active");
       blurdivEl.classList.add("active");
       navmenu.classList.toggle("active")
       flowhdnsEl.classList.add("active")
        
    });

    closeiconEl.addEventListener("click",()=>
    {
        popupcontainerEl.classList.add("active")
        containerEl.classList.remove("active");
        blurdivEl.classList.remove("active");
        flowhdnsEl.classList.remove("active")
    })