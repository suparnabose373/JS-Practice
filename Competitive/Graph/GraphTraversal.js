const graph = {
    a: ['b', 'c'],
    b: ['e'],
    c: ['d'],
    d: ['f'],
    e: [],
    f: []
}

// Using array
// const breadthFirstSearch = (graph, source) => {
//     const queue = [ source ]
//     for(var i=0; i<Object.keys(graph).length; i++) {
//         var current = queue[0]
//         console.log(current)
//         queue.shift()
//         var j = 0
//         while(graph[current][j]){
//             queue.push(graph[current][j])
//             j+=1
//         }
//     }
// }


// has a node: src: f; dst: k
// DFS

const graph1 ={
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}
//recursively
// const hasNodeDFS = (graph, source, dest) => {
//     if(source === dest) return true
    
//     for(var i=0; i<graph[source].length; i++) {
//         if(hasNodeDFS(graph, graph[source][i], dest) === true)
//             return true
//     }
//     console.log(source, dest)
//     return false
// }

//BFS
//itteratively
const hasNodeBFS = (graph, source, dest) => {
    var queue = [source]
    for(var i=0; i<Object.keys(graph).length; i++) {
        var current = queue[0]
        console.log(queue)
        queue.shift()
        var j=0
        while(graph[current][j]) {
            if(graph[current][j] === dest)
                return true
            queue.push(graph[current][j])
            console.log(graph[current][j])
            j+=1
        }
        
    }
    return false
}

console.log(hasNodeBFS(graph1, 'f', 'k'))



// a => b => c => e => d => f 