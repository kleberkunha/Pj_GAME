
class Paladin extends Character {
	constructor(name = 'Ulder', hp = 16, mana = 160, dmg = 3, shield = 0, status = 'playing') {
		super(name, hp, mana, dmg, shield, status);
	}

	lighting = (victim) => {
		victim.hp = victim.hp - 4;
		this.hp = this.hp + 5;
		this.mana = this.mana -40;
		console.log(`${this.name} utilise Lighting : il/elle gagne 5 hp mais perd 40 pts de mana. Il/elle a maintenant ${this.hp} hp et ${this.mana} pts de mana. Cette attaque inflige 4 dmg à ${victim.name}. ${victim.name} a maintenant ${victim.hp} hp restants.`);
	}
}