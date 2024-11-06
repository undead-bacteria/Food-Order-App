import { useSelector } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import CartModal from "./components/CartModal";
import FormModal from "./components/FormModal";
import SuccessModal from "./components/SuccessModal";

function App() {
  // Access the cart state from the Redux store
  const isCartModalOpen = useSelector((state) => state.cart.isCartModalOpen);
  const isFormModalOpen = useSelector((state) => state.cart.isFormModalOpen);
  const isSuccessModalOpen = useSelector(
    (state) => state.cart.isSuccessModalOpen
  );
  return (
    <>
      <Header />
      <Main />
      {isCartModalOpen && <CartModal />}
      {isFormModalOpen && <FormModal />}
      {isSuccessModalOpen && <SuccessModal />}
    </>
  );
}

export default App;
