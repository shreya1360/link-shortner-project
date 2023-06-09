let btn = document.getElementById("shorten");
btn.addEventListener('click', short);

 async function short(){

  
    let longlink = document.getElementById("longlink").value; 
    let shortlink = document.getElementById("shortlink") ;

    let link = "https://api.shrtco.de/v2/shorten?url=" + longlink;

    console.log(link);

    const result = await fetch(link); 
    console.log(result.json.toString);

    const data = await result.json();

  shortlink.value =  data.result.short_link2;

   l
}