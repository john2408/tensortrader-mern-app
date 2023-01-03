
function getTableHeaders(trade_info){

    let headers = [];

    trade_info.forEach((element, index)=> {

        if(index == 0){

            // Get Column Names
            let keys = Object.keys(element);

            // Push Columns names to beginning of array
            keys = keys.slice(1, keys.length)

            keys.forEach((title) => {
                headers.push(title);
            });
        }

    });

    return headers;

}

function parsetoTablelist(trade_info, headers){

    let values = [];

    headers.map((key)=> {
        
        let col_values = []

        trade_info.forEach( (item)=> {
            col_values.push(item[key]);
        });

        values.push(col_values)

    });

    return values;


};

function parseTableHeaders(headers){

    let new_headers = []
    headers.forEach((title) => {
        new_headers.push([ `<b>${title}<b>`]);
    });

    return new_headers

};



function getColors(n_rows, rowEvenColor, rowOddColor){

    let colors = [];

    for (let i = 0; i < n_rows ; i++) {
        
        if(i % 2 == 0){
            colors.push(rowEvenColor); 
        }else{
            colors.push(rowOddColor); 
        }
        
      }

    return colors

};

export {parseTableHeaders, parsetoTablelist, getTableHeaders, getColors}