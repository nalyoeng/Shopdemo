import { motion, AnimatePresence } from "framer-motion";

const CartSidebar = ({ isCartOpen, setIsCartOpen, cartItems, onRemove }) => {
  const empty = cartItems.length === 0;

  const total = cartItems.reduce((acc, item) => {
    if (!item || !item.price) return acc; // skip invalid items
    return acc + Number(item.price);
  }, 0);


  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">My Cart ({cartItems.length})</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-600 text-2xl">&times;</button>
            </div>

            {/* Cart body */}
            <div className="flex-1 p-4 overflow-y-auto">
              {empty ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">${item.price}</p>
                      </div>
                      <button
                        onClick={() => onRemove(index)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {!empty && (
              <div className="p-4 border-t">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <button
                  className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-800"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
