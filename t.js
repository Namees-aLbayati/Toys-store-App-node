class toys{
    constructor(name,count,price){
        this.name=name;
        this.price=price;
        this.count=count;
        this.id=Math.floor(Math.random()*199654)


    }
 

}
const Required=[
    new toys ("bicycle",4,98),
    new toys('train',10,20.76),
    new toys('doll',2,13.2),
    new toys('Ball',1,5.33)
];



module.exports=[toys,Required]