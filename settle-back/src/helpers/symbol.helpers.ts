export const symbolsInitMap = (data: any) => {
    let symbolsArray: any = [];
    for(let element in data){
        const currency = element;
        const description = data[element]
        symbolsArray = [...symbolsArray, {currency, description}];
    }
    return {
        success: true,
        symbols: symbolsArray
    }
        
}