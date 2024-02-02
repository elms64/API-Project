
//Define array for storing cart items
export interface Cart {
    items: Array<CartItem>;
    
}

//Declare variables for cart attributes
export interface CartItem {
    product: string;
    name: string;
    price: number;
    quantity: number;
    id: number;
}