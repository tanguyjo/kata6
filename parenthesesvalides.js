function isValid(str){
    
    let lenght=str.length
    let match = {
        "{": "}",
        "(": ")",
        "[": "]"
    }
    for(i=0;i<=str.length;i++)
    {
        // console.log(str[i])
        // console.log(match[str[i]])
        if(str.length<=2){

            if(str[1]===match[str[0]]){
                console.log('true they match')
                return
            } else {
            console.log("false they don't match")
            return
        } 
        }else{// la partie du else ne marche pas
            if(str[i+1]===match[str[i]]||str[i+(lenght-1)]===match[str[i]]){
                console.log('true they match')
                
            } else {
            console.log("false they don't match")
            return
        }
            
        }
    }
}

const str = "()"

{[]}

{{{}}}
isValid(str);