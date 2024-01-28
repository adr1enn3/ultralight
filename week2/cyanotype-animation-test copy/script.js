let current_time = new Date();
// let curent_month = current_time.getMonth();
// console.log(curent_month);
let formatted_time = current_time.toLocaleString("en-US",{dateStyle: "short", timeStyle: "short"});

window.onload = (event) => {
  console.log("page is fully loaded");
  let container = document.getElementById('now');
  container.innerText = formatted_time;
};