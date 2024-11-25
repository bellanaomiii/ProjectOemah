import React from 'react';

function DetailPayment() {
  const paymentMethods = [
    { name: 'BCA Virtual Account', image: './images/bca.jpg' },
    { name: 'BNI Virtual Account', image: './images/bni.png' },
    { name: 'Mandiri Virtual Account', image: './images/mandiri.png' },
    { name: 'BRI Virtual Account', image: './images/bri.png' },
    { name: 'Sea Bank', image: './images/seabank.png' },
    { name: 'QRIS', image: './images/qr.png' },
  ];

  return (
    <div>
      <div className="bg-[url('./images/header.png')] bg-cover bg-center h-48 flex items-center justify-center font-sans">
        <h1 className="text-3xl font-bold text-black">Checkout</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between p-8 bg-white font-sans">
        <div className="w-full md:w-1/2 p-4 border-r-2">
          <h2 className="text-xl font-semibold mb-4">Select Payment Method :</h2>
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 bg-cover rounded-s"
                    style={{ backgroundImage: `url(${method.image})` }}
                  ></div>
                  <span className="text-lg">{method.name}</span>
                </div>
                <input type="radio" name="paymentMethod" className="form-radio h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Product</h2>
          <div className="flex items-center justify-between border-b-2 pb-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-gray-200">
              <img src="./images/catalog14.jpg" alt="Asgaard Sofa" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Asgaard sofa</h3>
                <p>1 x <span className="text-yellow-600 font-semibold">Rp 250.000,00</span></p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <span className="text-lg">Subtotal</span>
            <span className="text-yellow-600 text-lg font-semibold">Rp 250.000,00</span>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between text-red-600 mb-4">
  <h2 className="text-lg font-semibold">Payment Before</h2>
  <div className="text-xl font-bold">10:00</div>
</div>
      
      <div className="p-4 border rounded-lg flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <img
            src="./images/bca.jpg"
            alt="BCA Logo"
            className="w-12 h-12 object-cover rounded"
          />
          <div>
            <h3 className="text-md font-bold">BCA Virtual Account</h3>
            <p className="text-gray-600 text-sm">No. Rek/Virtual Account</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-blue-600 font-semibold text-lg">
          <span>8806 082 22875 38201</span>
          <button
            onClick={() => navigator.clipboard.writeText("88060822287538201")}
            className="text-green-500 font-medium hover:underline"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPayment;