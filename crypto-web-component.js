const template = `
<style>
    div.container {
        text-align: center;
        width: 30%;
        background-color: antiquewhite;
        border-radius: 25px;
        padding: 20px;
        margin: auto;
    }
    input {
        margin-top: 12px;
        display: inline-block;
        border-radius: 25px;
        padding: 9px 9px 9px 12px;
        color: #f7931a;
        font-weight: 600;
        border-style: inset;
        width: inherit;
        min-width: 115px;
    }
    p {
        font-family: Georgia, serif;
        font-size: 24px;
        color: #f7931a;
        text-align: center;
    }
    button {
        background-color: #f7931a;
        color: mintcream;
        margin-top: 12px;
        border-radius: 25px;
        font-family: Georgia, serif;
        font-size: 16px;
        padding: 8px;
        border-style: none;
    }
    img {
        height: 75px;
    }
</style>
<div class='container'>
    <img src="data:image/png;base64,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" />
    <br>
    <input list='cryptocurrencies' id='cryptocurrency'>
    <datalist id='cryptocurrencies'>
    </datalist>
    <button disabled='true' id='fetchCryptoValue'>Fetch a cryptocurrency</button>
    <div id='cryptovalue' hidden='true'>
    </div>
</div>`;

class CryptoWebComponent extends HTMLElement {
    cryptoCurrency = '';
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
        this.fetchDataListOptions();
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#fetchCryptoValue')
            .addEventListener('click', this.fetchCryptoCurrency.bind(this));
        this.shadowRoot.querySelector('#cryptocurrency')
            .addEventListener('input', this.activateButton.bind(this));
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#fetchCryptoValue')
            .removeEventListener();
        this.shadowRoot.querySelector('#cryptocurrency')
            .removeEventListener();
    }

    async fetchDataListOptions() {
        var uri = 'https://api.exchange.coinbase.com/currencies';
        var response = await fetch(uri, {
            method: 'GET'
        }).then(data => data.json())
          .catch(err => console.log(err));

        var datalist = this.shadowRoot.querySelector('#cryptocurrencies');

        response.forEach(crypto => {
            const option = document.createElement('option');
            option.value = crypto.id;
            option.innerText = `${crypto.name} - ${crypto.id}`;
            datalist.appendChild(option);
        });
    }

    async fetchCryptoCurrency() {
        var uri = `https://api.exchange.coinbase.com/products/${this.cryptoCurrency}-usd/ticker`;
        var response = await fetch(uri, {
            method: 'GET'
        }).then(data => data.json());
        
        const div = this.shadowRoot.querySelector('#cryptovalue');
        const para = document.createElement('p');
        para.innerHTML = response.message ?
            `There was an error fetching ${this.cryptoCurrency} from Coinbase.` :
            this.formatter.format(response.price * 100 / 100);
        if (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        div.appendChild(para);
        div.hidden = false;
    }

    activateButton() {
        const div = this.shadowRoot.querySelector('#cryptovalue');
        div.innerHTML = '';
        div.hidden = true;
        const selection = this.shadowRoot.querySelector('#cryptocurrency');
        this.cryptoCurrency = selection.value;
        if (this.cryptoCurrency) {
            this.shadowRoot.querySelector('#fetchCryptoValue').disabled = false;
        } else {
            this.shadowRoot.querySelector('#fetchCryptoValue').disabled = true;
        }
    }

    formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
}

window.customElements.define('crypto-web-component', CryptoWebComponent);

if(typeof exports === "object") {
    module.exports.CryptoWebComponent = CryptoWebComponent;
}