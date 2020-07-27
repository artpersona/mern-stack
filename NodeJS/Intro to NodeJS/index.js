var rect = require('./rectangle')
var strManip = require('./StringManip')
function solveRect(l,b){
    console.log(`Solving for rectangle with l = ${l} and b = ${b}`)
    // rect(l,b, (err,data) => {
    //     if(err){
    //         console.log(err.message)
    //     }
    //     else{
    //         console.log(`Area is ${data.area()}`)
    //         console.log(`Length is ${data.perimeter()}`)
    //     }
    // })
    console.log('Last Statement')
    
}

function solveString(string){
    strManip(string,(err,data) => {
        if(err){
            console.log(err.message)
        }
        else{
            console.log(`Reversed is: ${data.reversed()}`)
            console.log(`Is Palindrome: ${data.isPalindrome()}`)
    
        }
    })

    console.log('Ending')
}

solveString("debbie");
// solveRect(2,5)
// solveRect(-1,1)
