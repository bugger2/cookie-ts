export class Upgrade {
    innerName;
    displayName;
    price;
    cpc;
    cps;
    amount;
    container;
    amountHtml;
    priceHtml;
    constructor(displayName, price, cpc, cps, gameObj) {
        this.displayName = displayName;
        this.innerName = displayName.split(" ").join("");
        this.price = price;
        this.cpc = cpc;
        this.cps = cps;
        this.amount = 0;
        this.container = document.createElement("div");
        this.container.classList.add("row-12");
        this.container.classList.add("d-flex");
        this.container.classList.add("justify-content-between");
        this.container.classList.add("align-items-center");
        this.container.classList.add("border-dark");
        this.container.classList.add("border-top");
        this.container.classList.add("border-bottom");
        this.container.innerHTML = `
			<h1 class="col-3">${this.displayName}</h1>
			<div class="col-2">
				<p id="amount-${this.innerName}">Amount: 0</p>
				<p id="price-${this.innerName}">Price: ${this.price}</p>
			</div>
			<div class="col-3">
				<p id="cps-${this.innerName}">Cookies/Sec: ${this.cps}</p>
				<p id="cpc-${this.innerName}">Cookies/Click: ${this.cpc}</p>
			</div>
			<button type="button" id="button-${this.innerName}" class="btn-lg btn-primary col-4">Buy</button>`;
        document.addEventListener("DOMContentLoaded", () => {
            const button = document.getElementById(`button-${this.innerName}`);
            button.addEventListener('click', () => {
                this.buy(gameObj);
            });
        });
        this.amountHtml = this.container.querySelector(`#amount-${this.innerName}`);
        this.priceHtml = this.container.querySelector(`#price-${this.innerName}`);
        gameObj.upgradeContainer.appendChild(this.container);
    }
    buy(gameObj) {
        if (gameObj.score >= this.price) {
            gameObj.updateScore(Math.round(gameObj.score - this.price));
            gameObj.updateCpc(Math.round(gameObj.cpc + this.cpc));
            gameObj.updateCps(Math.round(gameObj.cps + this.cps));
            gameObj.cps += this.cps;
            gameObj.cpc += this.cpc;
            this.amount++;
            this.price = Math.trunc(this.price * 1.28);
            this.amountHtml.innerHTML = `Amount: ${this.amount}`;
            this.priceHtml.innerHTML = `Price: ${this.price}`;
        }
    }
}
