var arr = [1, 2, 3, 4, 5, 6, 7];

console.log("Continue keyword demo:");
for (let i=0; i<arr.length; i++){
    if (arr[i] == 3 || arr[i] == 5){
        continue;
    }
    console.log(arr[i]);
}

console.log("Break keyword demo:");
for (let i=0; i<arr.length; i++){
    if (i == 4){
        break;
    }
    console.log(arr[i]);
}