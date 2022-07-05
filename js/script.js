$(document).ready(function() {

    // menu top scroll fixed  -----------------------
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 600) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up  -----------------------
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });
    
    // toggle menu/navbar -----------------------
    const btnMobile = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    function toggleMenu() {
        
        if(menu.classList.contains('active') == true){
            menu.classList.remove('active')
        }else{
            menu.classList.add('active')
        }
    }

    function toggleItem() {
        if(menu.classList.contains('active') == true){
            menu.classList.remove('active')
        }
    }
    
    btnMobile.addEventListener('click', toggleMenu);
    menu.addEventListener('click', toggleItem)

    // typing animated -----------------------
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "HTML", "CSS", "Javascript", "SASS", "Node.JS", "MongoDB", "Vue.JS"],
        typeSpeed: 100,
        backSpeed: 60,
        cursorChar: '_',
        loop: true
        
    });

    // carousel -----------------------
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // animate bars -----------------------
    const html = document.querySelector('.html');
    const css = document.querySelector('.css');
    const sass = document.querySelector('.sass');
    const js = document.querySelector('.js');
    const vue = document.querySelector('.vue');
    const node = document.querySelector('.node');
    const db = document.querySelector('.db');
    const sql = document.querySelector('.sql');

    setInterval(function animeBars() {
        html.style.animation = 'fill1 6s linear infinite';
        css.style.animation = 'fill1 6s linear infinite';
        sass.style.animation = 'fill1 6s linear infinite';
    }, 8000)

    setInterval(function animeBars() {
        js.style.animation = 'fill2 5s linear infinite';
    }, 7000)

    setInterval(function animeBars() {
        vue.style.animation = 'fill3 8s linear infinite';
        node.style.animation = 'fill3 8s linear infinite';
        db.style.animation = 'fill3 8s linear infinite';
    }, 10000)

    setInterval(function animeBars() {
        sql.style.animation = 'fill4 9s linear infinite';
    }, 11000)




    // send mail form -----------------------

    var form = document.getElementById("ac-form");
    var status = document.getElementById("form-status");
    var btnSubmit = document.querySelector('.btn-submit')
    var msgStatus = document.querySelector('#msg-status')

    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        msgStatus.classList.add('sucess')  
        status.innerHTML = "Obrigado pelo contato!";
        form.reset()
      }).catch(error => {
        msgStatus.classList.remove('sucess')
        status.innerHTML = "Houver algum erro ao enviar sua mensagem!"
      });
    }
    form.addEventListener("submit", handleSubmit)
    
    // remove msg ----------------------- 
    function limpar() {
        setTimeout(function(){ 
            var msg = document.querySelector("#form-status");
            msg.parentNode.removeChild(msg);  
            msgStatus.classList.remove('sucess') 
        }, 8000);
    }
    btnSubmit.addEventListener('click', limpar)
        
})


