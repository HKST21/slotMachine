
class SlotMachineClass{
    constructor(initialBalance = 220) {
        this.symbols = ['🍒', '🍊', '🍋', '7', '💎'];
        this.score = 0;
        this.balance = initialBalance;
        this.spinCost = 20;

        this.winningCombinations = {
            '💎💎💎': 100,
            '777': 50,
            '🍒🍒🍒': 30,
            '🍊🍊🍊': 20,
            '🍋🍋🍋': 10
        };
    }



    spin() {
       

        if(this.balance < this.spinCost) {
            throw new Error("you are out of balance - top up your credit")
        }

        this.balance -= this.spinCost;

        const result = []
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * this.symbols.length);

            result.push(this.symbols[randomIndex]);
        }

        const win = this.checkWin(result);
        this.balance += win;
        
        this.score += win;

        return {
            symbols: result,
            win: win,
            balance: this.balance
        };
    }

    checkWin(result) {
        
        if (result[0] === result[1] && result[1] === result[2]) {
            
            if (result[0] === '💎') {
                return 100;
            } else if (result[0] === '7') {
                return 50;
            } else if (result[0] === '🍒') {
                return 30;
            } else if (result[0] === '🍊') {
                return 20;
            } else if (result[0] === '🍋') {
                return 10;
            }
        }
        return 0; 
    }

    getScore() {
        return this.score;
    }

    getBalance() {
        return this.balance;
    }


    getSpinCost() {
        return this.spinCost;
    }
}

export const firstSlotMachine = new SlotMachineClass();


export default firstSlotMachine;
