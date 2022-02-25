const toys=require("./t")

class Store{
    constructor(name,toys){
        this.name=name;
        this.toys=toys;
        this.income=0;
        this.customerbasket=[]
        this.remaining;

    }
    statusinfo(reqName){
        // console.log(toys[1][1].count)
        for(var i=0;i<this.toys.length;i++){
            if(this.toys[1][i].name===reqName){
                this.income+=this.toys[1][i].price;
                this.customerbasket.push[this.toys[1][i].name]
                this.remaining= this.toys[1][i].count
                
                console.log(`${reqName} added to your basket successfully \n======\n total price:${this.income} $ Remaining: ${this.remaining} Count`)


            }else{
                console.log(`${reqName} is not Available yet`)

            }

        }
        
        console.log('income',this.income)


// for(var i=0;i<=this.toys.length;i++){
//     console.log('h')
// }



    }

}
const store = new Store("Toys Garden", toys);
store.statusinfo('bicycle')
store.statusinfo('doll')




