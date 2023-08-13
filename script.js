const btn = document.getElementById("get");

function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu");
    xhr.onload = function() {
        const result = JSON.parse(xhr.responseText);
        const div = document.getElementById("pikachu");
        div.innerHTML = ` <figure style="background-color: #E7C859; border-radius: 10px; border: 3px solid #D0B34A; margin:80px auto; display: block; width: 300px; height:400px; text-align: center; color: white; display: block;">
        <figcaption>${result.id}: ${result.name}</figcaption>
        <img src="${result.sprites["front_default"]}" alt="ini gambar" style="display: block; margin: auto;" width="300" height="300">
        <figcaption>type: ${result.types[0].type.name}</figcaption>
    </figure>`
    }
    xhr.send();
}

btn.addEventListener("click", () => {
    return getData();
})