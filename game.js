class Game {
	constructor() {
		this.playersArray = [];
		this.turnLeft = 10;
	}

	startGame = () => {
		let p1 = new Assassin();
		let p2 = new Berzerker();
		let p3 = new Fighter();
		let p4 = new Healer();
		let p5 = new Paladin;
		this.playersArray.push(p1, p2, p3, p4, p5);

		let createCharacter = prompt('Do you want to create a character? (Yes No)');
		if (createCharacter =='yes') {
			console.log('********** Types of characters available **********')
			this.playersArray.forEach(p => console.log(`${p.constructor.name} : ${p.hp} hp, ${p.mana} mana and ${p.dmg} dmg`));
			let characterType = prompt('What type of character do you want to be? (ex: Fighter, Paladin, Healer, Berzerker, Assassin)');
			let characterName = prompt(`What would you like to call your ${characterType} ?`);

			if (characterType == 'Assassin'){
				let userCharacter = new Assassin();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`A ${characterType} has ${p1.hp} hp. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`A ${characterType} has ${p1.mana} mana. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`A ${characterType} has ${p1.dmg} dmg. How much do you want to give to ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			} else if (characterType == 'Berzerker') {
				let userCharacter = new Berzerker();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`A ${characterType} has ${p1.hp} hp. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`A ${characterType} has ${p1.mana} mana. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`A ${characterType} has ${p1.dmg} dmg. How much do you want to give to ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			} else if (characterType == 'Fighter') {
				let userCharacter = new Fighter();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`A ${characterType} has ${p1.hp} hp. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`A ${characterType} has ${p1.mana} mana. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`A ${characterType} has ${p1.dmg} dmg. How much do you want to give to ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			} else if (characterType == 'Healer') {
				let userCharacter = new Healer();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`A ${characterType} has ${p1.hp} hp. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`A ${characterType} has ${p1.mana} mana. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`A ${characterType} has ${p1.dmg} dmg. How much do you want to give to ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			} else if (characterType == 'Paladin') {
				let userCharacter = new Paladin();
				userCharacter.name = characterName;
				userCharacter.hp = prompt(`A ${characterType} has ${p1.hp} hp. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.mana = prompt(`A ${characterType} has ${p1.mana} mana. How much do you want to give to ${userCharacter.name} ?`);
				userCharacter.dmg = prompt(`A ${characterType} has ${p1.dmg} dmg. How much do you want to give to ${userCharacter.name} ?`);
				this.playersArray.push(userCharacter);
			}

		}
		console.log('********** Fighters **********');
		this.playersArray.forEach(p => console.log(`${this.playersArray.indexOf(p) + 1} - ${p.name}, ${p.constructor.name} : ${p.hp} hp, ${p.mana} mana et ${p.dmg} dmg`));
		console.log('********** Fight! ! **********');
		myGame.startTurn();
	}
	shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	startTurn = () => {
		console.log(`Turn n°${11 - this.turnLeft}`);
		myGame.shuffle(this.playersArray);
		this.playersArray.forEach(p => {
			myGame.watchStats();
			console.log(`It's the turn of ${p.name} to fight !`);
			let properties = Object.getOwnPropertyNames(p);
			let lastProperty = properties[properties.length - 1];
			let userAttack = prompt(`${p.name} can attack or use ${lastProperty.charAt(0).toUpperCase() + lastProperty.slice(1)}, the special power of ${p.constructor.name}s (attack/${lastProperty.toLowerCase()})`);
			let userVictimIndex = prompt(`Who will be the victim of ${p.name} ? (n° fighter, ex: 1)`);
			let userVictim = this.playersArray[userVictimIndex - 1];
			if (userAttack == 'attack') {
				p.dealDamage(userVictim);
				console.log(`${p.name} attack ${userVictim.name} and inflicts on him ${p.dmg} dmg. ${userVictim.name} a ${userVictim.hp} hp remaining.`);
			} else if (userAttack == lastProperty.toLowerCase()) {
				if (p.constructor.name == 'Assassin') {
					p.superShield();
				} else if (p.constructor.name == 'Berzerker') {
					p.sacredFury();
				} else if (p.constructor.name == 'Fighter') {
					p.darkVision();
				} else if (p.constructor.name == 'Healer') {
					p.phoenix();
				} else if (p.constructor.name == 'Paladin') {
					p.lighting(userVictim);
				}
			}
			if (userVictim.hp <= 0) {
				userVictim.isDead();
				p.killed();
			}
		});
		myGame.skipTurn();

		// 4. Once all the players have played,
		// we log all the characters still alive and we use skipTurn.
		// * If there is only one player left alive, he becomes the winner and the game ends.

		// After 10 turns or when there is only one character left,
		// ... the character (s) still alive wins.
	}

	skipTurn = () => {
		this.turnLeft = this.turnLeft - 1;
		if (this.turnLeft <= 0) {
			console.log('Fight over !');
		} else {
			myGame.startTurn();
		}

		// Once at 0, the game is over,
		// and the remaining characters win,
		// thus seeing their status parameter change to winner.
	}
	watchStats = () => {
		console.log('---------- Status ----------');
		this.playersArray.forEach(p => console.log(`${p.status} : ${this.playersArray.indexOf(p) + 1} - ${p.name}, ${p.constructor.name} : ${p.hp} hp, ${p.mana} mana and ${p.dmg} dmg`));
		console.log('---------------------------');
	}
}
myGame = new Game();
document.getElementById('newgame').onclick = myGame.startGame;