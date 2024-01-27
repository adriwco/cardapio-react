import { createContext, useState } from "react";
const CartContext = createContext();
function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function AddItemCard(item) {
    let cartItensNovo = [];
    let findItem = false;
    // verificar se já existe
    for (let prod of cartItems) {
      // existe
      if (prod.id == item.id) {
        item.qtd = prod.qtd + 1;
        findItem = true;
        cartItensNovo.push(item);
      } else {
        cartItensNovo.push(prod);
      }
    }
    // não existe ou primeiro
    if (findItem == false || cartItems.length == 0) {
      cartItensNovo.push(item);
    }
    setCartItems(cartItensNovo); // setCartItems([...cartItems, item]);
  }

  function RemoveItemCard(id) {
    let cartItensNovo = [];
    // localizar e atualizar
    for (let prod of cartItems) {
      // existe
      if (prod.id == id) {
        prod.qtd = prod.qtd - 1;
      }
      cartItensNovo.push(prod);
    }
    // Remover Item = 0
    cartItensNovo = cartItensNovo.filter((item) => {
      return item.qtd > 0;
    });

    setCartItems(cartItensNovo); // setCartItems([...cartItems, item]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, AddItemCard, RemoveItemCard }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
