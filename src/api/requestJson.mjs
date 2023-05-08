export const getJson= (protocol,url) => {

    return new Promise((resolve, reject) => { 
        const req = protocol.get(url);
        req.on('error', function (e) {

            req.end();
            console.log(`Error couldn't get the data` );
            console.log(e.message);
            reject(e);
        });
        req.once('response', (res) => {
            let rawJson= '';
            res.on('data',(chunk) => rawJson += chunk );
            res.on('end',function(){
               let data; 
                //console.log(rawJson);
                    try {
                        data = JSON.parse(rawJson);
                    } catch (e) {
                        console.log('Error parsing JSON!');
                        reject('Error parsing JSON!');
                        return;
                    }

                if (res.statusCode === 200) {
                        resolve(data);
                } 
                else if(res.statusCode === 429){
                    reject('Request limit exceded');


                }
                else {
                       // console.log('inside getJson', res.statusCode,rawJson );
                    //throw ('Status:'+ res.statusCode);
                    //
                    let errorString = 'Status:'+ res.statusCode; 
                        //console.log(data);
                    if(data.error)
                        errorString = errorString + ` reason: ${data.reason}`;

                    reject(errorString);
                    //reject('Status:'+ 'cant get data');
                }

            });
        });
    })
}
