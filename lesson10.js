function userCard(number) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = number <= 3
        ? number
        : 'Key not valid'

    function getCardOptions() {
        return {
            key,
            balance,
            transactionLimit,
            historyLogs
        }
    }

    function addHistory(operationType, credits, operationTime) {
        historyLogs.push({operationType, credits, operationTime})

    }

    function putCredits(credit) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (credit > 0) {
            balance += credit
            addHistory('putCredits', credit, data + '' + time)
        }
    }
    function takeCredits(credit) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (credit<=transactionLimit&&credit<=balance){
            balance-=credit;
            addHistory('takeCredits',credit,data+''+time)
        } else {
            console.log('error in take credit');
        }

    }
    function setTransactionLimit(number) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (number > 0) {
            transactionLimit=number
            addHistory('setTransactionLimit', number, data + '' + time)
        }
    }
function transferCredits(sum, card) {
    let now = new Date();
    let data = now.toLocaleDateString();
    let time = now.toLocaleTimeString();
    let credit = sum*1.005;
    if ()
}
    return {
        getCardOptions,
        putCredits,
         takeCredits,
        setTransactionLimit
      transferCredits
    }

}
const  userCard1 = new userCard(1)
userCard1.putCredits(150 )
userCard1.setTransactionLimit(150)
userCard1.takeCredits(100)
console.log(userCard1.getCardOptions());
