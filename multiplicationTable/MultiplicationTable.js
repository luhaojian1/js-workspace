
function createMultiplicationTable(start, end){
   if (!isValid(start,end))
       return null;
   let output = getMultiplyTable(start,end);
   return output;
}

function getMultiplyTable(start,end){
    let result = "";
    for(let i=start;i<=end;i++){
        for(let j=start;j<=i;j++){
            let multiplication = i*j;
            result += j+"*"+i+"="+multiplication+"\t";
        }
        result += "\n";
    }

    return result;
}
function isValid(start , end){
    return start <= end && start>0 && end<=1000;
}

module.exports = {isValid,getMultiplyTable,createMultiplicationTable};

