//Avvailable destinations
const waypoints = [
    "Drene's house", "Diala's hotel", "Will's office", "Samuel's station", "rapixar's palace", "Post-office", "Governor's office", "street shop", "Market"
];

//road networks/routes
function buildGraph(edges){
    let graph = Object.create(null);
    function addEdge(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        } else {
            graph[from]
            .push(to);
        }
    }
    for (let[from, to] of edges.map(r =>("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
const waypointGraph = buildGraph(waypoints);