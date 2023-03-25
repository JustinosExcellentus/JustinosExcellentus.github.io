
let body = document.getElementById("notizenBody");




fetch("JSON/klausurenStructure.json")
  .then(response => response.json())
  .then(json => {
    function buildList(parent, json) {
        json.forEach((element) => {
          let newEntry = document.createElement("li");
          if(element.typ === "file") {
            newEntry.classList.add("file");
            newEntry.innerHTML = `<font size = 3px><a href="${element.path}" download>${element.name}</a></font>`
            parent.appendChild(newEntry)
          } else if(element.typ === "directory") {
            newEntry.classList.add("directory")
            newEntry.innerHTML = "<font size = 4px>" + element.name + "</font>";
            parent.appendChild(newEntry)
            let newParent = document.createElement("ul")
            newEntry.appendChild(newParent)
            buildList(newParent, element.elemente);
          }
        });
      }

       console.log(json);
       console.log(document.body)
    
        buildList(document.body, json.elemente);} );
