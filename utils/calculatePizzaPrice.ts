const  Sizes:any ={
    SMALL:0.75,
    MEDIUM:1,
    LARGE:1.25,
}

export default function calculatePizzaPrice(price:number,size:string){
    return price * Sizes[size]
}
