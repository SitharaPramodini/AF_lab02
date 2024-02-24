// javascript async & await
async function checkRoomStatus(){
        let promiseToCleanTheRoom =new promises(function(receive, reject){
        //cleaning the room
        let isClean = true;

        if(isClean){
            receive('clean');
        } else {
            reject('not clean');
        }
    });

    promiseToCleanTheRoom.then(function(fromReceive){
        console.log('the room is'+ fromReceive);
    }).catch(function(fromReject){
        console.log('the room is'+ fromReject);
    });
}



