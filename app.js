//https://icanhazdadjoke.com/api

const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateDadJoke);

generateDadJoke();

//using aysnc/await
async function generateDadJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const responseData = await fetch("https://icanhazdadjoke.com/", config);
  const data = await responseData.json();
  jokeEl.innerHTML = data.joke;
}

//using .then()
// function generateDadJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
