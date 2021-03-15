const parseUser = (keys,user) =>{
    var parsedUser = {};
    keys.map((v,i)=>{
        parsedUser[keys[i]] = user[i];
    })
    return parsedUser;
}

const parseData = (obj) =>{
    var keys = [];
    var parsedData = [];
    for(let col of obj.column){
        keys.push(Object.values(col)[0]);
    }
    for(let user of obj.data){
        parsedData.push(parseUser(keys,user));
    }
    return parsedData;
}
export { parseData };
