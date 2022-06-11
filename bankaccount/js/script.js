let balance = 0

class bankAccount {
    withdrawal(withdrawalAmount) {
        if (withdrawalAmount > balance) {
        alert(`you don't have the funds to withdraw ${withdrawalAmount} from balance of ${balance}`)
        } else {
            balance -= parseFloat(withdrawalAmount)
            return balance
        }
    }
    deposit(depositAmount) {
        balance += parseFloat(depositAmount)
        return balance
    }
    getOwnerName(ownerName) {
        return ownerName
    }
    getBalance() {
        document.getElementById("bal").innerHTML = `${ownerName}'s balance is : ${balance}`
    }
}

window.addEventListener('load', init)
function init() {
    let btn1 = document.getElementById('enterName')
    let btn2 = document.getElementById('depositAmount')
    let btn3 = document.getElementById('withdrawalAmount')

    btn1.addEventListener('click', function () {
        let oname = prompt('enter name')
        a.getOwnerName(ownerName=oname)
    })
    btn2.addEventListener('click', function () {
        let dep = prompt('enter deposit amount')
        a.deposit(dep)
        a.getBalance()
    })
    btn3.addEventListener('click', function () {
        let wit = prompt('enter withdrawal amount')
        a.withdrawal(withdrawalAmount=wit)
        a.getBalance()
    })
}

let a = new bankAccount()
