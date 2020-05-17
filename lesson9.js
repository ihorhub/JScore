



// Письмова таска.
//     Зробити свій розпоряжок дня.
//
//     Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
//     Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
//     Зробити таких функцій в районі 10 штук.
//     Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
//     Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
//     Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте -
// Поїхали до дому - Повчились - Лягли спати.
//
//     Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант,
//     що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу.
//     Або йдучи на обід ви забули гаманець і лишились голодні.


let chance = 0.24


function myDay (massage) {
    console.log('stand Up')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random()>chance) {
                resolve('massage')
            }
            else {
                reject('Prospav')
            }
        }, 2000)
    })
}
function breakfast(breakF) {
    console.log('time for eat my breakfast')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( Math.random()>chance) {
                resolve('breakF')
            }
            else {
                reject('holodilnyk poronuy')
            }
        }, 2000)
    })
}

function goToWork(gowork) {
    console.log('go to work')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random()>chance) {
                resolve('gowork')
            }
            else {
                reject('raine on street')
            }
        }, 2000)
    })
}

function work(todowork) {
    console.log('you mast work ')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random()>chance) {
                resolve('todowork')
            }
            else {
                reject('karantine!!! stay at home')
            }
        }, 2000)
    })
}
function coofeBreake(typecoffe) {
    console.log('time to coffe')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random()>chance) {
                resolve('typecoffe')
            }
            else {
                reject('coffemachine is broken')
            }
        }, 2000)
    })
}
function goTOhome(home) {
    console.log('time go to home')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random()>chance) {
                resolve('home')
            }
            else {
                reject('must stay at home')
            }
        }, 2000)
    })
}
function godinner( dinner) {
    console.log('time for eat my dinner')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( Math.random()>chance) {
                resolve('diner')
            }
            else {
                reject('vechri ne bude')
            }
        }, 2000)
    })
}

// myDay(true)
//     .then(result => {
//         console.log(result);
//         return breakfast('kanaapka')
//     })
//     .then(result => {
//         console.log(result);
//
//         return goToWork('take my car')
//     })
//     .then(value => {
//         console.log(value);
//         return work()
//     })
//     .then(result => {
//         console.log(result);
//         return coofeBreake()
//     })
//     .then(result => {
//         console.log(result);
//         return goTOhome()
//     })
//     .then(result => {
//         console.log(result);
//
//     })
//     .catch(reason => {
//         console.log(reason + ' :ERRROR');
//     })

async function asFunc() {
    try {
        let day = await myDay(true);
        console.log(day);

        let brF = await breakfast();
        console.log(brF);
        let goo = await goToWork();
        console.log(goo);
        let HW = await work();
        console.log(HW);
        let latte = await coofeBreake();
        console.log(latte);
        let gohome = await goTOhome();
        console.log(gohome);
        let mydiner = await godinner();
        console.log(mydiner);


    } catch (err) {
        console.error('OOPS ERROR: ' + err);
    }
}

asFunc()

