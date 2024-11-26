// Define the Guitar type to represent the structure of a guitar object in the application
export type Guitar = {
  id: number; // Unique identifier for the guitar
  name: string; // Name of the guitar model
  image: string; // URL or path to the guitar's image
  description: string; // A brief description of the guitar
  price: number; // Price of the guitar in numeric format
};
// extends
export type CartItem = Guitar & {  
  quantity: number; // Quantity of the guitar in the cart
};

//Utility Types
// export type CartItem = Pick<Guitar. 'id' | 'name' | 'price'> & {
//   quantity:number
// }

// export type CartItem = Omit<Guitar. 'id' | 'name' | 'price'> & {
//   quantity:number
// }