
class Assassin extends Character {
	constructor(name = 'Carl', hp = 6, mana = 20, dmg = 6, shield = 0, status = 'playing') {
		super(name, hp, mana, dmg, shield, status);
	}
	superShield = () => {
		// Allows you to not take damage during the next turn
		// Then deal an attack inflicting 7 damage
		// Then, if the opponent is not dead, causing him 7 damage
		// It costs 20 mana
		console.log(`${this.name} utilise SuperShield`);
	}
}