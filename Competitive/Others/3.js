// startNode = 500
// fromList = [100, 200, 300, 500, 900]
// toList =   [500, 900, 200, 300, 100]
// Output => 100

// Unidirection flow from one node to other. 1 to 1 relation between 2 arrays. 
// eg fromList[0] => toList[0]
// The above eg is a circular list


function getLastNode(startNode, fromList, toList) {
    var d, c = [];
    c.push(fromList[0]);
    c.push(toList[0])
    for(var i = 0; i<fromList.length; i++){
        console.log(fromList.indexOf(toList[i]))
        var index = fromList.indexOf(toList[i])
        c.push(toList[index]);
    }
    console.log(c,d);
    return d;
}

console.log(getLastNode(500, [100, 200, 300, 500, 900], [500, 900, 200, 300, 100]))