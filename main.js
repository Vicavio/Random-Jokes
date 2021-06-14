const newJoke = document.getElementById('newJoke');
const url = "https://icanhazdadjoke.com/";


const anotherJoke = async () => {
	const urlToFetch = `${url}`;
        try {
          const response = await fetch(urlToFetch);
          if(response.ok){
            console.log(response);
            return response;
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            document.getElementById('joke').innerHTML = jsonResponse.response;
          }
        } catch(error) {
          console.log(error);
      }
};
newJoke.addEventListener('click', anotherJoke);