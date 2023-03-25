let imgHTML = document.getElementById("logo");
let listHTML = document.getElementById("navul");
let navList = [["notizen.html", "Notizen"],["klausur.html", "Klausuren"],["web_simulation.html", "Web-Simulationen"],["projects.html", "Projekte"],["contact.html", "Kontakt"]];


console.log(imgHTML)
console.log(listHTML)


function buildNavList(parentImg, parentLinks){


        

        for (var paths of navList) {
            console.log(paths[1]);
            let newEntry = document.createElement("li");
            newEntry.innerHTML =`<font size = 3px><a href="${paths[0]}">${paths[1]}</a></font>`
            parentLinks.appendChild(newEntry);
            

        }

        let img = document.createElement("div");
        img.setAttribute("align", "left");
        img.innerHTML = `<a href = "index.html"> <img id= "imageLogo" src= "images/logo_2.png"></a></div>`;
        console.log(img.innerHTML);
        parentImg.appendChild(img);
   

     

  
        
       
}

      buildNavList(imgHTML, listHTML);
    
