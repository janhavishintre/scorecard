let homeGoal = 0;
let guestGoal = 0;

const homeG = document.getElementById("home-goal");
const guestG = document.getElementById("guest-goal");
const homeBtn = document.getElementById("homeBtn");
const guestBtn = document.getElementById("guestBtn");
const resetBtn= document.getElementById("reset-Btn")

homeBtn.addEventListener("click", function () {

   homeGoal++;

        homeG.textContent =homeGoal;
});
guestBtn.addEventListener("click",function()
{
    guestGoal++;

     guestG.textContent = guestGoal;

});
 resetBtn.addEventListener("click", function () {
    homeGoal=0 ;
    guestGoal=0;
    guestG.textContent = guestGoal;
     homeG.textContent =homeGoal;
});
    

