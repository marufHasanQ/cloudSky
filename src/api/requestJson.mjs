








export const getJson= (protocol,url) => {

    return new Promise((resolve, reject) => { 
        const req = protocol.get(url);
        req.on('error', function (e) {

            req.end();
            console.log(`Error couldn't get the location data` );
            console.log(e.message);
            reject(e);
        });
        req.once('response', (res) => {
            let rawJson= '';
            res.on('data',(chunk) => rawJson += chunk );
            res.on('end',function(){

                if (res.statusCode === 200) {
                    try {
                        const data = JSON.parse(rawJson);
                        //console.log('inside getJson', res.statusCode, data);

                        resolve(data);

                    } catch (e) {
                        console.log('Error parsing JSON!');
                        reject('Error parsing JSON!');
                    }
                } 
                else if(res.statusCode === 429){
                    reject('Request limit exceded');


                }
                else {
                    reject('Status:'+ res.statusCode);
                }

            });
        });
    })
}
