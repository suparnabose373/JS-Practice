var imageList = []

imageList.push('https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/12/20/Pictures/_0745b0ec-231b-11ea-8c10-7db3e225203f.jpg')
imageList.push('https://ichef.bbci.co.uk/news/976/cpsprodpb/FACE/production/_125860246_whatsubject.jpg')
imageList.push('https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1300&quality=85&fit=max&s=51a75c27ec4faea26c62478e9bc173c6')
var mainContainer = document.querySelector('.Containers')
var imgTag = document.querySelector('.Containers .imgs')
var i = 0

document.addEventListener("DOMContentLoaded", function(e){
    addImgtoDoc()
})

// Next onClick
var next = document.querySelector('.Containers #next')
next.addEventListener('click',function(e) {
    i+=1
    if(i > 2)
        i=0
    addImgtoDoc()
})

// Prev onClick
var prev = document.querySelector('.Containers #prev')
prev.addEventListener('click',function(e) {
    i-=1
    if(i < 0)
        i=2
    addImgtoDoc()
})

function addImgtoDoc(){
    imgTag.src=imageList[i]
    imgTag.id='img'+i
    mainContainer.appendChild(imgTag)
}