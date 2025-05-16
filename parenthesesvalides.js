function isValid(str){
    
    let lenght=str.length
    let match = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    for(i=0;i<=str.length;i++)
    {
        if(str.length<=2){

            if(str[1]===match[str[0]]){
                console.log('true they match')
                return
            } else {
            console.log("false they don't match")
            return
        } 
        }else{
            if(str[i+1]===match[str[i]]||str[i+(lenght-1)]===match[str[i]]){
                console.log('true they match')
                
            } else {
            console.log("false they don't match")
            return
        }
            
        }
    }
}

const str1 = "()"
isValid(str1);
// retourne `true`
    
const str2 = "()[]{}"
isValid(str2);
// retourne `true`
    
const str3 = "(]"
isValid(str3);
// retourne `false`
    
const str4 = "([])"
isValid(str4);
// retourne `true`