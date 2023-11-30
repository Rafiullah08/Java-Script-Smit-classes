function addinput(){
    var carddiv = document.createElement("div")
    carddiv.className = "card"
    var cardheader = document.createElement("div")
    cardheader.className = "card-header"
carddiv.append(cardheader)
var cardheadervalue = document.createTextNode("Note")
cardheader.append(cardheadervalue)
var cardbody = document.createElement("div")
cardbody.className = "card-body"
carddiv.append(cardbody)
var cardtitle = document.createElement("div")
cardtitle.className = "card-title"
cardbody.append(cardtitle)
var cardtitlevalue = document.createTextNode(inputfield.value)
cardtitle.append(cardtitlevalue)
var editbutton = document.createElement("button")
editbutton.className = "btn btn-primary ms-10"
editbutton.textContent = "EDIT"
editbutton. setAttribute("onclick","editTodolist(this)")
cardbody.append(editbutton)
var deleteButton = document.createElement("button")
deleteButton.innerHTML= "DELETE"
deleteButton.className = "btn btn-danger"
// buttonContainer.append(deleteButton)

deleteButton.setAttribute("onclick", "deleteTodo(this)")
cardbody.append(deleteButton)


var parent = document.getElementById("parent")
parent.append(carddiv)
carddiv.style.width= "50%"
carddiv.style.marginLeft = "325px"
carddiv.style.marginTop= "10px"

console.log(carddiv)
}

// function editbutton(){
//     var editbtn= document.getElementById(this)
//     editbtn = ""
// }


function deleteAll(ele){
    parent.innerHTML = ""
    }
    
parent.append(card1)
    inputfield.value = ""
    



function deleteTodo(ele){
ele.parentNode.parentNode.remove()
}

