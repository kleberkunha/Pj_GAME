class Fighter extends Character {
	constructor(name = 'Grace', hp = 12, mana = 40, dmg = 4, shield = 0, status = 'playing') {
		super(name, hp, mana, dmg, shield, status);
	}

	darkVision = () => {
		// Inflicts 5 damage: during the next turn, it will take 2 less damage per hit received
		// It costs 20 mana
		console.log(`${this.name} use DarkVision`);
	} 
}