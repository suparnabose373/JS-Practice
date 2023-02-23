var inputTxt = document.querySelector('.container input[type="text"]')
var inputVal = ['Death Note', 'Tokyo Ghoul', 'Tokyo Ghoul:re', 'Tokyo Ghoul:re2', 'Attack on Titan', 'Castlevania', 'One Punch Man', 'Naruto', 'Dragon Ball Z', 'Pokemon', 'Doraemon','Fullmetal Alchemist Brotherhood', 'Neon Genesis Evangelion', 'Cowboy Bebop', 'Kochikame']
var list = document.querySelector('.container #list')

inputTxt.addEventListener('input', function(e) {
    var li = document.querySelector(li)
    while(list.hasChildNodes()){
        list.removeChild(list.firstChild)
    }
    inputVal.forEach(eachVal => {
        if(e.target.value && eachVal.toLowerCase().includes(e.target.value.toLowerCase())){
            var li = document.createElement('li')
            var index = eachVal.toLowerCase().indexOf(e.target.value.toLowerCase())
            li.innerHTML = eachVal.substring(0,index)+'<b>'+ eachVal.substring(index,index+e.target.value.length) +'</b>' + eachVal.substring(index+e.target.value.length, eachVal.length)
            list.appendChild(li)
        }
    })
})