// add new students

var btnSubmitChanges = document.getElementById("submit-changes");
var inputChangesName = document.getElementById("input-chanhes-name");
var inputChangesRating = document.getElementById("input-chanhes-rating");

btnSubmitChanges.addEventListener('click', function (e) {
    e.preventDefault();

    
    if (inputChangesName.value !== "" && inputChangesRating !=="") {
        const newTr = document.createElement('tr')
        document.getElementById('tbody').append(newTr)
        const newName = document.createElement('td')
        newName.innerText = inputChangesName.value
        newName.setAttribute("class", "table-primary");
        newTr.append(newName)

        const newRating = document.createElement('td')
        newRating.innerText = inputChangesRating.value
        newTr.append(newRating)
     
    } else {
      const error = document.getElementById("error");
      error.setAttribute("class", "text-danger mt-3");
      error.innerText = "Name & raiting can't be empty!";
    } 
  
    inputChangesName.value = ""
    inputChangesRating.value = ""
   
})

// check student

var searchBtn = document.getElementById("search-btn");
var studentArr = document.getElementById('table').getElementsByTagName('tr')
var messagePlace = document.getElementById('message')


searchBtn.addEventListener('click', function () {
    var studentName = document.getElementById("search-student");
    
    if (studentName.value !== '') {
        for (var i = 0; i < studentArr.length; i++) {
          var includeName = studentArr[i].textContent;

          if (includeName.includes(studentName.value)) {
            newMessage = document.createElement("h4");
            newMessage.innerText = "We have this student:)";
            messagePlace.append(newMessage);
          } else {
              
          }
        }  
 
    } else {
        
    }

studentName.value = ''
 
})



