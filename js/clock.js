const time = document.querySelector(".todo_time_column span");

function clock() {
  const date = new Date();
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());

  hours = hours.padStart(2, "0");
  minutes = minutes.padStart(2, "0");
  time.innerText = `${hours}:${minutes}`;
}
clock();
setInterval(clock, 1000);
