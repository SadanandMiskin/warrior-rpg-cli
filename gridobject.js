class trees {
    tree = ['🎄' , '🌴' , '🌳' ,'🎄']


    constructor (sprite, type = 'undiscovered'){
        if(!sprite){
            const randomndex = Math.floor(
                Math.random() * this.tree.length
            )
            this.sprite = this.tree[randomndex]

        }
        else{
            this.sprite = sprite
        }
        this.type = type
    }
}

export {trees}