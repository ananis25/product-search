// credits - https://lucide.dev/icon/laptop?search=laptop
function LaptopIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="inline"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
    </svg>
  );
}

function LinkAtBottom() {
  return (
    <div class="sm:mx-auto sm:w-96">
      <a
        class="block py-5 px-10 w-full text-xl leading-6 text-body font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
        href="#"
      >
        More products
      </a>
    </div>
  );
}

export function Page() {
  return (
    <div class="pt-12 pb-24 2xl:pb-44 bg-gray-100">
      <div className="max-w-5xl mx-auto my-2">
        <h1 className="text-4xl my-6 font-bold">Laptop picker</h1>
        <h2 className="text-2xl font-semibold">
          Find your perfect laptop{" "}
          <span role="img">
            <LaptopIcon />
          </span>
        </h2>
        <section>
          <div class="pt-12 pb-24 2xl:pb-44 bg-blueGray-100">
            <div class="container px-4 mx-auto">
              <div class="flex flex-wrap py-5 mb-14 xl:mb-16 border-y border-black border-opacity-10">
                <div class="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    class="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Category</span>
                    <svg
                      class="relative top-px ml-6"
                      width="8"
                      height="5"
                      viewbox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    class="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Size</span>
                    <svg
                      class="relative top-px ml-6"
                      width="8"
                      height="5"
                      viewbox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    class="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Colors</span>
                    <svg
                      class="relative top-px ml-6"
                      width="8"
                      height="5"
                      viewbox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    class="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Price</span>
                    <svg
                      class="relative top-px ml-6"
                      width="8"
                      height="5"
                      viewbox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div class="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
                  <a
                    class="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl"
                    href="#"
                  >
                    <span>Brand</span>
                    <svg
                      class="relative top-px ml-6"
                      width="8"
                      height="5"
                      viewbox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="sm:flex sm:flex-wrap mb-24">
                <div class="order-1 sm:pl-3 mb-10 sm:mb-0 sm:w-1/2 lg:w-4/12 xl:w-3/12">
                  <div class="p-10 xl:p-12 xl:pt-10 mb-6 bg-white rounded-3xl">
                    <h2 class="mb-8 text-3xl leading-9 font-heading font-medium">
                      Category
                    </h2>
                    <a
                      class="block mb-5 hover:text-darkBlueGray-400 font-heading font-medium"
                      href="#"
                    >
                      Best seller
                    </a>
                    <a
                      class="block mb-5 hover:text-darkBlueGray-400 font-heading font-medium"
                      href="#"
                    >
                      New in
                    </a>
                    <a
                      class="flex items-center justify-between mb-5 hover:text-darkBlueGray-400 font-heading font-medium"
                      href="#"
                    >
                      <span>Smartphone</span>
                      <span class="text-sm text-gray-300">267</span>
                    </a>
                    <a
                      class="flex items-center justify-between mb-5 hover:text-darkBlueGray-400 font-heading font-medium"
                      href="#"
                    >
                      <span>Laptop</span>
                      <span class="text-sm text-gray-300">100</span>
                    </a>
                    <a
                      class="flex items-center justify-between mb-9 hover:text-darkBlueGray-400 font-heading font-medium"
                      href="#"
                    >
                      <span>Headphones</span>
                      <span class="text-sm text-gray-300">240</span>
                    </a>
                    <a
                      class="flex items-center pb-1 text-xl text-green-500 hover:text-green-600 font-bold tracking-tight max-w-max border-b border-green-600 hover:border-green-700"
                      href="#"
                    >
                      <span class="mr-5">See all</span>
                      <svg
                        width="14"
                        height="17"
                        viewbox="0 0 14 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 11.3L6.5 15.5L6.5 1.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M1.5 11.5L6.5 15.5"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="p-10 pb-8 xl:p-12 xl:pb-8 xl:pt-10 mb-6 bg-white rounded-3xl">
                    <h2 class="mb-6 text-3xl leading-9 font-heading font-medium">
                      Colors
                    </h2>
                    <div class="flex flex-wrap max-w-xs">
                      <div class="p-1 m-2 max-w-max border border-gray-300 rounded-full">
                        <a
                          class="block w-5 h-5 bg-blue-400 rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div class="p-1 m-2 max-w-max border border-opacity-0 rounded-full">
                        <a
                          class="block w-5 h-5 bg-orange-400 rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div class="p-1 m-2 max-w-max border border-opacity-0 rounded-full">
                        <a
                          class="block w-5 h-5 bg-black rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div class="p-1 m-2 max-w-max border border-opacity-0 rounded-full">
                        <a
                          class="block w-5 h-5 bg-red-400 rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div class="p-1 m-2 max-w-max border border-opacity-0 rounded-full">
                        <a
                          class="block w-5 h-5 bg-green-400 rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div class="p-1 m-2 max-w-max border border-opacity-0 rounded-full">
                        <a
                          class="block w-5 h-5 bg-purple-400 rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div class="p-1 m-2 max-w-max border border-opacity-0 rounded-full">
                        <a
                          class="block w-5 h-5 bg-yellow-400 rounded-full"
                          href="#"
                        ></a>
                      </div>
                      <div class="p-1 m-2 max-w-max border border-opacity-0 rounded-full">
                        <a
                          class="block w-5 h-5 bg-white rounded-full"
                          href="#"
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="p-10 xl:p-12 xl:pt-10 mb-6 bg-white rounded-3xl">
                    <h2 class="mb-10 text-3xl leading-9 font-heading font-medium">
                      Price
                    </h2>
                    <div class="relative mb-16 h-1 bg-blueGray-100">
                      <div class="relative left-0">
                        <a
                          class="absolute -top-2 left-0 z-10 transform -translate-y-px w-6 h-6 bg-white rounded-full shadow-5xl"
                          href="#"
                        ></a>
                        <div class="absolute -left-3 top-10 max-w-max">
                          <svg
                            class="absolute left-1/2 transform -translate-x-1/2 -top-2 z-10"
                            width="14"
                            height="11"
                            viewbox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.41519 1.05873C6.21579 0.0187157 7.78421 0.0187151 8.58481 1.05873L13.1815 7.03001C14.1939 8.34515 13.2564 10.25 11.5967 10.25H2.40331C0.743631 10.25 -0.1939 8.34515 0.818494 7.03001L5.41519 1.05873Z"
                              fill="#edf1f8"
                            ></path>
                          </svg>
                          <div class="flex items-center justify-center px-3 py-1 font-heading font-medium bg-blueGray-100 rounded-lg">
                            $10
                          </div>
                        </div>
                      </div>
                      <div class="relative left-24 transform -translate-y-px max-w-max">
                        <a
                          class="absolute -top-2 left-0 transform -translate-y-px w-6 h-6 bg-blue-500 rounded-full shadow-5xl"
                          href="#"
                        >
                          <img
                            class="absolute -left-20 top-2 max-w-max"
                            src="uinel-assets/elements/ecommerce-product-list/toggle-bg-blue.svg"
                            alt=""
                          />
                        </a>
                        <div class="absolute -left-6 transform translate-x-2 translate-y-px top-10 max-w-max">
                          <svg
                            class="absolute left-1/2 transform -translate-x-1/2 -top-2 z-10"
                            width="14"
                            height="11"
                            viewbox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.41519 1.05873C6.21579 0.0187157 7.78421 0.0187151 8.58481 1.05873L13.1815 7.03001C14.1939 8.34515 13.2564 10.25 11.5967 10.25H2.40331C0.743631 10.25 -0.1939 8.34515 0.818494 7.03001L5.41519 1.05873Z"
                              fill="#edf1f8"
                            ></path>
                          </svg>
                          <div class="flex items-center justify-center px-3 py-1 font-heading font-medium bg-blueGray-100 rounded-lg">
                            $99
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-10 xl:pt-8 mb-6 bg-purple-500 rounded-3xl">
                    <h2 class="mb-5 text-3xl leading-9 text-white font-heading font-medium">
                      Size
                    </h2>
                    <div class="sm:flex sm:flex-wrap">
                      <div class="p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/2 2xl:w-1/3">
                        <a
                          class="block py-5 px-4 text-center font-heading font-medium bg-white hover:bg-gray-50 rounded-3xl"
                          href="#"
                        >
                          32GB
                        </a>
                      </div>
                      <div class="p-1 w-full sm:w-1/2 md:w-1/3 lg:w-1/2 2xl:w-1/3">
                        <a
                          class="block py-5 px-4 text-center font-heading font-medium bg-white hover:bg-gray-50 rounded-3xl"
                          href="#"
                        >
                          64GB
                        </a>
                      </div>
                      <div class="p-1 w-full md:w-1/3 lg:w-full 2xl:w-1/3">
                        <a
                          class="block py-5 px-4 text-white text-center font-heading font-medium bg-indigo-400 hover:bg-indigo-500 rounded-3xl"
                          href="#"
                        >
                          128GB
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="p-10 px-5 bg-white rounded-3xl">
                    <h2 class="px-5 xl:px-10 mb-6 text-3xl leading-9 font-heading font-medium">
                      Location
                    </h2>
                    <a
                      class="flex items-center py-4 px-10 mb-3 leading-8 font-heading font-medium bg-white border border-gray-100 rounded-3xl"
                      href="#"
                    >
                      <span class="mr-6">
                        <svg
                          width="27"
                          height="27"
                          viewbox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="27"
                            height="27"
                            rx="8"
                            fill="#28E172"
                          ></rect>
                          <path
                            d="M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>Europe</span>
                    </a>
                    <a
                      class="flex items-center py-4 px-10 leading-8 font-heading font-medium bg-white border border-gray-100 rounded-3xl"
                      href="#"
                    >
                      <button class="mr-6">
                        <svg
                          width="27"
                          height="27"
                          viewbox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="26"
                            height="26"
                            rx="5.5"
                            fill="white"
                            stroke="#DBDDE1"
                          ></rect>
                        </svg>
                      </button>
                      <span>United States</span>
                    </a>
                  </div>
                </div>
                <div class="sm:pr-3 w-full sm:w-1/2 lg:w-8/12 xl:w-9/12">
                  <div class="w-full mb-4">
                    <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 bg-white rounded-3xl">
                      <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                        <a class="block mx-auto max-w-max" href="#">
                          <img
                            class="h-48 object-cover"
                            src="uinel-assets/images/ecommerce-product-list/headphones-sony.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="xl:w-8/12">
                        <div class="xl:flex xl:justify-between xl:items-start mb-4 xl:mb-20">
                          <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                            <a href="#">
                              <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                                Headphones SONY 1l X-O
                              </p>
                              <p class="text-darkBlueGray-400">
                                The nulla commodo, commodo eros a lor, tristique
                                lectus lorem sad 128 GB silver.
                              </p>
                            </a>
                          </div>
                          <p class="flex items-center xl:justify-end xl:pl-3 xl:w-4/12 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                            <span class="mr-2 text-xs">$</span>
                            <span>44.90</span>
                          </p>
                        </div>
                        <div class="flex flex-wrap items-center">
                          <div class="w-1/2 xl:w-6/12">
                            <div class="flex items-center">
                              <h3 class="mr-4 font-heading font-medium tracking-tighter">
                                Color:
                              </h3>
                              <div class="mr-2 max-w-max border border-gray-300 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-white rounded-full"
                                  href="#"
                                ></a>
                              </div>
                              <div class="p-1 max-w-max border border-gray-300 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-gray-400 rounded-full"
                                  href="#"
                                ></a>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/2 xl:w-2/12">
                            <svg
                              class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                              width="27"
                              height="27"
                              viewbox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_476_640)">
                                <path
                                  d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </g>
                              <defs>
                                <clippath id="clip0_476_640">
                                  <rect
                                    width="27"
                                    height="27"
                                    fill="white"
                                  ></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </div>
                          <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                            <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                              <a
                                class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                              >
                                Add to bag
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full mb-4">
                    <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 bg-white rounded-3xl">
                      <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                        <a class="block mx-auto max-w-max" href="#">
                          <img
                            class="h-48 object-cover"
                            src="uinel-assets/images/ecommerce-product-list/iphone-12-pro.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="xl:w-8/12">
                        <div class="xl:flex sm:justify-between xl:items-start mb-4 xl:mb-20">
                          <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                            <a href="#">
                              <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                                Apple iPhone 12 Pro (128GB) Silver
                              </p>
                              <p class="text-darkBlueGray-400">
                                The nulla commodo, commodo eros a lor, tristique
                                lectus lorem sad 128 GB silver.
                              </p>
                            </a>
                          </div>
                          <div class="xl:pl-3 xl:w-4/12">
                            <div class="flex items-center xl:justify-end">
                              <p class="mr-4 flex items-center text-xl text-blue-500 font-heading font-medium tracking-tighter">
                                <span class="mr-2 text-xs">$</span>
                                <span>231.90</span>
                              </p>
                              <p class="relative flex items-center text-base text-gray-300 font-heading font-medium tracking-tighter">
                                <span>$ 231.90</span>
                                <span class="absolute left-1/2 transform -translate-x-1/2 h-px w-16 bg-darkBlueGray-400"></span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap items-center">
                          <div class="w-1/2 xl:w-6/12">
                            <div class="flex items-center">
                              <h3 class="mr-4 font-heading font-medium tracking-tighter">
                                Color:
                              </h3>
                              <div class="p-1 mr-1 max-w-max border border-gray-300 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-white border rounded-full"
                                  href="#"
                                ></a>
                              </div>
                              <div class="p-1 mr-1 max-w-max border border-gray-300 border-opacity-0 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-gray-400 rounded-full"
                                  href="#"
                                ></a>
                              </div>
                              <div class="p-1 mr-1 max-w-max border border-gray-300 border-opacity-0 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-darkBlueGray-400 rounded-full"
                                  href="#"
                                ></a>
                              </div>
                              <div class="p-1 max-w-max border border-gray-300 border-opacity-0 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-yellow-400 rounded-full"
                                  href="#"
                                ></a>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/2 xl:w-2/12">
                            <svg
                              class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                              width="27"
                              height="27"
                              viewbox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_476_640)">
                                <path
                                  d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </g>
                              <defs>
                                <clippath id="clip0_476_640">
                                  <rect
                                    width="27"
                                    height="27"
                                    fill="white"
                                  ></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </div>
                          <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                            <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                              <a
                                class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                              >
                                Add to bag
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full mb-4">
                    <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 bg-white rounded-3xl">
                      <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                        <a class="block mx-auto max-w-max" href="#">
                          <img
                            class="h-48 object-cover"
                            src="uinel-assets/images/ecommerce-product-list/smartwatch-yellow.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="xl:w-8/12">
                        <div class="xl:flex xl:justify-between xl:items-start mb-4 xl:mb-20">
                          <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                            <a href="#">
                              <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                                Xui Smartwatch YW
                              </p>
                              <p class="text-darkBlueGray-400">
                                The nulla commodo, commodo eros a lor, tristique
                                lectus lorem sad 128 GB silver.
                              </p>
                            </a>
                          </div>
                          <p class="flex items-center xl:justify-end xl:pl-3 xl:w-4/12 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                            <span class="mr-2 text-xs">$</span>
                            100.90
                          </p>
                        </div>
                        <div class="flex flex-wrap items-center">
                          <div class="w-1/2 xl:w-6/12">
                            <div class="flex items-center">
                              <h3 class="mr-4 font-heading font-medium tracking-tighter">
                                Color:
                              </h3>
                              <div class="mr-2 max-w-max rounded-full">
                                <a
                                  class="block w-4 h-4 bg-purple-400 rounded-full"
                                  href="#"
                                ></a>
                              </div>
                              <div class="p-1 max-w-max border border-gray-300 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-yellow-400 rounded-full"
                                  href="#"
                                ></a>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/2 xl:w-2/12">
                            <svg
                              class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                              width="27"
                              height="27"
                              viewbox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_476_640)">
                                <path
                                  d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </g>
                              <defs>
                                <clippath id="clip0_476_640">
                                  <rect
                                    width="27"
                                    height="27"
                                    fill="white"
                                  ></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </div>
                          <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                            <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                              <a
                                class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                              >
                                Add to bag
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full mb-4">
                    <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 bg-white rounded-3xl">
                      <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                        <a class="block mx-auto max-w-max" href="#">
                          <img
                            class="h-48 object-cover"
                            src="uinel-assets/images/ecommerce-product-list/macbook-pro-17.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="xl:w-8/12">
                        <div class="xl:flex xl:justify-between xl:items-start mb-4 xl:mb-20">
                          <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                            <a href="#">
                              <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                                MacBook Pro 17&rsquo;&rsquo;
                              </p>
                              <p class="text-darkBlueGray-400">
                                The nulla commodo, commodo eros a lor, tristique
                                lectus lorem sad 128 GB silver.
                              </p>
                            </a>
                          </div>
                          <p class="flex items-center xl:justify-end xl:pl-3 xl:w-4/12 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                            <span class="mr-2 text-xs">$</span>
                            <span>1999.90</span>
                          </p>
                        </div>
                        <div class="flex flex-wrap items-center">
                          <div class="w-1/2 xl:w-6/12">
                            <div class="flex items-center">
                              <h3 class="mr-4 font-heading font-medium tracking-tighter">
                                Color:
                              </h3>
                              <div class="mr-2 max-w-max rounded-full">
                                <a
                                  class="block w-4 h-4 bg-orange-400 rounded-full"
                                  href="#"
                                ></a>
                              </div>
                              <div class="p-1 max-w-max border border-gray-300 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-gray-400 rounded-full"
                                  href="#"
                                ></a>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/2 xl:w-2/12">
                            <svg
                              class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                              width="27"
                              height="27"
                              viewbox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_476_640)">
                                <path
                                  d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </g>
                              <defs>
                                <clippath id="clip0_476_640">
                                  <rect
                                    width="27"
                                    height="27"
                                    fill="white"
                                  ></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </div>
                          <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                            <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                              <a
                                class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                              >
                                Add to bag
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <div class="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 bg-white rounded-3xl">
                      <div class="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                        <a class="block mx-auto max-w-max" href="#">
                          <img
                            class="h-48 object-cover"
                            src="uinel-assets/images/ecommerce-product-list/smartwatch-green.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="xl:w-8/12">
                        <div class="xl:flex xl:justify-between xl:items-start mb-4 xl:mb-20">
                          <div class="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                            <a href="#">
                              <p class="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
                                Smartwatch Uistore Homme Watch 19
                              </p>
                              <p class="text-darkBlueGray-400">
                                The nulla commodo, commodo eros a lor, tristique
                                lectus lorem sad 128 GB silver.
                              </p>
                            </a>
                          </div>
                          <p class="flex items-center xl:justify-end xl:pl-3 xl:w-4/12 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                            <span class="mr-2 text-xs">$</span>
                            <span>99.99</span>
                          </p>
                        </div>
                        <div class="flex flex-wrap items-center">
                          <div class="w-1/2 xl:w-6/12">
                            <div class="flex items-center">
                              <h3 class="mr-4 font-heading font-medium tracking-tighter">
                                Color:
                              </h3>
                              <div class="mr-2 max-w-max border border-gray-300 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-white rounded-full"
                                  href="#"
                                ></a>
                              </div>
                              <div class="p-1 max-w-max border border-gray-300 rounded-full">
                                <a
                                  class="block w-4 h-4 bg-gray-400 rounded-full"
                                  href="#"
                                ></a>
                              </div>
                            </div>
                          </div>
                          <div class="w-1/2 xl:w-2/12">
                            <svg
                              class="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer"
                              width="27"
                              height="27"
                              viewbox="0 0 27 27"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_476_640)">
                                <path
                                  d="M13.5003 26.2061L4.70164 16.9253C3.92908 16.1443 3.41913 15.1374 3.24404 14.0471C3.06896 12.9568 3.23761 11.8385 3.72612 10.8505V10.8505C4.09513 10.1046 4.63415 9.45803 5.29877 8.96406C5.96338 8.47008 6.73457 8.14284 7.54879 8.00931C8.36301 7.87578 9.19696 7.93978 9.98192 8.19603C10.7669 8.45228 11.4804 8.89345 12.0637 9.48319L13.5003 10.9358L14.9369 9.48319C15.5202 8.89345 16.2337 8.45228 17.0186 8.19603C17.8036 7.93978 18.6376 7.87578 19.4518 8.00931C20.266 8.14284 21.0372 8.47008 21.7018 8.96406C22.3664 9.45803 22.9054 10.1046 23.2745 10.8505V10.8505C23.763 11.8385 23.9316 12.9568 23.7565 14.0471C23.5814 15.1374 23.0715 16.1443 22.2989 16.9253L13.5003 26.2061Z"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </g>
                              <defs>
                                <clippath id="clip0_476_640">
                                  <rect
                                    width="27"
                                    height="27"
                                    fill="white"
                                  ></rect>
                                </clippath>
                              </defs>
                            </svg>
                          </div>
                          <div class="mt-6 xl:mt-0 w-full xl:w-4/12">
                            <div class="lg:mx-auto xl:mr-0 lg:max-w-max">
                              <a
                                class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                              >
                                Add to bag
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
