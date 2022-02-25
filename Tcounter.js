class toys{
    constructor(name,count,price){
        this.name=name;
        this.price=price;
        this.count=count;
        this.id=Math.floor(Math.random()*199654)
        this.printtoysinfo()


    }
    printtoysinfo(){

                    console.log(`Information  #:${this.name} #count: ${this.count} #price:${this.price} id for scanning: # ${this.id} \n====\n`)


        
    }


}



module.exports=toys;