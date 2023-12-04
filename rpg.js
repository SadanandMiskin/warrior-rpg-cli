import {trees} from './gridobject.js'

class grid  {

    constructor (width, height, playerStartX=0 ,playerStartY= width-1){
        this.width = width
        this.height = height
        this.playerStartX = playerStartX
        this.playerStartY = playerStartY
        this.grid = []
        for(let row=0 ;row< width ; row++){
            let thisRow = []
            for(let col=0 ;col<height ; col++){
              
                thisRow.push(new trees())
            }
            this.grid.push(thisRow)
        }
        this.grid[width-1][0] = new trees('🤺' , 'character')
        this.grid[0][height-1] = new trees('🥅' , 'win')
        
        // console.log(this.grid)
        this.displayGrid()
        console.log('---------------------------------------')
        this.moveRight()
        this.displayGrid()
    }
         displayGrid() {
            for(let row = 0; row< this.width ;row++){
                for(let col = 0 ;col<this.height; col++){
                    process.stdout.write(this.grid[row][col].sprite)
                    process.stdout.write('\t')
                }
                process.stdout.write('\n')
            }
        }

        moveRight() {
            
            // this.grid[this.playerStartX][this.playerStartY] = '🐾'
            // this.grid[this.playerStartX+ 1][this.playerStartY] = '🤺'
            // this.displayGrid()

            if(this.playerStartX == this.height -1) {
                console.log('cannot move right further')
                return
            }
            this.grid[this.playerStartX][this.playerStartY] = new trees('🐾' , 'discovered')
            this.playerStartX += 1
            this.grid[this.playerStartX+ 1][this.playerStartY] = new trees('🤺' , 'undiscovered')
            
        }
}

new grid(7,4)