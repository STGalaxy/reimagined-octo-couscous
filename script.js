// Cuộn mượt khi bấm menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Hiệu ứng chào
console.log("Chào mừng bạn đến với website giới thiệu Việt Nam 🇻🇳");
