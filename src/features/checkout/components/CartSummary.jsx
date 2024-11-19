import React from 'react';
import { Link } from 'react-router-dom';

function CartSummary({ cartItems }) {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Tóm tắt giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Giỏ hàng của bạn trống.</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-2 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x {item.price.toLocaleString()} VND
                    </p>
                  </div>
                </div>
                <p className="font-semibold">{(item.quantity * item.price).toLocaleString()} VND</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right">
            <p className="font-semibold">Tổng cộng: {totalPrice.toLocaleString()} VND</p>
            <Link
              to="/checkout"
              className="mt-2 inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Tiến hành thanh toán
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartSummary;
