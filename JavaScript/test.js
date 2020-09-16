// function buyJeans (dolars, cb) {
//     setTimeout(() => {
//         if (dolars > 200) {
//             cb('BUY')
//         } else {
//             cb('NO')
//         }
//     }, 100)
// }
//
//
// clearHouse(true, () => {
//     console.log(money);
//     buyJeans(money, (text) => {
//         console.log(text);
//     })
// })
//
//


//
// // PROMISE
//
// let money = 0;
//
// function clearHouse(isClear) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (isClear) {
//                 money = 400
//                 resolve(money)
//             }
//         }, 1000)
//     })
// }
//
//
// function buyJeans (dolars) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dolars > 200) {
//                 resolve('BUY')
//             }
//             else {
//                 reject('NO')
//             }
//         }, 3000)
//     })
// }
//
// function goEat (change) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (change > 50) {
//                 resolve('Om nom nom')
//             }
//             else {
//                 reject('No money ((((')
//             }
//         }, 3000)
//     })
// }

// // clearHouse(true)
// //     .then((reward) => {
// //         console.log(reward);
// //     })
//
//
// // buyJeans(5000)
// //     .then(value => {
// //         console.log(value);
// //
// //         return 'GO TO NEXT THEN'
// //     })
// //     .then(value1 => {
// //         console.log(value1, '1111');
// //
// //         return 'HELLO @'
// //     })
// //     .then(value2 => {
// //         console.log(value2, '222');
// //     })
// //     .catch(reason => {
// //         console.log(reason);
// //     })
//
//
// clearHouse(true)
//     .then(reward => {
//         console.log(reward);
//         return buyJeans(reward)
//     })
//     .then(value => {
//         console.log(value);
//
//         return goEat(20)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.log(reason + ' :ERRROR');
//     })
//     .finally(() => {
//         console.log('TEST');
//     })




//
// let money = 0;
//
// function clearHouse(isClear) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (isClear) {
//                 money = 400
//                 resolve(money)
//             }
//         }, 1000)
//     })
// }
//
//
// function buyJeans(dolars) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dolars > 200) {
//                 resolve('BUY')
//             } else {
//                 reject('NO')
//             }
//         }, 3000)
//     })
// }
//
// function goEat(change) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (change > 50) {
//                 resolve('Om nom nom')
//             } else {
//                 reject('No money ((((')
//             }
//         }, 3000)
//     })
// }
//
//
// async function asFunc() {
//     try {
//         let reward = await clearHouse(true);
//         console.log(reward);
//
//         let isBuy = await buyJeans(reward);
//         console.log(isBuy);
//
//         let eat = await goEat(10);
//         console.log(eat);
//     } catch (err) {
//         console.error('OOPS ERROR: ' + err);
//     }
// }
//
//
// asFunc()

