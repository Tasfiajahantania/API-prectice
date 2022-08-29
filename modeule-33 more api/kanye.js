// function kanye() {
//     fetch('https://api.kanye.rest')
//         .then(res => res.json())
//     .then(data=> quote(data))
// }

// function quote(data) {
//     const sec = document.getElementById('kan');
//     sec.innerText = quote.data;
// }

const quote = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
    .then(data=> quotes(data))
}

const quotes = data => {
    const kan = document.getElementById('kan');
    console.log(data);
    kan.innerText = data.quote;
}