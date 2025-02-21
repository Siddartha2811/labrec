function * numberGenerator(){
    let i=0;
    while(true){
        yield i++;
    }
}
const gen=numberGenerator();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
const ss=Symbol('special')
function * mixData(){
    for(let value of gen){
        console.log(value);
    }
}
