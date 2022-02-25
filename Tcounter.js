class toys{
    constructor(name,count,price){
        this.name=name;
        this.price=price;
        this.count=count;
        this.printtoysinfo()

    }
    printtoysinfo(){
        console.log(`TOYS info:${this.name} ${this.count} ${this.price} \n====\n`)
    }


}
const InStore=[
    new toys ("bicycle",4,98),
    new toys('train',10,20),
    new toys('doll',2,13.2),
    new toys('ball',1,5.33)
]

module.exports={InStore,toys}