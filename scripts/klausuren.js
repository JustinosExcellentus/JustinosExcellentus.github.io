let body = document.getElementById("notizenBody");


function collapse(element){
 
  
  
 
  Array.from(element.parentNode.querySelector("ul").childNodes).forEach((childNode) => {
    
    


    if(childNode.style.display == "none"){
     childNode.style.display = "block";
    } else childNode.style.display = "none";
  



  });

}





fetch("JSON/klausurenStructure.json")
  .then(response => response.json())
  .then(json => {
    function buildList(parent, json, n) {
        json.forEach((element) => {
          let newEntry = document.createElement("li")
          if(element.typ === "file") {
            newEntry.classList.add("file");
            newEntry.innerHTML = `<font size = 3px><a href="${element.path}" download>${element.name}</a></font>`
            if(n!=1){
              newEntry.style.display = "none";
            }
           
          
            parent.appendChild(newEntry);
          } else if(element.typ === "directory") {
            newEntry.classList.add("directory")
            newEntry.innerHTML = "<button type = 'button' onclick='collapse(this)'><font size = 4px>" + element.name + "</font></button>";
            if(n!=1){
              newEntry.style.display = "none";
            }
           
            
            
           
            parent.appendChild(newEntry);
           
            let newParent = document.createElement("ul")
            newEntry.appendChild(newParent)
           
            
            buildList(newParent, element.elemente, n+1);
          
           
          }
        });
      }

    
        buildList(document.body, json.elemente, 1);} );
        


       