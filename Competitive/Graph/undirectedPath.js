// Return boolean indicating if there is a path between a and b

var edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

function undirectedPath(edges, source, dest) {
    var graph = buildGraph(edges)
    var visited=[source]
    var stack=[source]
    while(stack.length > 0) {
        var current = stack.pop()
        for(var node of graph[current]) {
            if(node === dest)   return true
            if(!(visited.includes(node))) {
                stack.push(node)
                visited.push(node)
            }
        }
    }
    return false
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

console.log(undirectedPath(edges, 'j', 'm'))