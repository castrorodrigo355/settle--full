export const ratesInitMap = (data: any) => {
    let ratesArray: any = [];
    for(let element in data){
        const currency = element;
        const value = data[element]
        ratesArray = [...ratesArray, {currency, value}];
    }
    return {
        success: true,
        rates: ratesArray
    }
        
}