module.exports = (string,callback) => {
    if(string == ""){
        callback(new Error("This string is empty"),null)
    }
    else{
        var reversed = "";
        setTimeout(()=> 
        callback(null,{
            reversed : () => {
              
                for(var i =string.length-1; i>=0;i--){
                    reversed+=string[i];
                }
                return reversed
            },
            isPalindrome: () => (string == string.reversed)
        })
        ,2000)
    
    }
}