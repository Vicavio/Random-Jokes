const newJoke = document.getElementById("newJoke");
const url = "https://icanhazdadjoke.com/";


const anotherJoke = async () => {

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      document.getElementById("joke").innerHTML = jsonResponse.joke;
    }
  } catch (error) {
    console.log(error);
  }
};

newJoke.addEventListener("click", anotherJoke);


