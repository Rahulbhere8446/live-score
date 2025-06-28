// Dummy data (can be replaced with real API fetch)
let scores = [
  { teams: "India vs Australia", score: "India: 245/3 (40.2 overs)", status: "India needs 56 runs in 58 balls" },
  { teams: "India vs Australia", score: "India: 250/4 (42.0 overs)", status: "India needs 51 runs in 48 balls" },
  { teams: "India vs Australia", score: "India: 270/5 (45.3 overs)", status: "India needs 31 runs in 27 balls" },
  { teams: "India vs Australia", score: "India: 300/6 (50 overs)", status: "India won by 4 wickets" }
];

let index = 0;

function updateScore() {
  index = (index + 1) % scores.length;
  document.getElementById("teams").innerText = scores[index].teams;
  document.getElementById("score").innerText = scores[index].score;
  document.getElementById("status").innerText = "Status: " + scores[index].status;
}
