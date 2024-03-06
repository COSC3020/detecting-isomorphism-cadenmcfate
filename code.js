function are_isomorphic(graph1, graph2) {
    /*
    Three checks of isomorphism:
    a) Same number of vertices
    b) Same number of edges
    c) Same number of vertices of given degree
    */

    //a)
    let V1 = graph1[0];
    let V2 = graph2[0];
    if (V1.length != V2.length) return false;

    //b)
    let E1 = graph1[1];
    let E2 = graph2[1];
    if (E1.length != E2.length) return false;

    //c)
    let degrees1 = graphToDegreeList(graph1); //degrees1[i] contains the number of vertices in graph1 with degree i
    let degrees2 = graphToDegreeList(graph2); 
    for (let i = 0; i < degrees1.length; i++) {
        if (degrees1[i] != degrees2[i]) return false;
    }
    return true;
}

function graphToDegreeList(graph) {
    let V = graph[0];
    let E = graph[1];
    let degrees = [];
    let adjList = [];
    let max = 0;
    for (let i = 0; i < E.length; i++) {
        max = Math.max(max, E[i][0], E[i][1]);
    }
    for (let i = 0; i <= max; i++) adjList[i] = [];
    for (let i = 0; i < E.length; i++) {
        let edge = E[i];
        adjList[edge[0]].push(edge[1]);
    }
    for (let i = 0; i < adjList.length; i++) {
        let deg = adjList[i].length;
        if (deg == 0) continue;
        if (degrees[deg] == undefined) degrees[deg] = 1;
        else degrees[deg]++;
    }
    return degrees;
}