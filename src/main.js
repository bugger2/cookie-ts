import { Upgrade } from "./upgrades.js";
/* Variable Declaration */
const upgradeContainer = document.querySelector('#upgrade-container');
const scoreHtml = document.querySelector('#score');
const cpsHtml = document.querySelector('#cps');
const cpcHtml = document.querySelector('#cpc');
let gameObj = {
    score: 0,
    upgradeContainer: upgradeContainer,
    cps: 0,
    cpc: 1,
    updateScore: (value) => {
        gameObj.score = value;
        scoreHtml.innerHTML = `Score: ${Math.round(gameObj.score)}`;
    },
    updateCps: (value) => {
        gameObj.cps = Math.round(value);
        cpsHtml.innerHTML = `Cookies/Sec: ${gameObj.cps}`;
    },
    updateCpc: (value) => {
        gameObj.cpc = Math.round(value);
        cpcHtml.innerHTML = `Cookies/Click: ${gameObj.cpc}`;
    },
};
/* Formatting */
const cookie = document.querySelector('#cookie');
cookie.width = window.innerWidth / 3;
/* Event Listeners */
cookie.addEventListener('click', () => {
    gameObj.score += gameObj.cpc;
    scoreHtml.innerHTML = `Score: ${gameObj.score}`;
});
/* Timed Events */
setInterval(() => {
    gameObj.updateScore(gameObj.score + gameObj.cps);
}, 1000);
/* Upgrades */
const cursor = new Upgrade("Cursors", 5, 1, 0, gameObj);
const grandma = new Upgrade("Grandmas", 10, 0, 1, gameObj);
const mine = new Upgrade("Cookie Mines", 20, 0, 3, gameObj);
const factory = new Upgrade("Factories", 10, 3, 6, gameObj);
