// An "educated" guess of the distance from a to b, the linear distance
function heuristic(a, b) {
    var distance = dist(a.i, a.j, b,i, b.j)
    return distance
}

function removeFromArray(array, element) {
    array.splice(indexOf(element), 1)
}

function setup() {
    createCanvas(400,400)
    console.log('A*, A-STAR')

    // Grid cell size
    w = width / cols
    h = height / rows

    var cols = 50
    var rows = 50

    var openSet =  []
    var closeSet = []
    
    // Start and end points
    var start, end

    // Width and height of each cell block
    var w, h

    // Traversal path (optimal or any?)
    var path = []

    // Create the grid (2D) Array
    var grid = new Array(cols)
    for (let i = 0; i<cols; i++)
    {
	grid[i] = new Array(rows)
    }

    for (let i=0; i<cols; i++)
    {
	for (let j=0; j<rows; j++)
	{
	    grid[i][j] = new Spot(i,j)
	}
    }

    for (let i=0; i<cols; i++)
    {
	for (let j=0; j<rows; j++)
	{
	    grid[i][j].addNeighbors(grid)
	}
    }

    // Define the start and end of where to travers
    start = grid[0][0]
    end = grid[cols-1][rows-1]
    start.isWall = false
    end.isWall = false

    // Add the starting node only to the openSet array
    openSet.push(start)
}

function draw() {
}
