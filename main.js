document.write("17.Shuffle an array"+"<br>");
function test17(arr){
    var x=[];
    for(let i=0;i<=arr.length;i++){
         x.push(Math.floor(Math.random()*arr.length));
    }
    return x;
}
document.write(test17([0,1,2,3,4,5,6,7,8,9])+"<br><br>");