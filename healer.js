class Healer extends Character {
	constructor(name = 'Moana', hp = 8, mana = 200, dmg = 2, shield = 0, status = 'playing') {
		super(name, hp, mana, dmg, shield, status);
	}

	phoenix = () => {
		this.hp = this.hp + 8;
		this.mana = this.mana - 25;
		console.log(`${this.name} utilise Phoenix : il/elle gagne 8 hp mais perd 25 pts de mana. Il/elle a maintenant ${this.hp} hp et ${this.mana} pts de mana.`);
	}
}