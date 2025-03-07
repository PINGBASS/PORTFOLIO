const p_ex1 = document.querySelector(".parallax_txt1");
const p_ex2 = document.querySelector(".parallax_txt2");
const p_ex3 = document.querySelector(".parallax_txt3");
const p_ex4 = document.querySelector(".parallax_txt4");
const p_ex5 = document.querySelector(".parallax_txt5");
let timer;

window.scroll({top : 0, behavior: 'smooth'});


document.addEventListener('scroll', (e) =>{

    if(!timer){

        timer = setTimeout(()=>{
            timer = null;

            let top = document.documentElement.scrollTop;
            console.log(top)
            if(window.scrollY < 10){
                p_ex1.style.fontSize = '50px';
            }
            if(window.scrollY > 10){
                p_ex1.style.fontSize = '70px';
            }
            if(window.scrollY > 130){
                p_ex1.style.fontSize = '90px';
            }
            if(window.scrollY > 250){
                p_ex1.style.fontSize = '110px';
            }
            if(window.scrollY > 390){
                p_ex1.style.fontSize = '130px';
                p_ex1.style.transform = 'translate(-50%, -50%) rotate(0deg)';
                p_ex1.style.top = '50%';
                p_ex1.style.left = '50%';
            }
            if(window.scrollY < 500){
                p_ex2.style.left = '-100%';
            }
            if(window.scrollY > 500){
                p_ex2.style.left = '10%';
            }
            if(window.scrollY > 1000){
                p_ex1.style.transition = '0.22s ease';
                p_ex1.style.fontSize = '80px';
                p_ex1.style.transform = 'translate(-50%, -50%) rotate(90deg)';
                p_ex1.style.top = '60%';
                p_ex1.style.left = '50%';
            }
            if(window.scrollY < 1200){
                p_ex3.style.right = '-70%';
            }
            if(window.scrollY > 1200){
                p_ex3.style.right = '10%';
            }
            if(window.scrollY > 1300){
                p_ex1.style.transition = '0.7s ease';
                p_ex1.style.transform = 'translate(-50%, -50%) rotate(90deg)';
                p_ex1.style.left = '5%';
            }
            if(window.scrollY < 2100){
                p_ex4.style.opacity = '0';
                p_ex4.style.left = '65%';
            }
            if(window.scrollY > 2100){
                p_ex4.style.opacity = '1';
                p_ex4.style.left = '50%';
            }
            if(window.scrollY > 2600){
                p_ex5.style.opacity = '1';
                p_ex5.style.top = '50%';
            }
          if(window.scrollY < 2600){
                p_ex5.style.opacity = '0';
                p_ex5.style.top = '100%';
            }
            
        }, 100);

    }
});



