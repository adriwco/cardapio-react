import { createContext, useState } from "react";
const CartContext = createContext();
function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

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
    CalcTotal(cartItensNovo);
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
    CalcTotal(cartItensNovo);
  }

  function CalcTotal(items) {
    let tot = 0;
    for (let item of items) {
      tot = tot + item.preco * item.qtd;
      setTotalCart(tot);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        AddItemCard,
        RemoveItemCard,
        totalCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
