let header = document.querySelector("h1");
let button = document.querySelector("button");
let button2 = document.querySelector("button2")
let img = document.querySelector("img");
let img2 = document.querySelector("img2")

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does?
// - What do you think .src does?


// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = "🤯 Dook ah Gif(Levi)";
    img.src = "https://media4.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif";
});

button2.addEventListener("click", function() {
    header.innerHTML = "🤯 Does Ts work? (Levi)";
    img.src = "https://tenor.com/efXVFbcwWnb.gif";
});


