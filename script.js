const games=[{title:"Minecraft",folder:"minecraft"},{title:"Geometry Dash",folder:"geometry-dash"},{title:"Hollow Knight",folder:"hollow-knight"},{title :"Escape road",folder:"escape-road"}];
const grid=document.getElementById("gameGrid");const input=document.getElementById("searchInput");
function render(list){grid.innerHTML="";list.forEach(g=>{let d=document.createElement("div");d.innerHTML=`<h3>${g.title}</h3><a href="game.html?folder=${g.folder}">Play</a>`;grid.appendChild(d);});}
input.oninput=()=>{let v=input.value.toLowerCase();render(games.filter(g=>g.title.toLowerCase().includes(v)));};
render(games);
