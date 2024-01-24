import { useEffect, useState } from "react";
import { Dock } from "react-dock";

export default function Cart() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("openSidebar", function () {
      setShow(true);
    });
  }, []);

  return (
    <Dock
      position="right"
      isVisible={show}
      fluid={false}
      size={420}
      onVisibleChange={(visible) => {
        setShow(visible);
      }}
    >
      <aside>
        <h1>Meu Pedido</h1>
      </aside>
    </Dock>
  );
}
