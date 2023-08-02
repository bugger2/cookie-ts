import { Upgrade } from "./upgrades.js"

export type GameObj = {
	score: number;
	upgradeContainer: HTMLDivElement;
	cps: number;
	cpc: number;
	updateScore: (value: number) => void;
	updateCps: (value: number) => void;
	updateCpc: (value: number) => void;
}

/* Variable Declaration */
const upgradeContainer: HTMLDivElement = document.querySelector('#upgrade-container') as HTMLDivElement;
const scoreHtml: HTMLParagraphElement = document.querySelector('#score') as HTMLParagraphElement;
const cpsHtml: HTMLParagraphElement = document.querySelector('#cps') as HTMLParagraphElement;
const cpcHtml: HTMLParagraphElement = document.querySelector('#cpc') as HTMLParagraphElement;

let gameObj: GameObj = {
	score: 0,
	upgradeContainer: upgradeContainer,
	cps: 0,
	cpc: 1,
	updateScore: (value: number) => {
		gameObj.score = value;
		scoreHtml.innerHTML = `Score: ${Math.round(gameObj.score)}`;
	},
	updateCps: (value: number) => {
		gameObj.cps = Math.round(value);
		cpsHtml.innerHTML = `Cookies/Sec: ${gameObj.cps}`;
	},
	updateCpc: (value: number) => {
		gameObj.cpc = Math.round(value);
		cpcHtml.innerHTML = `Cookies/Click: ${gameObj.cpc}`;
	},
};

/* Formatting */
const cookie: HTMLImageElement = document.querySelector('#cookie') as HTMLImageElement;
cookie.width = window.innerWidth / 3;

/* Event Listeners */
cookie.addEventListener('click', () =>{
	gameObj.score += gameObj.cpc;
	scoreHtml.innerHTML = `Score: ${gameObj.score}`;
})

/* Timed Events */
setInterval(() => {
	gameObj.updateScore(gameObj.score + gameObj.cps);
}, 1000)

/* Upgrades */
const cursor: Upgrade = new Upgrade("Cursors", 5, 1, 0, gameObj);
const grandma: Upgrade = new Upgrade("Grandmas", 10, 0, 1, gameObj);
const mine: Upgrade = new Upgrade("Cookie Mines", 20, 0, 3, gameObj);
const factory: Upgrade = new Upgrade("Factories", 10, 3, 6, gameObj);
