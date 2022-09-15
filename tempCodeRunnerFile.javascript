const obj = {
    status : {
        name:"node",
        count: {
            a : 1,
            b : 2,
        },
    },
    getCandy(){
        this.status.count--;
        console.log(this.status.count);
    }
}

const { getCandy , status : { count : {b} }} = obj;
console.log(b)
