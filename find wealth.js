let accounts=[[1,2,3],[3,2,1,8]]
var maximumWealth = function(accounts) {
  
  let minval=0;
    for(let person=0;person<accounts.length;person++)
    {
        let wealth=0;
        for(let acc=0;acc<accounts[person].length;acc++)
        {
            wealth=wealth+accounts[person][acc]
        }    
    
    if(wealth>minval)
    {
        minval=wealth;
    }
    }
    return minval;
};
console.log(maximumWealth(accounts));