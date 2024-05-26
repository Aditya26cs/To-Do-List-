const input = document.getElementById("input-box")

const listContainer = document.getElementById('list-container')

function addTask(){
    if(input == ''){
        alert('enter the task')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

    }

    input.value= '';
    savaData();
}


listContainer.addEventListener("click" ,  function(e){

    // The tagName property returns the tag name in uppercase letters, regardless of how it appears in the HTML source code. For example, for an <li> element, tagName will return "LI".    

    // e.target refers to the element that triggered the event (i.e., the element that was clicked).
    // e.target.tagName accesses the tagName property of that element, giving you the name of the HTML tag of the clicked element   

if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    savaData();
}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    savaData();
}

},false)    

function savaData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML= localStorage.getItem("data");
}

showData()