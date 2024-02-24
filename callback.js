function greeting(name, callback){
    console.log('hello' + name);
    callback();
}

// callback function
function showDone(){
    console.log('done greeting!');
}

// passing function as an argument
greeting('Alice', showDone);
