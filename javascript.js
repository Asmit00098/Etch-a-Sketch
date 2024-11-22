
btn=document.createElement("button");
btn.textContent="Generate Grid";
document.querySelector("body").appendChild(btn);

function createGrid(a,b){
    
    container=document.createElement("div");
    container.className="container"
    document.body.appendChild(container);
    for(let i=0;i<a;i++)
        {
            row=document.createElement("div");
            row.className="row";
           
            for(let j=0;j<b;j++)
            {
                box=document.createElement("div");
                box.className="box";
                row.appendChild(box);
            }
            
            container.appendChild(row);
        }
        
boxes=document.querySelectorAll(".box");
for(box of boxes){
box.addEventListener("mouseover",function(e)
{
    e.target.style.backgroundColor="black";
});

                }
        
}


createGrid(8,8);






btn.addEventListener("click",function(){
document.body.removeChild(document.querySelector(".container"));
let a=prompt("Enter the height");
let b=prompt("Enter the width");
if(a>100||b>100)
{
    alert("Out of range");
    createGrid(8,8);
}
else{
createGrid(a,b);
}

});


