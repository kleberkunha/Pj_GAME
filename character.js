class Character {
	constructor(name, hp, mana, dmg, shield, status) {
		this.name = name;
		this.hp = hp;
		this.mana = mana;
		this.dmg = dmg;
		this.shield = shield
		this.status = status;
	}

	dealDamage = (victim) => {
		victim.hp = victim.hp - this.dmg;
	}

	isDead = () => {
		this.status = 'loser';
		console.log(`${this.name} est mort(e)`);
	}

	killed = () => {
		this.mana = this.mana + 20;
		console.log(`${this.name} kill its victim and gain 20 mana. He / she now has${this.mana} pts de mana.`);
	}

	takeDamage = () => {
		// All these characters have a take Damage method, taking as a parameter the number of damage to be received.
	}

	// If a character's HP ever drops to 0, they are eliminated and can no longer play or be attacked.
	// His status then goes to loser.
}