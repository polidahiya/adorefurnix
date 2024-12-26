import React from "react";
import { AppContextfn } from "@/app/Context";
import { uploadproductdata } from "@/app/Context";
import { BiSolidImageAdd } from "react-icons/bi";

function Colorpalets() {
  const {
    addproduct,
    setaddproduct,
    updateproduct,
    setdeletedimages,
    setmessagefn,
  } = AppContextfn();
  const fiximagesize = 1024 * 1024;
  const fixedcolors = [
    { name: "White", color: "#ffffff" },
    { name: "Black", color: "#000000" },
    { name: "Natural", color: "#a57c4f" },
    { name: "Honey Oak", color: "#b3480a" },
    { name: "Walnut", color: "#3f231f" },
    { name: "Light walnut", color: "#62322e" },
    { name: "Dark walnut", color: "#392b25" },
    { name: "Teak", color: "#a87139" },
    { name: "Mahogany", color: "#C04000" },
  ];

  // color code
  const setinputcolor = (colorindex, color) => {
    const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
      i === colorindex ? { ...palette, color: color } : palette
    );
    setaddproduct({
      ...addproduct,
      colorpalets: updatedColorPalets,
    });
  };
  // color name
  const setinputcolorname = (colorindex, name) => {
    const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
      i === colorindex ? { ...palette, name: name } : palette
    );
    setaddproduct({
      ...addproduct,
      colorpalets: updatedColorPalets,
    });
  };
  // fixed colors
  const setfixedcolors = (colorindex, color, name) => {
    const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
      i === colorindex ? { ...palette, color: color, name: name } : palette
    );
    setaddproduct({
      ...addproduct,
      colorpalets: updatedColorPalets,
    });
  };
  // addimage
  const addimage = (color, colorindex, e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      if (file.size > fiximagesize) {
        setmessagefn("Image size should be less than 1MB");
        return;
      }
    });

    const validFiles = files.filter((file) => file.size <= fiximagesize);

    if (validFiles.length > 0) {
      const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
        i === colorindex
          ? {
              ...palette,
              images: [...color.images, ...validFiles],
            }
          : palette
      );

      setaddproduct({
        ...addproduct,
        colorpalets: updatedColorPalets,
      });
    }

    e.target.value = null;
  };
  // delete image
  const deleteimage = (color, colorindex, imageindex) => {
    if (updateproduct && !(color.images[imageindex] instanceof File)) {
      setdeletedimages((prev) => [...prev, color.images[imageindex]]);
    }

    const newImages = color.images.filter((_, i) => i !== imageindex);
    const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
      i === colorindex ? { ...palette, images: newImages } : palette
    );
    setaddproduct({
      ...addproduct,
      colorpalets: updatedColorPalets,
    });
  };
  // moveimages
  const moveimages = (colorindex, imageindex, move) => {
    const newImages = [...addproduct.colorpalets[colorindex].images];
    const newIndex = imageindex + move;

    if (newIndex < 0 || newIndex >= newImages.length) {
      return;
    }

    [newImages[imageindex], newImages[newIndex]] = [
      newImages[newIndex],
      newImages[imageindex],
    ];

    const updatedColorPalets = addproduct.colorpalets.map((palette, i) =>
      i === colorindex ? { ...palette, images: newImages } : palette
    );

    setaddproduct({
      ...addproduct,
      colorpalets: updatedColorPalets,
    });
  };
  // delete color palette
  const deletecolorpalet = (color, colorindex) => {
    // Store deleted images
    if (updateproduct) {
      color.images.forEach((image) => {
        if (!(image instanceof File)) {
          setdeletedimages((prev) => [...prev, image]);
        }
      });
    }

    // Remove color palette
    const newColorPalets = addproduct.colorpalets.filter(
      (_, i) => i !== colorindex
    );
    setaddproduct({ ...addproduct, colorpalets: newColorPalets });
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Color Palettes</h2>
      <div className="flex flex-wrap gap-4 p-4">
        {addproduct.colorpalets.map((color, colorindex) => (
          <div
            key={colorindex}
            className="relative flex flex-col gap-4 items-center border border-slate-300 rounded-lg p-4 shadow-md w-full"
          >
            {/* Delete color palette button */}
            <button
              className="absolute top-2  right-2 bg-red-600 text-white rounded-full h-8 w-8 flex items-center justify-center"
              onClick={() => deletecolorpalet(color, colorindex)}
            >
              &times;
            </button>
            {/* Color code Display */}
            <div
              className="relative w-14 aspect-square border border-slate-300 rounded-lg"
              style={{ backgroundColor: color.color }}
            >
              <input
                type="color"
                value={addproduct?.colorpalets[colorindex]?.color}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => setinputcolor(colorindex, e.target.value)}
              />
            </div>
            {/* fixed color selection */}
            <div className="w-full flex justify-center">
              <div className="w-fit flex overflow-x-scroll text-sm">
                {fixedcolors.map((item, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setfixedcolors(colorindex, item?.color, item?.name)
                    }
                    className="px-2"
                  >
                    <span
                      style={{ backgroundColor: item?.color }}
                      className="block w-10 mx-auto aspect-square  border border-slate-300 rounded-lg"
                    ></span>
                    <span className="text-center whitespace-nowrap">
                      {item?.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Name */}
            <div>
              <label className="block mb-1">Color Name:</label>
              <input
                type="text"
                className="border border-slate-300 rounded p-2"
                value={color.name}
                onChange={(e) => setinputcolorname(colorindex, e.target.value)}
              />
            </div>
            {/* Images Section */}
            <div className="w-full">
              <h3 className="text-xl font-semibold text-center mb-2">Images</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {color.images.map((image, imageindex) => (
                  <div key={imageindex} className="relative ">
                    <img
                      src={
                        image instanceof File
                          ? URL.createObjectURL(image)
                          : image
                      }
                      className="border border-slate-300 aspect-square w-32 rounded overflow-hidden object-cover"
                      alt={`Color image ${imageindex + 1}`}
                    />
                    {/* move button */}
                    <div className="flex justify-center gap-5 my-2">
                      <button
                        className="h-10 aspect-square bg-cyan-500 text-white rounded-full"
                        onClick={() => moveimages(colorindex, imageindex, -1)}
                      >
                        -
                      </button>
                      <button
                        className="h-10 aspect-square bg-cyan-500 text-white rounded-full"
                        onClick={() => moveimages(colorindex, imageindex, 1)}
                      >
                        +
                      </button>
                    </div>
                    {/* Delete image button */}
                    <button
                      className="absolute top-0 right-0 bg-red-600 text-white rounded-full  w-6 aspect-square flex items-center justify-center"
                      onClick={() => deleteimage(color, colorindex, imageindex)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              {/* Add Image Button */}
              <div className="flex justify-center mt-2">
                <button className="relative border w-24 aspect-square flex flex-col items-center justify-center rounded-lg">
                  <input
                    className="absolute inset-0 h-full w-full opacity-0 cursor-pointer z-10"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => addimage(color, colorindex, e)}
                  />
                  <BiSolidImageAdd className="text-2xl" />
                  <span className="text-sm">Add Image</span>
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
                uploadproductdata?.colorpalets[0],
              ],
            }));
          }}
        >
          + Add Palette
        </button>
      </div>
    </div>
  );
}

export default Colorpalets;
