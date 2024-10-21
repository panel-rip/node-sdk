import PANELRIP from './lib/src/index.js';

const client = new PANELRIP({
    key: "YOUR_API_KEY_GENERATED_FROM_PANEL.RIP"
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
