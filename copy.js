let newlink = document.getElementById("shortlink");
let coptButton = document.getElementById("copy");


coptButton.onclick = ()=>{


    newlink.select();

    window.navigator.clipboard.writeText(newlink.value);
}