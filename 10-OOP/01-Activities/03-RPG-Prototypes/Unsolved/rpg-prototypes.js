// Create a constructor function called `Character` that takes in 3 arguments: `name`, `strength`, `hitpoints`
function Character(name, strength, hitpoints) {
    this.name = name;
    this.strength = strength;
    this.hitpoints = hitpoints;
}

// Create a prototype method called `printStats()` which prints all of the stats for a character
Character.prototype.printStats = function() {
    console.log(
        'Name: ' + 
        this.name + 
        '\nstrength: ' + 
        this.strength + 
        '\nhitpoints: ' + 
        this.hitpoints
    );
    console.log('line break')
}

// Create a prototype method called `isAlive()` which prints whether or not this character is alive
// by determining whether their `hitpoints` are above or below zero
Character.prototype.isAlive = function() {
    if (this.hitpoints > 0)
    {
        return true;
        console.log(this.name + ' is ALIVE!!!')  
    } return false;
    console.log(this.name + ' has died....')
}
// Create a prototype method called `attack()` which takes in a second caracter
// and subtracts this character's `strength` from their `hitpoints`
Character.prototype.attack = function(enemy) {
    this.enemy
}

// =============================================================

let warrior = new Character('Crusher', 10, 75);
let rogue = new Character('Dodger', 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();
