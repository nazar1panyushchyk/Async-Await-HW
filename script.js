// TASK1
async function delayedPromise(value, time) {
    try {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(value);
            }, time); 
        });
    } catch (error) {
        console.log('Error is:', error);
    } 
    return value;
}

const promiseMassive = [
    delayedPromise(1000),
    delayedPromise(2000),
    delayedPromise(1500),
    delayedPromise(500),
    delayedPromise(1100),
];

Promise.all(promiseMassive).then((res) => {
    res.forEach((res, index) => {
        console.log(`Promise ${index + 1}: ${res}`);
    });
});

// TASK2
// async function randomDelay(value) {
//     const getRandomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

//     try {
//         await new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve({value, getRandomDelay});
//             }, getRandomDelay);
//         });
//     } catch (error) {
//         console.log('Error is:', error);
//     }

//     return {value, getRandomDelay};
// }

// const promiseMassive = [
//     randomDelay('Promise 1'),
//     randomDelay('Promise 2'),
//     randomDelay('Promise 3'),
//     randomDelay('Promise 4'),
//     randomDelay('Promise 5')
// ];

// Promise.race(promiseMassive).then((res) => {
//     console.log(`Найшвидший проміс: ${res.value}, затримка: ${res.getRandomDelay} ms)`);
// });
