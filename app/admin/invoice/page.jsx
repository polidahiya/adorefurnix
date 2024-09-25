
const Invoice = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-2xl rounded-lg border border-gray-200">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Tax Invoice</h1>
        <p className="mt-2 text-lg font-semibold text-gray-600">UrbanFry</p>
        <p className="text-sm text-gray-500">C 147, BASEMENT, SUSHANT LOK 3, SECTOR 57, Gurgaon</p>
        <p className="text-sm text-gray-500">GSTIN/UIN: 06EFNPS9216E1Z2 | State Name: Haryana, Code: 06</p>
        <p className="text-sm text-gray-500">Email: urbanfry13@gmail.com</p>
      </div>

      {/* Consignee and Buyer */}
      <div className="grid grid-cols-2 gap-6 mb-8 text-sm text-gray-700">
        <div>
          <h2 className="font-bold text-gray-800">Consignee (Ship to)</h2>
          <p>Sayani Chatterjee</p>
          <p>Uttara Pally, Near Rakhal Pirtala, Police Line</p>
          <p>House Burdwan 713103</p>
          <p>State Name: West Bengal, Code: 19</p>
        </div>
        <div>
          <h2 className="font-bold text-gray-800">Buyer (Bill to)</h2>
          <p>Sayani Chatterjee</p>
          <p>Uttara Pally, Near Rakhal Pirtala, Police Line</p>
          <p>House Burdwan 713103</p>
          <p>Mobile: 89108 94349</p>
          <p>Email: sayani.arsenal91@gmail.com</p>
        </div>
      </div>

      {/* Invoice Information */}
      <div className="grid grid-cols-2 gap-6 mb-6 text-sm text-gray-700">
        <div>
          <p><span className="font-semibold">Invoice No.: </span>UF/24-25/12</p>
          <p><span className="font-semibold">Date: </span>9-Apr-24</p>
        </div>
        <div>
          <p><span className="font-semibold">Buyer&apos;s Order No.: </span>15849</p>
          <p><span className="font-semibold">Mode/Terms of Payment: </span>Cash on Delivery</p>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 border border-gray-200">Sl No.</th>
              <th className="px-6 py-3 border border-gray-200">Description of Goods</th>
              <th className="px-6 py-3 border border-gray-200">Quantity</th>
              <th className="px-6 py-3 border border-gray-200">Rate</th>
              <th className="px-6 py-3 border border-gray-200">Amount</th>
              <th className="px-6 py-3 border border-gray-200">HSN/SAC</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4 border border-gray-200">1</td>
              <td className="px-6 py-4 border border-gray-200">
                Urbanfry Homes Gabrielle Multipurpose Entryway Shoe Cabinet
                <br />
                <span className="text-xs text-gray-500">Natural Rattan Collection (#SDBD-03-1-3-1-2)</span>
              </td>
              <td className="px-6 py-4 border border-gray-200">1 PCS</td>
              <td className="px-6 py-4 border border-gray-200">₹20,973.81</td>
              <td className="px-6 py-4 border border-gray-200">₹20,973.81</td>
              <td className="px-6 py-4 border border-gray-200">9403</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Total Section */}
      <div className="text-right mb-8 text-gray-700">
        <p className="text-lg"><span className="font-bold">IGST: </span>₹3,775.29</p>
        <p className="text-lg font-extrabold text-gray-800">Total: ₹24,749.10</p>
        <p className="text-sm text-gray-500">Amount Chargeable (in words): INR Twenty Four Thousand Seven Hundred Forty Nine and Ten paise Only</p>
      </div>

      {/* Declaration */}
      <div className="mb-8 text-sm text-gray-700">
        <p className="font-bold">Declaration:</p>
        <p>We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.</p>
      </div>

      {/* Bank Details */}
      <div className="mb-8 text-sm text-gray-700">
        <p className="font-bold">Company&apos;s Bank Details:</p>
        <p>Bank Name: HDFC BANK</p>
        <p>A/c No.: 50200059153550</p>
        <p>Branch & IFS Code: SECTOR 59 GURGAON & HDFC0003663</p>
      </div>

      {/* Signature */}
      <div className="text-right text-sm text-gray-700">
        <p>for UrbanFry</p>
        <p>Authorised Signatory</p>
        <p className="italic text-gray-500">This is a Computer Generated Invoice</p>
      </div>
    </div>
  );
};

export default Invoice;
