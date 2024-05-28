window.addEventListener('load', () => {
  const quote = document.querySelector('.wrapper-quote');

  const url =
    'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2eeeb8b624mshf25c31069db782cp11f31cjsnc71af4f14334',
      'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
    },
  };

  const sendRequest = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      let hasil = [];
      for (let i = 0; i < result.length; i++) {
        console.log(result[i].id);
        const wholeContent = `
                            <div class='quote'>
                            <p>${result[i].text}</p>
                            <h3>${result[i].author} <strong>in</strong> <span>${result[i].category}</span></h3>
                            </div>
                            `;
        quote.innerHTML += wholeContent;
      }
    } catch (error) {
      console.log(error);
    }
  };

  sendRequest();
});
