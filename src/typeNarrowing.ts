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