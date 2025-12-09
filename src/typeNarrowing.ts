function getdrink(kind: string | number){
    if(typeof kind=== 'string'){
        return `Making ${kind} chai...`
    }

    return `Chai order : ${kind}`

}


function serveChai (msg? :string){
    if(msg){
        return `serving ${msg}`;
    }
    return `serving default masala chai`;
}

function orderChai( size: "small" | "medium" | "large" | number){
    if(size == "small"){
        return ` small cutting chai...`
    }

    if(size == "medium"){
        return ` extra cutting chai...`
    }

    return  `chai order #${size}`
}

class kulhadChai {
    serve(){
        return `Serving Kulhad Chai`

    }
}


class Cutting {
    serve(){
        return `Serving Cutting Chai`

    }
}

function serve(chai :  kulhadChai | Cutting){
    if(chai instanceof kulhadChai){
        return chai.serve()
    }
}


type ChaiOrder = {
    type : string
    sugar : number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" 

    )
}

function serveorder(item:ChaiOrder | string) {
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${ClipboardItem.sugar}
        sugar`
    }
    return `serving custom chai : ${item}`
}


type MasalaChai = {type : "masala"; spicelevel:  number};
type GingerChai= {type : "ginger"; amount: number};
type ElaichiChai= {type : "elachi"; aroma :  number};

type Chai = MasalaChai | GingerChai |ElaichiChai
function MakeChai(order:Chai){
    switch (order.type) {
        case "masala":
            return `Masala chai`
            
            break;
    
          case "elachi":
            return `elachi chai`

            case "ginger":
            return `ginger chai` 
            
            break;
    }
}
