/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
  

//
class CharacterStats {
    constructor(attributes) {
        GameObject.call(this, attributes);
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  

//
class Humanoid {
    constructor(attributes) {
        CharacterStats.call(this, attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
        this.greet = function () {
            return `${this.name} offers a greeting in ${this.language}.`;
        };
        language: 'Elvish';
    }
}
;
  Humanoid.prototype = Object.create(CharacterStats.prototype);