//console.log("Demo");
//ASYNC AWAIT:
console.log('Person1: shows ticket');
console.log('Person2: shows ticket');
//const preMovie = async () => 'preMovie';
const preMovie = async () => {
    const promiseWifeBringingTicks = new promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'),3000);

    });

    const getPopcorn = new promise((resolve, reject) => resolve('popcorn'));
    const addButter = new promise((resolve, reject) => resolve('butter'));
    const getColdDrinks = new promise((resolve, reject) => resolve('ColdDrinks'));
    let ticket = await promiseWifeBringingTicks;

    console.log('wife: i have the ticks');
    console.log('husband: lets go');
    console.log('wife: but, i need popcorn');

    let popcorn = await getPopcorn;

    console.log('husband: i got some popcorn, now we should go in.');
    console.log('wife: i need butter on my pop');

    let butter = await addButter;

    console.log('husband: i have added butter on popcorn, now what?');
    console.log('wife: i need cold-drinks');

    let coldDrinks = await getColdDrinks;

    //let [popcorn, butter, ColdDrinks] = await PromiseAll([getPopcorn, addButter, getColdDrinks]);

    //console.log('${popcorn}, ${butter}, ${ColdDrinks}');

    return ticket;


}
preMovie().then((m) => console.log(m));

console.log('Person4 shows ticket');
console.log('Person5: shows ticket');