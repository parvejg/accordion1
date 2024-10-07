const questions = document.querySelector(".question");
const solution = document.querySelector(".solution");
const btnIcon = document.querySelector(".icon");
const accordions = document.querySelectorAll(".accordion")
accordions.forEach(accordion =>{
   const solution = accordion.querySelector(".solution")
  const btnIcon = accordion.querySelector(".icon");
const questions = accordion.querySelector(".question");

questions.addEventListener("click", ()=>{
   solution.classList.toggle("active")
btnIcon.classList.toggle("active")

})
})