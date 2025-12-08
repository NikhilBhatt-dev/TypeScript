let Subs : number | string = '10M'  

let apiRequestStauts : 'pending' |  'succees' | 'error' = "pending"

let airlineSeat : "aisle" |  "window" |  "middle" = 'aisle'
 

const orders = ['12' , '33', ' 28', '43']

let currentorder:string | undefined;

for(let order of orders){
    if(order === '28') {
        currentorder =  order;
        break;
    }
    currentorder = '11'
}

console.log(currentorder)