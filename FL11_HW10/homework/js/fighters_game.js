function Fighter(obj) {
    let onehundred = 100;
    let win = 0;
    let lose = 0;
    let health = obj.health;
    this.getName = () => obj.name;
    this.getDamage = () => obj.damage;
    this.getHealth = () => obj.health;
    this.getAgility = () => obj.agility;
    this.attack = (enemyObj) => {
        let attackChance = 1 - enemyObj.getAgility() / onehundred;
        let random = Math.random();
        if (random < attackChance) {
            enemyObj.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${enemyObj.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    };

    this.logCombatHistory = () => `Name: ${this.getName()}, Wins: ${win}, Losses: ${lose}`;
    this.heal = (amountHeal) => {
        health += amountHeal;
        health = health > obj.hp ? obj.hp : health;
        return health;
    };

    this.dealDamage = (amountHeal) => {
        if (obj.health - amountHeal > 0) {
            obj.health -= amountHeal;
        } else {
            obj.health = 0;
        }
    };

    this.addWin = function () {
        win++;
        return win;
    };
    this.addLoss = function () {
        lose++;
        return lose;
    };
}

const fighter1 = new Fighter({ name: 'John', damage: 20, health: 100, agility: 25 });
const fighter2 = new Fighter({ name: 'Jim', damage: 10, health: 120, agility: 40 });

function battle(fighter1, fighter2) {
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        fighter1.attack(fighter2);
        if (fighter1.getHealth() <= 0) {
            fighter1.addLoss();
            fighter2.addWin();
            console.log(`${fighter2.getName()} is dead and cant't fight.`);
        } else if (fighter2.getHealth() <= 0) {
            fighter1.addWin();
            fighter2.addLoss();
            console.log(`${fighter1.getName()} is dead and cant't fight.`);
        } else {
            fighter2.attack(fighter1);
        }
    }
}


battle(fighter1, fighter2);
console.log(fighter1.getHealth());
console.log(fighter2.getHealth());
console.log(fighter1.logCombatHistory());
console.log(fighter2.logCombatHistory());

