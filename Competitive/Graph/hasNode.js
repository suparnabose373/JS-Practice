const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

function hasNode(graph, source, dest) {
    var stack = [source]
    while(stack.length > 0) {
        var current = stack.pop()
        for(var node of graph[current]) {
            if(node === dest)   return true
            stack.push(node)
        }
    }
    return false
}

console.log(hasNode(graph, 'f', 'k'))