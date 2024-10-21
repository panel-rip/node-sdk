<h1 align="center">Welcome to @panel-rip/node-sdk 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://panel.rip/blog" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MPL 2.0" src="https://img.shields.io/badge/License-MPL 2.0-yellow.svg" />
  </a>
  <a href="https://twitter.com/hiizunfr" target="_blank">
    <img alt="Twitter: hiizunfr" src="https://img.shields.io/twitter/follow/hiizunfr.svg?style=social" />
  </a>
</p>

>  Panel.Rip's public NodeJS SDK for developers and resellers. 

### 🏠 [Homepage](https://panel.rip)

### ✨ [Demo](https://panel.rip)

## Install

```sh
npm i @panel-rip/node-sdk
```

## Usage

```js
import panelrip from '@panel-rip/node-sdk'

const client = new panelrip({
    key: "YOUR API KEY GENERATED FROM PANEL.RIP" // https://panel.rip/account
})

// get balance
client.balance().then(console.log).catch(console.error);
/*
{balance: 100, currency: "USD"}
*/

// get services
client.services().then(console.log).catch(console.error);
/*
[
...  
{
    rate: '0.02',
    service: '308',
    category: '📱 Telegram Post Views',
    name: 'Telegram Post Views | No Refill | Max 3M | TEST SERVER',
    type: 'Default',
    min: '10',
    max: '3000000'
  },
  ...
  ]
  */

// get order status
client.order("ORDER ID").then(console.log).catch(console.error);
/*
{
  charge: '0.39',
  start_count: '0',
  status: 'Completed',
  remains: '0',
  currency: 'EUR'
}
*/


// order on panel.rip
client.order_create("308", "https://t.me/@panel.rip", 1000).then(console.log).catch(console.error);
/*
{order: "order id"}
*/

// get refill status
client.refill_status("refill id").then(console.log).catch(console.error);
/*
{status: "Completed"}
*/

// create refill
client.refill("order id").then(console.log).catch(console.error);
/*
{refill: "refill id"}
*/
```

## Author

👤 **HiiZun <hiizun@panel.rip>**

* Website: http://hiizun.fr
* Twitter: [@hiizunfr](https://twitter.com/hiizunfr)
* Github: [@HiiZun](https://github.com/HiiZun)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/panel-rip/node-sdk/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_