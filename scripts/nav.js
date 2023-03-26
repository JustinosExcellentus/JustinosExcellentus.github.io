let imgHTML = document.getElementById("logo");
let listHTML = document.getElementById("navul");
let navList = [["studium.html", "Studium"],["web_simulation.html", "Web-Simulationen"],["projects.html", "Projekte"],["contact.html", "Kontakt"]];




function buildNavList(parentImg, parentLinks){


        

        for (var paths of navList) {
         
            let newEntry = document.createElement("li");
            newEntry.innerHTML =`<font size = 3px><a href="${paths[0]}">${paths[1]}</a></font>`
            parentLinks.appendChild(newEntry);
            

        }

        let img = document.createElement("div");
        img.setAttribute("align", "left");
        img.innerHTML = `<a href = "index.html"> <img id= "imageLogo" src= "images/logo_2.png"></a></div>`;
       
        parentImg.appendChild(img);
   

     

  
        
       
}

      buildNavList(imgHTML, listHTML);
    
