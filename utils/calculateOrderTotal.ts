
export default function calculateOrderTotal(order:any){
    return order.reduce((total:any,singleOrder:any) =>  total + singleOrder.priceSize,0)
}