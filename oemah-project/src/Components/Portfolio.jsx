import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="text-gray-600">Catalogue</div>
                <div className="text-gray-800 font-medium">Revano Satria</div>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <div className="flex flex-col space-y-2 mr-4">
                                <img src="./images/catalog3.jpg" alt="Thumbnail 1" className="w-20 h-20 object-cover rounded-lg" />
                                <img src="./images/catalog4.jpg" alt="Thumbnail 2" className="w-20 h-20 object-cover rounded-lg" />
                                <img src="./images/catalog5.jpg" alt="Thumbnail 3" className="w-20 h-20 object-cover rounded-lg" />
                                <img src="./images/catalog7.jpg" alt="Thumbnail 4" className="w-20 h-20 object-cover rounded-lg" />
                            </div>
                            <img src="./images/catalog2.jpg" alt="Main product image" className="w-96 h-96 object-cover rounded-lg" />
                        </div>
                    </div>

                </div>
                <div className="w-1/2 pl-8">
                    <h1 className="text-3xl font-bold mb-2">Revano Satria</h1>
                    <p className="text-xl text-gray-700 mb-2">Rp 250.000,00 - 2.000.000,00*</p>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-500">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                        <span className="text-gray-600 ml-2">20 Customer Review</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="mb-4">
                        <span className="text-gray-600">Tag:</span>
                        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full ml-2">Industrial</span>
                        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full ml-2">Minimalis</span>
                    </div>
                    {/* <button className="bg-yellow-600 text-white w-full max-w-2xl py-4 rounded-lg text-lg hover:bg-yellow-700 transition duration-200">Chat Now</button> */}
                    <Link to="/chat">
                        <button className="bg-yellow-600 text-white w-full max-w-2xl py-4 rounded-lg text-lg hover:bg-yellow-700 transition duration-200">
                            Chat Now
                        </button>
                    </Link>
                    <div className="mt-4">
                        <span className="text-gray-600">Category</span>
                        <div className="flex space-x-2 mt-2">
                            <button className="bg-yellow-600 text-white px-4 py-2 rounded-full">3 x 3</button>
                            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">4 x 4</button>
                            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">5 x 5</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t mt-8 pt-4">
                <div className="flex space-x-8 mb-4 justify-center">
                    <div className="text-gray-800 font-medium text-center text-xl">Description</div>
                    <div className="text-gray-600 text-center text-xl">
                        <Link to="/review" className="hover:underline">
                            Reviews
                        </Link>
                    </div>
                </div>
                <p className="text-gray-600 mb-4 text-center text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center">
                    <div className="w-full h-80">
                        <img src="./images/catalog3.jpg" alt="Description image 1" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-full h-80">
                        <img src="./images/catalog4.jpg" alt="Description image 2" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {['Ava Morgan', 'Noah Blake', 'Mia Harper', 'Lucas Henry'].map((name, idx) => (
                        <div key={idx} className="bg-white shadow rounded-lg overflow-hidden">
                            <img src={`./images/catalog${idx + 12}.jpg`} alt={`${name}`} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{name}</h3>
                                <p className="text-gray-600">Industrial</p>
                                <p className="text-gray-800 font-bold">Rp500.000,00</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    <button className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-lg hover:bg-yellow-600 hover:text-white transition duration-200">
                        Show More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
