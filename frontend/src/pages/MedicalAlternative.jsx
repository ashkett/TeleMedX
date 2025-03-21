// import { useState, useEffect } from "react";
// import axios from "axios";
// import Medicine_Details from "../../Medicine_Details.json";

// const MedicineAlt = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [foundMedicines, setFoundMedicines] = useState([]);
//   const [medicines, setMedicines] = useState([]);
//   const [alternatives, setAlternatives] = useState({});
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const cleanedMedicines = Medicine_Details.map((medicine) => ({
//       ...medicine,
//       "Image URL": medicine["Image URL"].replace(/\\/g, ""),
//     }));
//     setMedicines(cleanedMedicines);
//   }, []);

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);

//     if (!term.trim()) {
//       setFoundMedicines([]);
//       return;
//     }

//     const searchTerms = term.split(",").map((t) => t.trim());
//     const results = medicines.filter((med) =>
//       searchTerms.some((term) =>
//         med["Medicine Name"].toLowerCase().includes(term)
//       )
//     );

//     setFoundMedicines(results);
//   };

//   const getMedicineInfo = (medicineName) => {
//     return medicines.find(
//       (med) => med["Medicine Name"].toLowerCase() === medicineName.toLowerCase()
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!medicineName.trim()) {
//       setError("Please enter a medicine name.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const response = await axios.post(
//         "http://localhost:5000/get_alternatives",
//         medicineName.trim(),  // Sending plain text
//         { headers: { "Content-Type": "text/plain" } } // Setting header for plain text
//       );

//       setAlternatives(response.data);
//     } catch (err) {
//       setError("Error fetching alternatives. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-xl rounded-lg">
//       {/* Medicine Input */}
//       <div className="flex flex-col items-center mb-8">
//         <input
//           type="text"
//           placeholder="Enter medicine name..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleSubmit}
//           className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
//         >
//           Get Alternatives
//         </button>
//       </div>

//       {/* Search Results */}
//       {foundMedicines.length > 0 && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//           {foundMedicines.map((medicine, index) => (
//             <MedicineCard key={index} medicine={medicine} />
//           ))}
//         </div>
//       )}

//       {/* Display Alternatives */}
//       {Object.keys(alternatives).length > 0 && (
//         <div className="mt-8">
//           <h3 className="text-2xl font-bold text-blue-700 mb-6">Suggested Alternatives</h3>
//           {Object.entries(alternatives).map(([originalMed, alts]) => (
//             <div key={originalMed} className="mb-8">
//               <h4 className="text-xl font-semibold text-gray-700 mb-4">
//                 Alternatives for: {originalMed}
//               </h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {alts.map((alt, index) => (
//                   <MedicineCard
//                     key={index}
//                     medicine={alt}
//                     extraInfo={{
//                       "Match %": `${alt.composition_match?.toFixed(1) || 0}%`,
//                       "Review Score": alt.final_score?.toFixed(1) || 0
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const MedicineCard = ({ medicine, extraInfo }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition">
//       <img
//         src={medicine["Image URL"] || "fallback-image-url.jpg"}
//         alt={medicine["Medicine Name"]}
//         className="w-full h-40 object-cover rounded-t-lg"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "fallback-image-url.jpg";
//         }}
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-blue-700">
//           {medicine["Medicine Name"]}
//         </h3>
//         <p className="text-gray-600 text-sm">{medicine.Manufacturer}</p>

//         {extraInfo && (
//           <div className="mt-2 space-y-1">
//             {Object.entries(extraInfo).map(([label, value]) => (
//               <p key={label} className="text-sm">
//                 <span className="font-medium">{label}:</span> {value}
//               </p>
//             ))}
//           </div>
//         )}

//         <div className="mt-2">
//           <p className="font-medium text-gray-700">Uses:</p>
//           <div className="flex flex-wrap gap-2 mt-1">
//             {medicine.Uses?.split(/(?=[A-Z])/).map((use, index) => (
//               <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs">
//                 {use.trim()}
//               </span>
//             ))}
//           </div>
//         </div>
//         <p className="mt-2 text-gray-700">
//           <strong>Composition:</strong> {medicine.Composition}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MedicineAlt;

import { useState } from "react";
import axios from "axios";

const MedicineAlt = () => {
  const [medicineName, setMedicineName] = useState("");
  const [alternatives, setAlternatives] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setMedicineName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!medicineName.trim()) {
      setError("Please enter a medicine name.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        // "https://backend-21a3.onrender.com/get_alternatives",
        "http://localhost:5000/get_alternatives",
        medicineName.trim(), // Sending plain text
        { headers: { "Content-Type": "text/plain" } } // Setting header for plain text
      );

      setAlternatives(response.data);
    } catch (err) {
      setError("Error fetching alternatives. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Find Alternative Medicines
      </h2>

      {/* Medicine Name Input Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Enter medicine name..."
          value={medicineName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Get Alternatives
        </button>
      </form>

      {/* Display Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Loading Indicator */}
      {loading && (
        <p className="text-blue-500 text-center">Fetching alternatives...</p>
      )}

      {/* Display Alternatives */}
      {/* {Object.keys(alternatives).length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Alternative Medicines</h3>
          {Object.entries(alternatives).map(([originalMed, alts]) => (
            <div key={originalMed} className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700">
                Alternatives for: <span className="text-blue-600">{originalMed}</span>
              </h4>
              <ul className="list-disc pl-6 mt-2">
                {alts.length > 0 ? (
                  alts.map((alt, index) => (
                    <li key={index} className="text-gray-600">
                      {alt["Medicine Name"]} - Match: {alt.composition_match || 0}%, Score: {alt.final_score || 0}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600">No alternatives found.</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )} */}

      {Object.entries(alternatives).map(([originalMed, alts]) => (
        <div key={originalMed} className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-4">
            Alternatives for: {originalMed}
          </h4>

          {/* Render the first card separately */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* {alts.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition">
                <img
                  src={alts[0]["Image URL"] || "fallback-image-url.jpg"}
                  alt={alts[0]["Medicine Name"]}
                  className="w-full h-40 object-cover rounded-t-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "fallback-image-url.jpg"; // Fallback image if URL fails
                  }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-700">
                    {alts[0]["Medicine Name"]}
                  </h3>{" "}
                  <hr />
                  <br />
                  <p className="text-md text-dark-700">
                    Match Score: {alts[0]["composition_match"].toFixed(2)}%
                  </p>
                  <hr />
                  <p className="text-md text-dark-700">
                    Final Score: {alts[0]["final_score"].toFixed(2)}%
                  </p>
                </div>
              </div>
            )} */}

            {/* Render the rest of the cards */}
            {alts.slice(1).map((alt, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition"
              >
                <img
                  src={alt["Image URL"] || "fallback-image-url.jpg"}
                  alt={alt["Medicine Name"]}
                  className="w-full h-40 object-cover rounded-t-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "fallback-image-url.jpg"; // Fallback image if URL fails
                  }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-700">
                    {alt["Medicine Name"]}
                  </h3>{" "}
                  <hr />
                  <br />
                  <p className="text-md text-dark-700">
                    Match Score: {alt["composition_match"].toFixed(2)}%
                  </p>
                  <hr />
                  <p className="text-md text-dark-700">
                    Final Score: {alt["final_score"].toFixed(2)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicineAlt;
