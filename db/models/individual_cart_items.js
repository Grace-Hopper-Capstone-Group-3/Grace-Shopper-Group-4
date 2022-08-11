const client = require("../client");

async function createIndividualCartItem({productId, priceAtPurchase, cartId, quantity}) {
    try {
        const {rows: [item]} = await client.query(`
        INSERT INTO individual_cart_items(product_id, price_at_purchase, cart_id, quantity)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `, [productId, priceAtPurchase, cartId, quantity]);
        return item;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getAllIndividualCartItems(){
    try {
        const {rows} = await client.query(`
        SELECT *
        FROM individual_cart_items;
        `);
        return rows;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    createIndividualCartItem,
    getAllIndividualCartItems,
}