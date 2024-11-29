import React, { useState } from "react";
import axios from 'axios';
import './loader.css'; // Ensure your loader CSS is defined here

const Page2 = () => {
  const [ExampleClick, setExampleClick] = useState(false);
  const [AllProduct, setAllProducts] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  const handleExampleClick = async () => {
    try {
      const res = await axios.get('https://progidyapi.onrender.com/api/products');
      if (res.status === 200) {
        console.log(res.data);
        setAllProducts(res.data.AllProducts || []); // Assume response contains a field 'AllProducts'
        setExampleClick(true);
        setloading(false);
      } else {
        console.error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 px-[30px]">
      <div className="inner-page2 w-full max-w-[1200px]">
        <h1 className="text-3xl text-center">
          Tired of Using Dummy Data? Need Real E-Commerce Data?
        </h1>
        <h2 className="text-center text-base">
          Need Free, Realistic Data for Your E-Commerce Site? Try Our API!
        </h2>
      </div>
      <div className="w-full max-w-[1200px] text-center">
        <p className="w-full">
          Prodigy API is the perfect solution when you need pseudo-real data for
          your e-commerce or shopping website—without the need to run any
          server-side code. It's an easy-to-use, free online REST API designed
          for quick integration.
        </p>
      </div>
      <div className="example flex flex-col items-start w-full max-w-[1200px] mt-12 mb-11 bg-zinc-100 p-6 rounded-lg overflow-scroll">
        <h1 className="text-[#A485F7] text-3xl">Example Code</h1>
        <div className="bg-zinc-50 w-full mt-4 p-4 rounded-md overflow-x-auto">
          <pre className="overflow-x-auto">
            <code className="w-full block p-2 text-sm bg-gray-200 rounded-md">
              fetch('https://progidyapi.onrender.com/api/products')
              <br />
              .then((res) =&gt; res.json())
              <br />
              .then((json) =&gt; console.log(json));
              <br />
            </code>
          </pre>
        </div>
        {ExampleClick ? (
          <div className="w-[100%] response overflow-scroll overflow-y-scroll pointer-events-auto h-[500px] bg-gray-200">
            <pre>
              <code
                className={`w-full p-2 text-sm rounded-md whitespace-pre ${loading ? "flex justify-center items-center h-[500px]" : ""}`}
              >
                {loading ? (
                  <span className="loader w-full h-full flex justify-center items-center"></span>
                ) : (
                  JSON.stringify(AllProduct, null, 2)
                 
                )} 
              </code>
            </pre>
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-[#A485F7] text-white rounded-lg mt-3"
            onClick={handleExampleClick}
          >
            Try It
          </button>
        )}
      </div>
    </div>
  );
};

export default Page2;
