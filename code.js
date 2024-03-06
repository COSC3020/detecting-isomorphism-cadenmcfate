function are_isomorphic(graph1, graph2) {
    // Property at play: Two graphs are isomorphic if and only if 
    // for some ordering of their vertices their adjacency matrices are identical
    //
    // Method: Try every permutaton of the vertices and see if the corresponding adjacency matrix works
    //
    // Graphs are of the form [ [list of vertices where vertices are such that 0 <= v < n], 
    // [list of edges, where [u,v] is an unweighted & undirected edge connecting u to v] ]

    if (graph1[0].length != graph2[0].length || graph1[1].length != graph2[1].length) return false;
    const MATRIX = undirectedGraphToAdjMatrix(graph1); //fix the first matrix and only change the second
    return permuteMatrix(MATRIX,graph2,0);
}

function permuteMatrix(MATRIX,graph,lo) { // loosely based on my brute-force-sort 'permSort' function.
    if (matrixEquality(MATRIX,undirectedGraphToAdjMatrix(graph))) return true;
    let V = graph[0];
    if (lo >= V.length-1) return false;
    for (let i = lo; i < V.length; i++) {
        if (i != lo) {
            swap(V,lo,i);
            graph[0] = V;
        }
        if (permuteMatrix(MATRIX,graph,lo+1)) return true;
        if (i != lo) {
            swap(V,lo,i);
            graph[0] = V;
        }
    }
    return false;
}
function swap(a,lo,i) {
    let tmp = a[lo];
    a[lo] = a[i];
    a[i] = tmp;
    return;
}

function undirectedGraphToAdjMatrix(graph) {
    let V = graph[0];
    let E = graph[1];
    let adjMatrix = [];
    if (V.length == 0) return adjMatrix;
    for (let i = 0; i < V.length; i++) { 
        adjMatrix[i] = [];
        for (let j = 0; j < V.length; j++) {
            adjMatrix[i][j] = 0;
        }
    }
    for (let i = 0; i < V.length; i++) {
        let vertex = V[i];
        for (let j = 0; j < E.length; j++) {
            let edge = E[j];
            if (edge.indexOf(vertex) == 0) {
                adjMatrix[i][V.indexOf(edge[1])] = 1;
                adjMatrix[V.indexOf(edge[1])][i] = 1;
            } else if (edge.indexOf(vertex) == 1) {
                adjMatrix[i][V.indexOf(edge[0])] = 1;
                adjMatrix[V.indexOf(edge[0])][i] = 1;
            }
        }
    }
    return adjMatrix;
}

function matrixEquality(m1,m2) {
    if (m1.length != m2.length) return false;
    for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[i].length; j++) {
            if (m1[i][j] != m2[i][j]) return false;
        }
    }
    return true;
}