var btn = document.getElementById('likeBtn')
var countDiv = document.querySelector('#likeNo')
var count = 0
btn.addEventListener('click', function(e) {
    count+=1
    countDiv.innerHTML = count
})

var starDiv = document.querySelector('#starRating')
var stars = Array.from(document.querySelectorAll('#starRating .fa.fa-star'))

var ratingCount = document.querySelector('.ratingCount')

stars.forEach((star, index) => {
    star.addEventListener('click', function(e) {
        ratingCount.innerHTML = index+1
    })

    star.addEventListener('mouseover', function(e) {
        stars.forEach((eachStar, index) => {
            if(index <= stars.indexOf(e.target))
                eachStar.classList.add('checked')
            else
                eachStar.classList.remove('checked')
        })
    })

    star.addEventListener('mouseout', function(e) {
        stars.forEach((eachStar, index) => {
            // not clicked; hover highlight and remove on out
            eachStar.classList.remove('checked')
            // clicked and 5; hover 3.. 5
            if(ratingCount.innerHTML && index < ratingCount.innerHTML){
                eachStar.classList.add('checked')
            }
            // clicked and 3; hover 5.. 3
        })
    })
})