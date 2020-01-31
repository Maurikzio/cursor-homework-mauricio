let n = +prompt("Type a value for N:", "10")
while(!Number.isInteger(n)){
    n = +prompt("ERROR!, don't panic. \nThis time enter an INTEGER value for N", "10");
}

let m = +prompt("Type a value for M:", "100")
while(!Number.isInteger(m)){
    m = +prompt("ERROR!, don't panic. \nThis time enter an INTEGER value for M", "100");
}

let skipping = confirm('Do you wanna skip even numbers?');

let result = 0;

if(n > m){
    alert("WARNING!\nN is bigger than M, so we've swapped their values to dont generate an error :)");
    [n,m] = [m,n];
}

document.writeln(`<p>N = ${n}</p>`);
document.writeln(`</p>M = ${m}</p>`);
document.writeln(`<p>Are we skipping even numbers? -> ${skipping}</p>`);

for(let i=n; i<=m; i++){
    if(skipping){
        if(i%2 == 0) {
            result += i;
        }
        continue;
    }else{
        result += i;
    }
}

document.writeln(`<p>The result sum of ${(skipping)? "even" : "the"} numbers between ${n} and ${m} is: ${result}</p>`)
console.log(`N; ${n} 
M: ${m}
skipping: ${skipping} 
result: ${result}`);