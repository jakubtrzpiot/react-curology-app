import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { setCart } from '../redux/shoppingCartSlice';
import { Link } from 'react-router-dom';

import {
  remove,
  increment,
  decrement,
  sumTotal,
} from '../redux/shoppingCartSlice';

export default function ShoppingCart() {
  const shop = useSelector(cart => cart);
  const isOpen = shop.isOpen;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sumTotal());
  }, [shop.total]);
  useEffect(() => {
    shop.items.length > 0 ? dispatch(setCart(true)) : dispatch(setCart(false));
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-[1000]"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
          >
            {/* <div className="fixed inset-0 bg-opacity-75 transition-opacity"></div> */}
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden backdrop-blur-sm bg-black/20">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <div className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between ">
                          <h2
                            className="text-lg font-medium text-gray-900"
                            id="slide-over-title"
                          >
                            Shopping cart
                          </h2>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => dispatch(setCart(false))}
                            >
                              <span className="sr-only">Close panel</span>
                              <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {shop.items.length > 0 ? (
                                shop.items.map((item, id) => (
                                  <li className="flex py-6" key={id}>
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={item.image}
                                        alt={item.image}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#"> {item.name} </a>
                                          </h3>
                                          <p className="ml-4">
                                            $
                                            {Math.abs(
                                              parseFloat(
                                                item.price * item.quantity,
                                              ).toFixed(2),
                                            )}
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          Blue
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="custom-number-input h-11 w-32">
                                          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button
                                              data-action="decrement"
                                              className="border border-bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none "
                                              onClick={() =>
                                                dispatch(decrement(id))
                                              }
                                            >
                                              <span className="m-auto text-2xl font-thin">
                                                −
                                              </span>
                                            </button>
                                            <input
                                              type="number"
                                              className="outline-none focus:outline-none text-center w-full border-y border-bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none appearance-none"
                                              name="custom-input-number"
                                              value={item.quantity}
                                              readOnly
                                            ></input>
                                            <button
                                              data-action="increment"
                                              className="border border-bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                              onClick={() =>
                                                dispatch(increment(id))
                                              }
                                            >
                                              <span className="m-auto text-2xl font-thin">
                                                +
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-primary hover:text-indigo-500"
                                            onClick={() => dispatch(remove(id))}
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))
                              ) : (
                                <div className="text-center py-16">
                                  Cart is currently empty
                                </div>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>${Math.abs(shop.total).toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            onClick={() => dispatch(setCart(false))}
                            to="/checkout"
                            className={`flex items-center justify-center rounded-md border border-transparent bg-primary transition px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 ${
                              shop.items.length > 0
                                ? ''
                                : 'opacity-50 pointer-events-none'
                            }`}
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{' '}
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => dispatch(setCart(false))}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
