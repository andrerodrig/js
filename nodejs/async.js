//It will be executed after Hello
setTimeout(() => {
    console.log('Timer is done');
    fetchData(text => {
        console.log(text)
    });
},2000);


//It will be executed after Hi
setTimeout(() => {
    console.log('Hello');
},1000)


//It will be executed first
console.log('Hi');

//It will be executed last
const fetchData = callback => {
    setTimeout(() => {
        callback('Done');
    },1500);
}