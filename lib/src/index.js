import axios from 'axios'

/**
 * @class PANELRIP
 * @classdesc PANELRIP
 * @param {Object} config
 * @param {String} config.key
 * 
 */
class PANELRIP {
    constructor(config = {}) {
        if(!config.key) {
            throw new Error('key is required');
        }

        this.key = config.key;
        this.baseURL = config.baseURL||"https://panel.rip/api/v2";
        this.headers = {
            "User-Agent": `panelrip-nodesdk/0.0.1`,
            "Content-Type": "application/x-www-form-urlencoded",
        };
        this._axios = axios.create({
            baseURL: this.baseURL,
            headers: this.headers,
            method: 'POST',
        });

        console.debug(`[PANELRIP SDK] initialized with key: ${this.key}`);
    }

    /**
     * @private
     * @method _request
     * @description Make a request to the API
     * @param {String} action
     * @param {Object} data
     * @returns {Promise}
     */

    async _request(action, data = {}) {
        return new Promise((resolve, reject) => {
            let body = new URLSearchParams();
            if(!this.key || !action)
                return reject(new Error('key or action is missing'));
            body.append('key', this.key);
            body.append('action', action);
            for(let key in data) {
                body.append(key, data[key]);
            }
            this._axios.post('/', body)
                .then(response => {
                    if(!response.data.error) {
                        resolve(response.data);
                    } else {
                        reject(new Error(response.data.error));
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    /**
     * @method balance
     * @description Get the balance of the account
     * @returns {Promise} {"balance": Number, "currency": String}
     */
    async balance() {
        return this._request('balance');
    }

    /**
     * @method services
     * @description Get all services
     * @returns {Promise} {"services": Array}
     */
    async services() {
        return this._request('services');
    }

    /**
     * @method order
     * @description Get an order by ID
     * @param {String} id - Order ID Can send multiple by separating with comma
     * @example client.order("4444,1337").then(console.log).catch(console.error);
     * @returns {Promise} {Object}
     */
    async order(id) {
        if(!id)
            throw new Error('id is required');
        return this._request('status', {order: id});
    }

    /**
     * @method refill_status
     * @description Get the status of a refill
     * @param {String} id 
     * @returns {"status": "Completed" }
     */
    async refill_status(id) {
        if(!id)
            throw new Error('id is required');
        return this._request('refill_status', {refill: id});
    } 

    /**
     * @method refill
     * @description Create a refill for an order
     * @param {String} Order id 
     * @returns {"refill": "id" }
     */
    async refill(id) {
        if(!id)
            throw new Error('id is required');
        return this._request('refill', {order: id});
    }


    /**
     * @method order_create
     * @description Order a service
     * @param {String} service - Service ID
     * @param {String} link - Link to page
     * @param {Number} quantity - Needed quantity
     * @param {Number} runs - Runs to deliver - DRIP FEED (optional)
     * @param {Number} interval - Interval in minutes - DRIP FEED (optional)
     * @returns {"order": "id" }
     */
    async order_create(service, link, quantity, runs, interval) {
        if(!service || !link || !quantity) {
            throw new Error('service, link, quantity is required');
        }
        return this._request('add', {service, link, quantity, runs, interval});
    }

}

export default PANELRIP;