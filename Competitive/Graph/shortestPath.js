var edges = [
    ['a', 'w'],
    ['a', 'y'],
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v'],
]

var edges1 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

//Ittertively
// function shortestPath(edges, source, dest) {
//     var graph = buildGraph(edges)
//     var queue = [source]
//     var visited = [], shortestRoute = 100, routeCount = 0
//     while(queue.length > 0) {
//         var current = queue[0]
//         queue.shift()
//         routeCount += 1
//         console.log(routeCount)
//         for(var i=0; i<graph[current].length; i++) {
//             if(graph[current][i] === dest) {
//                 if(routeCount < shortestRoute)
//                     shortestRoute = routeCount
//                 routeCount = 0
//             }
//             if(!(visited.includes(graph[current][i]))) {
//                 queue.push(graph[current][i])
//                 visited.push(graph[current][i])
//             }
//         }
//         console.log(queue,shortestRoute)
//     }
//     return shortestRoute === 100 ? -1 : shortestRoute
// }

function shortestPath(edges, source, dest) {
    var graph = buildGraph(edges)
    console.log(graph)
    var queue = [[source, 0]]  //initially distance from source => source is 0
    var visited = []
    while(queue.length > 0) {
        var [node, distance] = queue.shift()
        console.log(node)
        for(var i=0; i<graph[node].length; i++) {
            if(!(visited.includes(graph[node][i]))) {
                queue.push([graph[node][i], distance+1])
                visited.push(graph[node][i])
            }
            if(graph[node][i] === dest) {
                console.log(graph[node][i])
                console.log(queue, visited, distance)
                return distance
            }
            
        }
    //     queue.shift()
    //     routeCount += 1
    //     console.log(routeCount)
    //     for(var i=0; i<graph[current].length; i++) {
    //         if(graph[current][i] === dest) {
    //             return routeCount
    //         }
    //         if(!(visited.includes(graph[current][i]))) {
    //             queue.push(graph[current][i])
    //             visited.push(graph[current][i])
    //         }
    //     }
    //     console.log(queue)
    }
    return -1
}

function buildGraph(edges) {
    var graphObj = {}
    for(var edge of edges) {
        var [a, b] = edge
        if(!(a in graphObj)) graphObj[a] = []
        if(!(b in graphObj)) graphObj[b] = []
        graphObj[a].push(b)
        graphObj[b].push(a)
    }
    return graphObj
}

console.log(shortestPath(edges, 'w', 'z'))
// console.log(shortestPath(edges1, 'i', 'o'))
