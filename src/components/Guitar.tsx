// Import the Guitar type definition from the types directory
import type { Guitar } from '../types';

// Define a TypeScript type for the props expected by the Guitar component
type GuitarProps = {
  guitar : Guitar,// Represents the individual guitar object with specific properties
  addToCart: (item: Guitar) => void; // Function to add the guitar to the shopping cart
};

// Guitar component: Displays individual guitar details and includes an "Add to Cart" button
export default function Guitar( { guitar, addToCart } : GuitarProps)  {

  // Destructure the guitar object to extract its properties for display
  const {name, image, description, price } = guitar;

  // Retun a JSX structure for rendering the guitar details along with the "Add to Cart" button
  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">

      {/* Guitar card: includes image, details, and action button */}
      <div className="col-4">
        <img
          className="img-fluid img-zoom"
          src={`/img/${image}.jpg`} // Display guitar image
          alt={`Image of ${name}`} // Accessible alternative text
        />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3> {/* Guitar name */}
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p> {/* Guitar price */}
        <button 
          type="button" 
          className="btn btn-dark w-100" 
          onClick={() => addToCart(guitar)} // Trigger addToCart function on button click
        >
          Agregar al Carrito
        </button>
      </div>

    </div>
  );
};
