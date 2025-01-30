let checked = document.getElementById("AcceptConditions");

let textOne = document.getElementById("change-1");
let textTwo = document.getElementById("change-2");
let textThree = document.getElementById("change-3");

function changeText() {
  if (checked.checked == true) {
    textOne.innerText = "$ 1999/m";
    textTwo.innerText = "$ 5999/m";
    textThree.innerText = "$ 4999/m";
  } else {
    textOne.innerText = "$ 199/m";
    textTwo.innerText = "$ 599/m";
    textThree.innerText = "$ 499/m";
  }
}

checked.addEventListener("change", changeText);

// Mobile Nav Bar

let openNav = document.getElementById("openBtn");
let closeNav = document.getElementById("closeBtn");
let mobileNav = document.getElementById("m-nav");

openNav.addEventListener("click", () => {
  openNav.style.display = "none";
  closeNav.style.display = "block";
  mobileNav.style.display = "block";
});

closeNav.addEventListener("click", () => {
  closeNav.style.display = "none";
  openNav.style.display = "block";
  mobileNav.style.display = "none";
});
