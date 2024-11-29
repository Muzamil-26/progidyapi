import { useState, useEffect } from "react";
import Aside from "../components/Aside";
import axios from "axios";

const Docs = () => {
  const [exampleSingleClick, setExampleSingleClick] = useState(false);
  const [ExampleClick, setExampleClick] = useState(false);
  const [limitres, setlimitres] = useState(false);
  const [sortres, setsortres] = useState(false);
  const [getincategory, setgetincategory] = useState(false);
  const [page, setpage] = useState(false);
  const [specificfields, setspecificfields] = useState(null);
  const [AllProduct, setAllProducts] = useState(null);
  const [AllProduct1, setAllProducts1] = useState(null);
  const [AllProduct2, setAllProducts2] = useState(null);
  const [AllProduct3, setAllProducts3] = useState(null);
  const [AllProduct4, setAllProducts4] = useState(null);
  const [AllProduct5, setAllProducts5] = useState(null);
  const [AllProduct6, setAllProducts6] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  const handleExampleClick = async () => {
    setloading(true); // Set loading state before making the request
    setError(null); // Reset error state before fetching
    try {
      const res = await axios.get("https://progidyapi.onrender.com/api/products");
      if (res.status === 200) {
        console.log(res.data);
        setAllProducts(res.data.AllProducts || []); // Assume response contains a field 'AllProducts'
        setExampleClick(true);
      } else {
        console.error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to fetch products. Please try again.");
    } finally {
      setloading(false); // Reset loading state
    }
  };

  const handlegetsignleClick = async () => {
    setloading(true); // Set loading state before making the request
    setError(null); // Reset error state before fetching
    try {
      const res = await axios.get("https://progidyapi.onrender.com/api/products/1");
      if (res.status === 200) {
        console.log(res.data);
        setAllProducts1(res.data.AllProducts || []); // Assume response contains a field 'AllProducts'
        setExampleSingleClick(true);
      } else {
        console.error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to fetch the product. Please try again.");
    } finally {
      setloading(false); // Reset loading state
    }
  };

  const handlegetlimitClick = async () => {
    setloading(true); // Set loading state before making the request
    setError(null); // Reset error state before fetching
    try {
      const res = await axios.get(
        "https://progidyapi.onrender.com/api/products?limit=3&sort=id"
      );
      if (res.status === 200) {
        console.log(res.data);
        setAllProducts2(res.data.AllProducts || []); // Assume response contains a field 'AllProducts'
        setlimitres(true);
      } else {
        console.error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to fetch the product. Please try again.");
    } finally {
      setloading(false); // Reset loading state
    }
  };

  const handlegetsortClick = async () => {
    setloading(true); // Set loading state before making the request
    setError(null); // Reset error state before fetching
    try {
      const res = await axios.get("https://progidyapi.onrender.com/api/products?sort=id");
      if (res.status === 200) {
        console.log(res.data);
        setAllProducts3(res.data.AllProducts || []); // Assume response contains a field 'AllProducts'
        setsortres(true);
      } else {
        console.error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to fetch the product. Please try again.");
    } finally {
      setloading(false); // Reset loading state
    }
  };

  const handlegetcategoryClick = async () => {
    setloading(true); // Set loading state before making the request
    setError(null); // Reset error state before fetching
    try {
      const res = await axios.get(
        "https://progidyapi.onrender.com/api/products?category=jewelery"
      );
      if (res.status === 200) {
        console.log(res.data);
        setAllProducts4(res.data.AllProducts || []); // Assume response contains a field 'AllProducts'
        setgetincategory(true);
      } else {
        console.error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to fetch the product. Please try again.");
    } finally {
      setloading(false); // Reset loading state
    }
  };

  const handlegetpageClick = async () => {
    setloading(true); // Set loading state before making the request
    setError(null); // Reset error state before fetching
    try {
      const res = await axios.get("https://progidyapi.onrender.com/api/products?page=1");
      if (res.status === 200) {
        console.log(res.data);
        setAllProducts5(res.data.AllProducts || []); // Assume response contains a field 'AllProducts'
        setpage(true);
      } else {
        console.error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to fetch the product. Please try again.");
    } finally {
      setloading(false); // Reset loading state
    }
  };

  const handlegetspecificfieldClick = async () => {
    setloading(true); // Set loading state before making the request
    setError(null); // Reset error state before fetching
    try {
      const res = await axios.get(
        "https://progidyapi.onrender.com/api/products?select=id,title,description"
      );
      if (res.status === 200) {
        console.log(res.data);
        setAllProducts6(res.data.AllProducts || []);
        setspecificfields(true);
      } else {
        console.error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to fetch the product. Please try again.");
    } finally {
      setloading(false); // Reset loading state
    }
  };

  document.documentElement.style.scrollBehavior = "smooth";

  return (
    <>
      <Aside />
      <div className="flex flex-col items-center gap-10 py-[19.5rem] px-[13.5rem]">
        <div className="inner-page2 w-full max-w-[1200px]">
          <section className="howtouse flex flex-col gap-5">
            <h1 className="text-4xl text-[#A485F7] text-start px-4">
              How to Use?
            </h1>
            <p className="text-start px-4">
              Prodigy API can be seamlessly integrated with any type of project
              that requires fast, reliable, and scalable backend solutions.
              Whether you're building a modern web application, mobile app, or
              enterprise software, Prodigy API provides data handling and
              streamlined responses that cater to diverse development needs.
              Check out the examples below to see how Prodigy API works and
              leverage it to enhance your projects!
            </p>
          </section>
          <section className="Products mt-10">
            <div className="svg flex items-center px-4">
              <svg
                height="58"
                viewBox="0 0 24 24"
                width="38"
                xmlns="http://www.w3.org/2000/svg"
                id="icon_81731422995159"
                data-filename="box.svg"
              >
                <path
                  d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"
                  fill="none"
                  stroke="#0f0f0f"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
                <polyline
                  fill="none"
                  points="2.32 6.16 12 11 21.68 6.16"
                  stroke="#0f0f0f"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polyline>
                <line
                  fill="none"
                  stroke="#0f0f0f"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="12"
                  x2="12"
                  y1="22.76"
                  y2="11"
                ></line>
              </svg>
              <h1 className="text-3xl ml-3 text-[#A485F7]">Products</h1>
            </div>
          </section>
        </div>

        {/* allproducts */}

        <div
          className="example flex flex-col items-start w-full max-w-[1200px] mt-12 mb-11 bg-zinc-100 p-6 rounded-lg"
          id="allproducts"
        >
          <h1 className="text-[#A485F7] text-3xl">Get all Products</h1>
          <div className="bg-zinc-50 w-full mt-4 p-4 rounded-md">
            <pre className="overflow-x-auto">
              <code className="w-full block p-2 text-sm bg-gray-200 rounded-md whitespace-pre">
                {`fetch('https://progidyapi.onrender.com/api/products')
  .then((res) => res.json())
  .then((json) => console.log(json));`}
              </code>
            </pre>
          </div>
          {ExampleClick ? (
            <>
              <button
                className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                onClick={() => setExampleClick(false)}
              >
                Hide Response
              </button>
              <div className="w-[100%] response overflow-scroll overflow-y-scroll pointer-events-auto h-[500px] bg-gray-200">
                <pre>
                  <code
                    className={`w-full p-2 text-sm rounded-md whitespace-pre ${
                      loading
                        ? "flex justify-center items-center h-[500px]"
                        : ""
                    }`}
                  >
                    {loading ? (
                      <span className="loader w-full h-full flex justify-center items-center"></span>
                    ) : error ? (
                      <span>{error}</span>
                    ) : (
                      JSON.stringify(AllProduct, null, 2)
                    )}
                  </code>
                </pre>
              </div>
            </>
          ) : (
            <button
              className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3"
              onClick={handleExampleClick}
            >
              Try It
            </button>
          )}
        </div>





        {/* getsingleproducts */}
        <div
          className="example flex flex-col items-start w-full max-w-[1200px] mt-12 mb-11 bg-zinc-100 p-6 rounded-lg"
          id="getsingleproducts"
        >
          <h1 className="text-[#A485F7] text-3xl">Get a single Product</h1>
          <div className="bg-zinc-50 w-full mt-4 p-4 rounded-md">
            <pre className="overflow-x-auto">
              <code className="w-full block p-2 text-sm bg-gray-200 rounded-md whitespace-pre">
                {`fetch('https://progidyapi.onrender.com/api/products/1')
  .then((res) => res.json())
  .then((json) => console.log(json));`}
              </code>
            </pre>
          </div>
          {exampleSingleClick ? (
            <>
              <button
                className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                onClick={() => setExampleSingleClick(false)}
              >
                Hide Response
              </button>
              <div className="w-[100%] response overflow-scroll overflow-y-scroll pointer-events-auto h-[500px] bg-gray-200">
                <pre>
                  <code
                    className={`w-full p-2 text-sm rounded-md whitespace-pre ${
                      loading
                        ? "flex justify-center items-center h-[500px]"
                        : ""
                    }`}
                  >
                    {loading ? (
                      <span className="loader w-full h-full flex justify-center items-center"></span>
                    ) : error ? (
                      <span>{error}</span>
                    ) : (
                      JSON.stringify(AllProduct1, null, 2)
                    )}
                  </code>
                </pre>
              </div>
            </>
          ) : (
            <button
              className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
              onClick={handlegetsignleClick}
            >
              Try It
            </button>
          )}
        </div>
        {/* limitres */}

        <section
          id="limitres"
          className="example flex flex-col items-start w-full max-w-[1200px] mt-12 mb-11 bg-zinc-100 p-6 rounded-lg"
        >
          <div className="example flex flex-col items-start w-full max-w-[1200px] mt-0 bg-zinc-100 rounded-lg">
            <h1 className="text-[#A485F7] text-3xl">Limit Result</h1>
            <div className="bg-zinc-50 w-full mt-4 p-4 rounded-md">
              <pre className="overflow-x-auto">
                <code className="w-full block p-2 text-sm bg-gray-200 rounded-md whitespace-pre">
                  {`fetch('https://progidyapi.onrender.com/api/products?limit=3')
  .then((res) => res.json())
  .then((json) => console.log(json));`}
                </code>
              </pre>
            </div>
            {limitres ? (
              <>
                <button
                  className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                  onClick={() => setlimitres(false)}
                >
                  Hide Response
                </button>
                <div className="w-[100%] response overflow-scroll overflow-y-scroll pointer-events-auto h-[500px] bg-gray-200">
                  <pre>
                    <code
                      className={`w-full p-2 text-sm rounded-md whitespace-pre ${
                        loading
                          ? "flex justify-center items-center h-[500px]"
                          : ""
                      }`}
                    >
                      {loading ? (
                        <span className="loader w-full h-full flex justify-center items-center"></span>
                      ) : error ? (
                        <span>{error}</span>
                      ) : (
                        JSON.stringify(AllProduct2, null, 2)
                      )}
                    </code>
                  </pre>
                </div>
              </>
            ) : (
              <button
                className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                onClick={handlegetlimitClick}
              >
                Try It
              </button>
            )}
          </div>
        </section>
        {/* sortres */}
        <section
          id="sortres"
          className="example flex flex-col items-start w-full max-w-[1200px] mt-12 mb-11 bg-zinc-100 p-6 rounded-lg"
        >
          <div className="example flex flex-col items-start w-full max-w-[1200px] mt-0 bg-zinc-100 rounded-lg">
            <h1 className="text-[#A485F7] text-3xl">Sort Result</h1>
            <div className="bg-zinc-50 w-full mt-4 p-4 rounded-md">
              <pre className="overflow-x-auto">
                <code className="w-full block p-2 text-sm bg-gray-200 rounded-md whitespace-pre">
                  {`fetch('https://progidyapi.onrender.com/api/products?sort=id')
  .then((res) => res.json())
  .then((json) => console.log(json));`}
                </code>
              </pre>
            </div>
            {sortres ? (
              <>
                <button
                  className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                  onClick={() => setsortres(false)}
                >
                  Hide Response
                </button>
                <div className="w-[100%] response overflow-scroll overflow-y-scroll pointer-events-auto h-[500px] bg-gray-200">
                  <pre>
                    <code
                      className={`w-full p-2 text-sm rounded-md whitespace-pre ${
                        loading
                          ? "flex justify-center items-center h-[500px]"
                          : ""
                      }`}
                    >
                      {loading ? (
                        <span className="loader w-full h-full flex justify-center items-center"></span>
                      ) : error ? (
                        <span>{error}</span>
                      ) : (
                        JSON.stringify(AllProduct3, null, 2)
                      )}
                    </code>
                  </pre>
                </div>
              </>
            ) : (
              <button
                className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                onClick={handlegetsortClick}
              >
                Try It
              </button>
            )}
          </div>
        </section>
        {/* getincategory */}
        <section
          id="getincategory"
          className="example flex flex-col items-start w-full max-w-[1200px] mt-12 mb-11 bg-zinc-100 p-6 rounded-lg"
        >
          <div className="example flex flex-col items-start w-full max-w-[1200px] mt-0 bg-zinc-100 rounded-lg">
            <h1 className="text-[#A485F7] text-3xl">Get in Category</h1>
            <div className="bg-zinc-50 w-full mt-4 p-4 rounded-md">
              <pre className="overflow-x-auto">
                <code className="w-full block p-2 text-sm bg-gray-200 rounded-md whitespace-pre">
                  {`fetch('https://progidyapi.onrender.com/api/products?category=jewelery')
  .then((res) => res.json())
  .then((json) => console.log(json));`}
                </code>
              </pre>
            </div>
            {getincategory ? (
              <>
                <button
                  className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                  onClick={() => setgetincategory(false)}
                >
                  Hide Response
                </button>
                <div className="w-[100%] response overflow-scroll overflow-y-scroll pointer-events-auto h-[500px] bg-gray-200">
                  <pre>
                    <code
                      className={`w-full p-2 text-sm rounded-md whitespace-pre ${
                        loading
                          ? "flex justify-center items-center h-[500px]"
                          : ""
                      }`}
                    >
                      {loading ? (
                        <span className="loader w-full h-full flex justify-center items-center"></span>
                      ) : error ? (
                        <span>{error}</span>
                      ) : (
                        JSON.stringify(AllProduct4, null, 2)
                      )}
                    </code>
                  </pre>
                </div>
              </>
            ) : (
              <button
                className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                onClick={handlegetcategoryClick}
              >
                Try It
              </button>
            )}
          </div>
        </section>
        {/* pagination */}
        <section
          id="pagination"
          className="example flex flex-col items-start w-full max-w-[1200px] mt-12 mb-11 bg-zinc-100 p-6 rounded-lg"
        >
          <div className="example flex flex-col items-start w-full max-w-[1200px] mt-0 bg-zinc-100 rounded-lg">
            <h1 className="text-[#A485F7] text-3xl">Pagination Result</h1>
            <div className="bg-zinc-50 w-full mt-4 p-4 rounded-md">
              <pre className="overflow-x-auto">
                <code className="w-full block p-2 text-sm bg-gray-200 rounded-md whitespace-pre">
                  {`fetch('https://progidyapi.onrender.com/api/products?page=1)
  .then((res) => res.json())
  .then((json) => console.log(json));`}
                </code>
              </pre>
            </div>
            {page ? (
              <>
                <button
                  className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                  onClick={() => setpage(false)}
                >
                  Hide Response
                </button>
                <div className="w-[100%] response overflow-scroll overflow-y-scroll pointer-events-auto h-[500px] bg-gray-200">
                  <pre>
                    <code
                      className={`w-full p-2 text-sm rounded-md whitespace-pre ${
                        loading
                          ? "flex justify-center items-center h-[500px]"
                          : ""
                      }`}
                    >
                      {loading ? (
                        <span className="loader w-full h-full flex justify-center items-center"></span>
                      ) : error ? (
                        <span>{error}</span>
                      ) : (
                        JSON.stringify(AllProduct5, null, 2)
                      )}
                    </code>
                  </pre>
                </div>
              </>
            ) : (
              <button
                className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                onClick={handlegetpageClick}
              >
                Try It
              </button>
            )}
          </div>
        </section>
        {/* specificfields */}
        <section
          id="specificfields"
          className="example flex flex-col items-start w-full max-w-[1200px] mt-12 mb-11 bg-zinc-100 p-6 rounded-lg"
        >
          <div className="example flex flex-col items-start w-full max-w-[1200px] mt-0 bg-zinc-100 rounded-lg">
            <h1 className="text-[#A485F7] text-3xl">Select Specific Fields</h1>
            <div className="bg-zinc-50 w-full mt-4 p-4 rounded-md">
              <pre className="overflow-x-auto">
                <code className="w-full block p-2 text-sm bg-gray-200 rounded-md whitespace-pre">
                  {`fetch('https://progidyapi.onrender.com/api/products?select=id,title,description)
  .then((res) => res.json())
  .then((json) => console.log(json));`}
                </code>
              </pre>
            </div>
            {specificfields ? (
              <>
                <button
                  className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                  onClick={() => setspecificfields(false)}
                >
                  Hide Response
                </button>
                <div className="w-[100%] response overflow-scroll overflow-y-scroll pointer-events-auto h-[500px] bg-gray-200">
                  <pre>
                    <code
                      className={`w-full p-2 text-sm rounded-md whitespace-pre ${
                        loading
                          ? "flex justify-center items-center h-[500px]"
                          : ""
                      }`}
                    >
                      {loading ? (
                        <span className="loader w-full h-full flex justify-center items-center"></span>
                      ) : error ? (
                        <span>{error}</span>
                      ) : (
                        JSON.stringify(AllProduct6, null, 2)
                      )}
                    </code>
                  </pre>
                </div>
              </>
            ) : (
              <button
                className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3 mb-3"
                onClick={handlegetspecificfieldClick}
              >
                Try It
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Docs;
