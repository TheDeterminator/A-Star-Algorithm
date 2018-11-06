function setup() {
    createCanvas(400, 400)
    console.log(A*)

    // Grid cell size
    w = width / cols
    h = height / rows

    // Making a 2D array
    for (let i =0; i< cols; i++)
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

    // All neighbors
    for (let i=0; i<cols; i++)
    {
	for (let j=0; j<rows; j++)
	{
	    grid[i][j].addNeighbors(grid)
	}
    }
    
    // Start and end
    start = grid[0][0]
    end = grid[cols-1][rows-1]
    start.wall = false
    end.wall = false

    // openSet starts with beginning only
    openSet.push(start)
}
