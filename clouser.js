//clauser function

function Outer (){
    var count = 0;
    return function Inner(){
        count++;
        return count;
    }
}

const fn = Outer();
console.log(fn());