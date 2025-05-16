function twoSum(numbers,target){
    let answer = [];
    for (i=0;i<=numbers.length;i++){
        // let temp;
        console.log(numbers[i],numbers[i+1])
       
        let sum = numbers[i]+numbers[i+1]
        if(sum == target){
            // console.log(i)
            // console.log(i)console.log
            answer.push(i),
            answer.push(i+1)
            console.log(answer)
            return;
        }
    }
    console.log(answer)
}


// let numbers= [3,3] 
// let target= 6

// let numbers = [2, 7, 11, 15];
// let target = 9;
const numbers = [3, 2, 3, 5, 1,]
const target = 6

twoSum(numbers,target)