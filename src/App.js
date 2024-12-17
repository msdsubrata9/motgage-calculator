import { useEffect, useState } from "react";

function App() {
  const [principal, setPrincipal] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [lenOfLone, setLenOfLone] = useState("");
  const [modgageAmount, setModgageAmount] = useState("");

  // P(r(1+r)^n/((1+r)^n)-1))
  function calculateEMI() {
    let r = rateOfInterest;
    if (principal && rateOfInterest && lenOfLone) {
      r = r / 12 / 100;
      const calcPow = Math.pow(1 + r, lenOfLone * 12);
      const amount = principal * ((r * calcPow) / (calcPow - 1));
      setModgageAmount(Math.round(amount));
    }
  }

  useEffect(() => {
    calculateEMI();
  }, [principal, rateOfInterest, lenOfLone]);

  return (
    <div className="bg-blue-300 min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold text-red-500 text-center mb-8">
        Mortgage Calculator
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <div className="space-y-6">
          {/* Principal Loan Amount */}
          <div className="flex flex-col">
            <label className="text-2xl font-semibold text-gray-700">
              Principal Loan Amount
            </label>
            <input
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={principal}
              onChange={(e) => {
                setPrincipal(e.target.value);
              }}
              placeholder="Enter loan amount"
            />
          </div>

          {/* Interest Rate */}
          <div className="flex flex-col">
            <label className="text-2xl font-semibold text-gray-700">
              Interest Rate
            </label>
            <input
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={rateOfInterest}
              onChange={(e) => {
                setRateOfInterest(e.target.value);
              }}
              placeholder="Enter interest rate"
            />
          </div>

          {/* Length of Loan */}
          <div className="flex flex-col">
            <label className="text-2xl font-semibold text-gray-700">
              Length of Loan (Years)
            </label>
            <input
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={lenOfLone}
              onChange={(e) => {
                setLenOfLone(e.target.value);
              }}
              placeholder="Enter loan term"
            />
          </div>
        </div>

        {/* Result Section */}
        {modgageAmount && (
          <div className="mt-8 text-xl font-semibold text-center text-gray-800">
            Your monthly mortgage payment will be{" "}
            <span className="text-green-600">${modgageAmount}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
