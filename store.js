const toys = require("./t")

class Store {
    constructor(name, toys) {
        this.name = name;
        this.toys = toys;
        this.income = 0;
        this.customerbasket = []

        this.remaining = 0;

    }
    statusinfo(name) {
        this.toys.forEach(item => {
            if (item.name === name) {
                if (item.count > 0) {
                    item.count--;
                    this.income += item.price;
                    console.log(` \n----\n ## Info about ${name} item: Purchased ${item.name} for ${item.price} ID # ${item.id} ${item.count} \n----\n TOTAL price \n#######\n ${this.income}`);
                } else {
                    console.log(`Sorry, ${item.name} is out of stock!`);
                }
            }
        });
    }
    AddnewItem(name2,count2){
        this.toys.forEach(item=>{
            if(item.name=== name2){
                console.log(`${item.name} contain ${item.count}`)
                item.count+=count2;
                console.log(`after ${item.name} contain ${item.count}`)


            }

        })


    }

}

const store = new Store("Toys Garden", toys);
// store.statusinfo("ball")
// store.statusinfo("train")
store.AddnewItem('train',4)







