function userCard(number) {
    let balance = 200;
    let transactionLimit = 150;
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
        } return true
    }

    function takeCredits(credit) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (credit <= transactionLimit && credit <= balance) {
            balance -= credit;
            addHistory('takeCredits', credit, data + '' + time)
        } else {
            console.log('error in take credit');
        }

    }

    function setTransactionLimit(number) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        if (number > 0) {
            transactionLimit = number
            addHistory('setTransactionLimit', number, data + '' + time)
        }
    }

    function transferCredits(sum, card) {
        let now = new Date();
        let data = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        let credit = (sum * 1.005).toFixed(2);

        if (credit <= transactionLimit && credit <= balance) {
            balance -= credit
            card.putCredits(sum)
            addHistory('transferCredits', credit, data + '' + time)
        } else {
            console.log('no money')
        }
    }
function getKey() {
        return key

}
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits,
        getKey
    }

}
const  userCard1 = new userCard(1)
const  userCard2 = new userCard(2)


//userCard1.setTransactionLimit(200)
//userCard1.putCredits(120 )
//userCard1.takeCredits(100)
//userCard1.transferCredits(80,userCard2)
console.log(userCard1.getCardOptions());
console.log(userCard2.getCardOptions());

class UserAccount {
    constructor(name) {
        this.name=name
        this.cards=[]
}
    
}
UserAccount.prototype.addCard=function () {
    if (this.cards.length<3){
        this.cards.push(new  userCard(this.cards.length+1))
    } else {
        consol.log('card limint empty')
    }

}
UserAccount.prototype.getCardByKey= function (number) {
  //  return this.cards.find(value =>value.getKey()===number )
    return this.cards.find(value =>value.getCardOptions().key===number )

}
user1= new UserAccount('Vova')
user2= new UserAccount('Petya')
user2.addCard()
user2.addCard()
user1.addCard()
user1.addCard()
user1.addCard()



const  user1card1 = user1.getCardByKey(2)
const  user2card2 = user2.getCardByKey(2)

user1card1.putCredits(2000)
user1card1.setTransactionLimit(2000)
user1card1.transferCredits(500,user2card2)
console.log('----------------------------------');
console.log(user1card1.getCardOptions());
console.log('----------------------------------');
console.log(user2card2.getCardOptions());
