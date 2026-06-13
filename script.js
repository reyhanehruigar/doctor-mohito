const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

document.getElementById("yesBtn").addEventListener("click", () => {

    document.body.innerHTML = `
    <div style="
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    flex-direction:column;
    text-align:center;
    background:linear-gradient(135deg,#ffd6e7,#ffe8f3);
    font-family:Arial">

    <h1>🎉💕 Excellent choice, Doctor. 😏🍹</h1>

    <h2>Now let's schedule it.</h2>

    <p>Please choose a day and time for our mohito 🍹✨</p>

    <a href="https://calendly.com/raysa-rg1611/mohitogambling"
       style="
       background:#ff4f8b;
       color:white;
       text-decoration:none;
       padding:15px 30px;
       border-radius:50px;
       font-size:20px;">
       Pick a Date 💕
    </a>

    </div>`;
});

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize =
        (20 + Math.random()*30) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

},400);