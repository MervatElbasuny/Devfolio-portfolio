window.onscroll = () => {scrollNavbar()};
scrollNavbar = () => {
    const navBar = document.getElementById("navBar");
    if(document.documentElement.scrollTop >100){
        navBar.classList.add("bg-black")
    }else{
        navBar.classList.remove("bg-black")
    }
}
