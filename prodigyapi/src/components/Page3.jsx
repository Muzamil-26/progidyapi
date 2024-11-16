import React from "react";

const useCases = [
  {
    title: "Frontend Development",
    description:
      "Populate your e-commerce site or app with realistic data, focusing on UI/UX without worrying about backend integration.",
  },
  {
    title: "Prototyping",
    description: "Generate product data quickly for prototypes and demos.",
  },
  {
    title: "API Practice",
    description:
      "Use Progidy API to practice working with APIs and data consumption in your projects.",
  },
];

const Page3 = () => {
  return (
    <div className="min-h-[600px] w-full flex flex-col items-center gap-10 px-[30px] py-12">
      <div className="w-full max-w-[1200px] flex flex-col items-start gap-6">
        <h1 className="text-4xl font-semibold text-[#A485F7] text-center">
          <strong>Sample API Endpoints</strong>
        </h1>
        <p className="text-lg text-center text-gray-700 mb-6">
          Explore the available API endpoints for filtering, sorting, and
          pagination of products.
        </p>

        <ul className="list-inside list-disc space-y-4 text-sm">
          <li>
            <strong className="text-[#A485F7]">GET /api/products</strong>:
            Retrieve a list of all products.
          </li>
          <li>
            <strong className="text-[#A485F7]">
              GET /api/products?name=<code>name</code>
            </strong>
            : Filter products by name.
          </li>
          <li>
            <strong className="text-[#A485F7]">
              GET /api/products?title=<code>title</code>
            </strong>
            : Filter products by title.
          </li>
          <li>
            <strong className="text-[#A485F7]">
              GET /api/products?category=<code>categoryName</code>
            </strong>
            : Filter products by category.
          </li>
          <li>
            <strong className="text-[#A485F7]">
              GET /api/products?price=<code>price</code>
            </strong>
            : Filter products within a price range (e.g., ?price=50,200).
          </li>
          <li>
            <strong className="text-[#A485F7]">
              GET /api/products?sort=<code>-id</code>
            </strong>
            : Sort products by a specified field (e.g., ?sort=-id, this will
            sort by id in descending order).
          </li>
          <li>
            <strong className="text-[#A485F7]">
              GET /api/products?limit=<code>number</code>
            </strong>
            : Limit the number of products returned in a single request (e.g.,
            ?limit=10).
          </li>
          <li>
            <strong className="text-[#A485F7]">
              GET /api/products?page=<code>pageNumber</code>&limit=
              <code>number</code>
            </strong>
            : Paginate through products (e.g., ?page=2&limit=10). The maximum
            limit is 20.
          </li>
          <li>
            <strong className="text-[#A485F7]">
              GET /api/products?name=<code>name</code>&category=
              <code>categoryName</code>&sort=<code>-id</code>&limit=
              <code>number</code>&page=<code>pageNumber</code>
            </strong>
            : Example query combining filters, sorting, and pagination.
          </li>
        </ul>
        <div className="use-cases-section bg-gray-50 mt-10 p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold mb-4 text-center text-[#A485F7]">Use Cases</h2>
          <ul className="space-y-4">
            {useCases.map((caseItem, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 rounded-lg hover:shadow-lg hover:cursor-pointer transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-[#A485F7] mb-2">
                  {caseItem.title}
                </h3>
                <p className="text-gray-700">{caseItem.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page3;
