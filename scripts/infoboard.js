let sidebar = document.getElementById("sidebar");
let recentFiles = document.getElementById("recentFiles");


function collapse(element){
 
  
  
 
  Array.from(element.parentNode.querySelector("ul").childNodes).forEach((childNode) => {
    
    


    if(childNode.style.display == "none"){
     childNode.style.display = "block";
    } else childNode.style.display = "none";
  



  });

}





fetch("JSON/recentFiles.json")
  .then(response => response.json())
  .then(json => {
    function buildFiles(parent, json) {
        console.log(json)
        let n = 1;
        json.forEach((element) => {

        if(n < 6){
          let newEntry = document.createElement("li")
           
            newEntry.innerHTML = `<font size = 1px><a href="${element.path}" download>${element.name}</a></font>`
            newEntry.classList.add("infoFile");
          

            parent.appendChild(newEntry);
            n++;
          
     } });
      }

    
        buildFiles(recentFiles, json, 1);} );
        


       