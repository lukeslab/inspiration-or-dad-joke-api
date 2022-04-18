document.querySelector(".dad").addEventListener("click", e=>{
  const headers = {Accept: "application/json"}
  fetch("https://icanhazdadjoke.com/", {headers:headers})
  .then(res => res.json())
  .then(data => {
    displayQuote(data)
  })
  // .catch(err => `Error ${err}`)
})

document.querySelector(".inspiration").addEventListener("click", e=>{
  fetch("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    displayQuote({author:data.quoteAuthor, quote:data.quoteText})
  })
  .catch(err => `Error ${err}`)
})


function displayQuote(data){
  const p = document.querySelector('p');
  p.innerText = data?.joke ? data.joke : `${data.quote} - ${data.author}`
  // p.innerText = data?.joke ? data.joke:"mptsire uet";
}
