function fizzBuzz(n){
    let result = [];
    for(let i=1;i<=n;i++){
        if(i%5==0 && i%3==0){
            // console.log("FizzBuzz")
            result.push("FizzBuzz");}
            
        else if(i%3==0){
            // console.log("Fizz")
            result.push("Fizz");}
        else if(i%5==0){
            // console.log("Buzz")
            result.push("Buzz");}
        else{
            // console.log(i);
            result.push(i);}
    }
    console.log(result);
}


fizzBuzz(3);
// retourne ["1", "2", "Fizz"]

fizzBuzz(5);
// retourne ["1", "2", "Fizz", "4", "Buzz"]

fizzBuzz(15);
// retourne 
// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]