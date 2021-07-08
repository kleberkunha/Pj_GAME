class Berzerker extends Character {
	constructor(name = 'Draven', hp = 8, mana = 0, dmg = 4, shield = 0, status = 'playing') {
		super(name, hp, mana, dmg, shield, status);
	}

	sacredFury = () => {
		this.hp = this.hp - 1;
		this.dmg = this.dmg + 1;
		console.log(`${this.name} uses SacredFury: he / she sacrifices 1 hp to gain 1 additional dmg until the end of the fight. He / she now has ${this.hp} hp and ${this.dmg} dmg.`);
	}
}