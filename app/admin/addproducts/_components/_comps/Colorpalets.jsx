import React from "react";
import { AppContextfn } from "@/app/Context";

function Colorpalets() {
  const { addproduct, setaddproduct, updateproduct, setdeletedimages } = AppContextfn();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Color Palettes</h2>
      <div className="flex flex-wrap gap-4 p-4">
        {addproduct.colorpalets.map((color, colorindex) => (
          <div
            key={colorindex}
            className="relative flex flex-col gap-4 items-center border border-slate-300 rounded-lg p-4 shadow-md"
          >
            {/* Delete color palette button */}
            <button
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full h-8 w-8 flex items-center justify-center"
              onClick={() => {
                // Store deleted images
                if (updateproduct) {
                  color.images.forEach((image) => {
                    if (!(image instanceof File)) {
                      setdeletedimages((prev) => [...prev, image]);
                    }
                  });
                }

                // Remove color palette
                const newColorPalets = addproduct.colorpalets.filter((_, i) => i !== colorindex);
                setaddproduct({ ...addproduct, colorpalets: newColorPalets });
              }}
            >
              &times;
            </button>
            {/* Color Display */}
            <div
              className="relative h-16 w-16 border border-slate-300 rounded-full"
              style={{ backgroundColor: color.color }}
            >
              <input
                type="color"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => {
                  const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
                    i === colorindex ? { ...palette, color: e.target.value } : palette
                  );
                  setaddproduct({ ...addproduct, colorpalets: updatedColorPalets });
                }}
              />
            </div>
            {/* Color Name */}
            <div>
              <label className="block mb-1">Color Name:</label>
              <input
                type="text"
                className="border border-slate-300 rounded p-2"
                value={color.name}
                onChange={(e) => {
                  const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
                    i === colorindex ? { ...palette, name: e.target.value } : palette
                  );
                  setaddproduct({ ...addproduct, colorpalets: updatedColorPalets });
                }}
              />
            </div>
            {/* Images Section */}
            <div className="w-full">
              <h3 className="text-xl font-semibold text-center mb-2">Images</h3>
              <div className="flex flex-wrap gap-2">
                {color.images.map((image, imageindex) => (
                  <div
                    key={imageindex}
                    className="relative border border-slate-300 aspect-[4/3] w-24 h-24 rounded overflow-hidden"
                  >
                    <img
                      src={image instanceof File ? URL.createObjectURL(image) : image}
                      className="h-full w-full object-cover"
                      alt={`Color image ${imageindex + 1}`}
                    />
                    {/* Delete image button */}
                    <button
                      className="absolute top-0 right-0 bg-red-600 text-white rounded-full h-6 w-6 flex items-center justify-center"
                      onClick={() => {
                        if (updateproduct && !(color.images[imageindex] instanceof File)) {
                          setdeletedimages((prev) => [
                            ...prev,
                            color.images[imageindex],
                          ]);
                        }

                        const newImages = color.images.filter((_, i) => i !== imageindex);
                        const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
                          i === colorindex ? { ...palette, images: newImages } : palette
                        );
                        setaddproduct({ ...addproduct, colorpalets: updatedColorPalets });
                      }}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              {/* Add Image Button */}
              <div className="flex justify-center mt-2">
                <button className="relative h-8 w-24 bg-green-600 text-white rounded-lg">
                  <input
                    className="absolute inset-0 h-full w-full z-10 opacity-0 cursor-pointer"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
                          i === colorindex
                            ? { ...palette, images: [...color.images, file] }
                            : palette
                        );
                        setaddproduct({ ...addproduct, colorpalets: updatedColorPalets });
                      }
                    }}
                  />
                  Add Image
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Add Color Palette Button */}
      <div className="flex justify-center mt-4">
        <button
          className="h-8 w-32 bg-green-600 text-white rounded-lg"
          onClick={() => {
            setaddproduct((prev) => ({
              ...prev,
              colorpalets: [
                ...prev.colorpalets,
                { color: "", name: "", images: [] },
              ],
            }));
          }}
        >
          Add Palette
        </button>
      </div>
    </div>
  );
}

export default Colorpalets;
