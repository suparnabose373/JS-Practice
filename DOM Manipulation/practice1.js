// var titles = document.getElementsByTagName('li')
// var i = 1;
// Array.from(titles).forEach(function(item) {
//     // console.log(item)
//     var names = document.querySelector(`#book-list li:nth-child(${i}) .name`).innerHTML
//     console.log(names)
//     i+=1
// })
//
// OR
// var books = document.querySelectorAll('#book-list li .name')
// books.forEach(function(book) {
//     console.log(book.innerHTML)
// })


//2nd li
// console.log(document.querySelectorAll('#book-list li:nth-child(2) .name'))


//Delete onClick event
//naive method: after adding new names, the delete button won't work for them
// var delBtn = document.querySelectorAll('#book-list li .delete')
// delBtn.forEach(function(book) {
//     book.addEventListener('click', function(e) {
//         var li = book.parentElement
//         li.parentElement.removeChild(li)
//     })
// })
//
//Using event bubbling
//Create a event listener which will listen to all the elements under ul
var ul = document.querySelector('#book-list ul')
ul.addEventListener('click', function(e) {
    if(e.target.className === 'delete'){
        var li = e.target.parentElement
        ul.removeChild(li)
    }
})

//a href
var link = document.querySelector('#page-banner a')
link.addEventListener('click', function(e) {
    e.preventDefault()
    console.log(e.target.textContent,'was prevented')
})

// add button onclick 
var form = document.forms['add-book']
form.addEventListener('submit', function(e) {
    e.preventDefault()  //so that page doesn't refresh
    var li = document.createElement('li')
    var bookName = document.createElement('span')
    var deleteBtn = document.createElement('span')
    bookName.classList.add('name')
    deleteBtn.classList.add('delete')
    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    ul.appendChild(li)
    bookName.innerHTML = form.querySelector('input[type="text"]').value
    deleteBtn.innerHTML = 'delete'
})

// hide checkbox event
var hideBox = document.querySelector('#add-book #hide')
hideBox.addEventListener('change',function(e) {
    if(hideBox.checked){
        ul.style.display = 'none'
    }
    else {
        ul.style.display = 'block'
    }
})


//search box
var searchBox = document.forms['search-books']
searchBox.addEventListener('input', function(e) {
    var value = searchBox.querySelector('input[type="text"]').value.toLowerCase()
    var books = document.querySelectorAll('#book-list li .name')
    books.forEach((item) => {
        var titles = item.textContent.toLowerCase()
        if(!titles.includes(value)){
            item.parentElement.style.display = 'none'
        }
        else {
            item.parentElement.style.display = 'block'
        }
    })
})