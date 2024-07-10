"use client";
import React, { useState } from "react";
import { Addproduct } from "../Serveraction";
import { categorylist } from "@/app/commondata";
import { AppContextfn } from "@/app/Context";

function Categories() {
  const {
    addproduct,
    setaddproduct,
    updateproduct,
    setupdateproduct,
    deletedimages,
    setdeletedimages,
    setadminproductrefresher,
    setmessagefn,
  } = AppContextfn();
  const [uploadloading, setuploadloading] = useState(false);

  const updatefields = (e) => {
    setaddproduct({ ...addproduct, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, index, key) => {
    const newArray = [...addproduct[key]];
    newArray[index] = e.target.value;
    setaddproduct({
      ...addproduct,
      [key]: newArray,
    });
  };

  const resetfields = () => {
    setaddproduct({
      category: "Living Room",
      subcat: "Sofa sets",
      name: "",
      Dimensions: "",
      price: 0,
      rating: 5,
      discount: 0,
      keywords: "",
      available: true,
      desc: [],
      colorpalets: [
        {
          color: "",
          name: "",
          images: [],
        },
      ],
    });
  };

  return (
    <>
      <h2 className="text-center mt-[30px] text-[20px] font-bold ">
        Select a category
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[10px] p-[20px]">
        {Object.keys(categorylist).map((item, i) => {
          return (
            <button
              key={i}
              className={`border border-slate-300 rounded-[10px] p-[10px] 
                ${
                  addproduct?.category == item ? "bg-slate-600 text-white" : ""
                }`}
              onClick={() => {
                setaddproduct({
                  ...addproduct,
                  category: item,
                  subcat: categorylist[item]?.subcat[0]?.name,
                });
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <h2 className="text-center mt-[30px] text-[20px] font-bold">
        Select Subcategory
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[10px] p-[20px]">
        {categorylist[addproduct?.category]?.subcat?.map((item, i) => {
          return (
            <button
              key={i}
              className={`border border-slate-300 rounded-[10px] p-[10px] ${
                addproduct?.subcat == item.name ? "bg-slate-600 text-white" : ""
              }`}
              onClick={() => {
                setaddproduct({ ...addproduct, subcat: item.name });
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      {/* details */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[10px] p-[20px]">
        <div className="grid grid-cols-2 bg-slate-300 p-[5px]">
          <label className="py-[5px]">Name:-</label>
          <input
            type="text"
            name="name"
            value={addproduct.name}
            onInput={updatefields}
            className="w-full outline-none border border-slate-300  px-[20px] py-[5px]"
          />
        </div>
        <div className="grid grid-cols-2 bg-slate-300 p-[5px]">
          <label className="py-[5px]">Dimensions:-</label>
          <input
            type="text"
            name="Dimensions"
            value={addproduct.Dimensions}
            onInput={updatefields}
            className="w-full outline-none border border-slate-300  px-[20px] py-[5px]"
          />
        </div>
        <div className="grid grid-cols-2 bg-slate-300 p-[5px]">
          <label className="py-[5px]">Price:-</label>
          <input
            type="number"
            name="price"
            value={addproduct.price}
            onInput={updatefields}
            className="w-full outline-none border border-slate-300  px-[20px] py-[5px]"
          />
        </div>
        <div className="grid grid-cols-2 bg-slate-300 p-[5px]">
          <label className="py-[5px]">
            Discount precentage{"("} 0-100 {")"}:-
          </label>
          <input
            type="number"
            name="discount"
            value={addproduct.discount}
            onInput={updatefields}
            className="w-full outline-none border border-slate-300  px-[20px] py-[5px]"
          />
        </div>
        <div className="grid grid-cols-2 bg-slate-300 p-[5px]">
          <label className="py-[5px]">Keywords:-</label>
          <input
            type="text"
            name="keywords"
            value={addproduct.keywords}
            onInput={updatefields}
            className="w-full outline-none border border-slate-300  px-[20px] py-[5px]"
          />
        </div>
        <div className="grid grid-cols-3 bg-slate-300 p-[5px]">
          <label className="py-[5px]">Available:-</label>
          <button
            className={`${
              addproduct.available ? "bg-green-600 text-white" : "bg-white"
            }`}
            onClick={() => {
              setaddproduct({ ...addproduct, available: true });
            }}
          >
            Yes
          </button>
          <button
            className={`${
              addproduct.available ? "bg-white" : "bg-green-600 text-white"
            }`}
            onClick={() => {
              setaddproduct({ ...addproduct, available: false });
            }}
          >
            No
          </button>
        </div>
        <div className="grid grid-cols-2 bg-slate-300 p-[5px]">
          <label className="py-[5px]">
            Ratings{"("}0-5{")"}:-
          </label>
          <input
            type="number"
            name="rating"
            value={addproduct.rating}
            onInput={updatefields}
            className="w-full outline-none border border-slate-300  px-[20px] py-[5px]"
          />
        </div>
      </div>
      {/* desc */}
      <div className="flex flex-col items-center gap-[10px] mt-[30px] px-[20px]">
        <label className="text-center mt-[30px] text-[20px] font-bold">
          Descriptions
        </label>
        {addproduct.desc.map((descItem, index) => (
          <div
            key={index}
            className="w-full flex gap-[10px] bg-slate-300 p-[5px]"
          >
            <input
              type="text"
              value={descItem}
              className="h-[30px] w-full outline-none rounded-[10px] px-[20px]"
              onChange={(e) => handleArrayChange(e, index, "desc")}
            />
            <button
              className="h-[30px] aspect-square bg-red-600 text-white rounded-[10px] border border-slate-300"
              onClick={() => {
                const newdesc = [...addproduct.desc];
                newdesc.splice(index, 1);

                setaddproduct({
                  ...addproduct,
                  desc: newdesc,
                });
              }}
            >
              X
            </button>
          </div>
        ))}
        <button
          className="h-[30px] w-[100px] bg-green-600 text-white rounded-[10px] "
          onClick={() => {
            setaddproduct({ ...addproduct, desc: [...addproduct.desc, ""] });
          }}
        >
          +
        </button>
      </div>
      {/* color palets */}
      <div className="mt-[30px]">
        <center>
          <label className=" mt-[30px] text-[20px] font-bold">
            Color palets
          </label>
        </center>
        <div className=" flex gap-[10px] p-[10px] flex-wrap">
          {addproduct.colorpalets.map((color, colorindex) => {
            return (
              <div
                key={colorindex}
                className="relative flex flex-col gap-[10px] items-center border border-slate-300 p-[10px]"
              >
                {/* delete color palet */}
                <button
                  className="absolute top-0 right-0 bg-red-600 text-white aspect-square h-[30px]"
                  onClick={() => {
                    // store deleted images
                    if (updateproduct) {
                      color.images.forEach((image, i) => {
                        if (image instanceof File) {
                        } else {
                          setdeletedimages((pre) => [...pre, image]);
                        }
                      });
                    }
                    //
                    const newcolorpalet = [...addproduct.colorpalets];
                    newcolorpalet.splice(colorindex, 1);

                    setaddproduct({
                      ...addproduct,
                      colorpalets: newcolorpalet,
                    });
                  }}
                >
                  X
                </button>
                {/* color  */}
                <div
                  className="relative h-[50px] aspect-square border border-slate-300 rounded-full"
                  style={{
                    backgroundColor: color.color,
                  }}
                >
                  <input
                    type="color"
                    className="w-full h-full opacity-0"
                    onInput={(e) => {
                      const updatedColorpalets = addproduct.colorpalets.map(
                        (palette, i) =>
                          i === colorindex
                            ? { ...palette, color: e.target.value }
                            : palette
                      );
                      setaddproduct({
                        ...addproduct,
                        colorpalets: updatedColorpalets,
                      });
                    }}
                  />
                </div>
                {/* color name */}
                <div>
                  <label>Color Name</label>
                  <input
                    type="text"
                    className="border border-slate-300 outline-none ml-[10px] p-[5px]"
                    value={color.name}
                    onInput={(e) => {
                      const updatedColorpalets = addproduct.colorpalets.map(
                        (palette, i) =>
                          i === colorindex
                            ? { ...palette, name: e.target.value }
                            : palette
                      );
                      setaddproduct({
                        ...addproduct,
                        colorpalets: updatedColorpalets,
                      });
                    }}
                  />
                </div>
                {/* images */}
                <div className="p-[20px]">
                  <center>
                    <label className=" mt-[30px] text-[20px] font-bold">
                      Images
                    </label>
                  </center>
                  <div className=" flex gap-[10px] p-[10px] flex-wrap">
                    {color?.images.map((image, imageindex) => {
                      return (
                        <div
                          key={imageindex}
                          className="relative border border-slate-300 aspect-[4/3] h-[150px]"
                        >
                          <img
                            src={
                              image instanceof File
                                ? URL.createObjectURL(image)
                                : image
                            }
                            className="h-full w-full object-contain object-center"
                          />
                          {/* delete image button */}
                          <button
                            className="absolute top-0 right-0 bg-red-600 text-white aspect-square h-[30px]"
                            onClick={() => {
                              // capture deleted image
                              if (updateproduct) {
                                if (color?.images[imageindex] instanceof File) {
                                } else {
                                  setdeletedimages((pre) => [
                                    ...pre,
                                    color?.images[imageindex],
                                  ]);
                                }
                              }

                              //
                              const newimages = [...color.images];
                              newimages.splice(imageindex, 1);

                              const updatedColorpalets =
                                addproduct.colorpalets.map((palette, i) =>
                                  i === colorindex
                                    ? { ...palette, images: newimages }
                                    : palette
                                );

                              setaddproduct({
                                ...addproduct,
                                colorpalets: updatedColorpalets,
                              });
                            }}
                          >
                            X
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <center>
                    <button className="relative  h-[30px] w-[100px] bg-green-600 text-white rounded-[10px] ">
                      <input
                        className="absolute top-0 left-0 h-full w-full z-10 opacity-0"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const updatedColorpalets =
                              addproduct.colorpalets.map((palette, i) =>
                                i === colorindex
                                  ? {
                                      ...palette,
                                      images: [...color.images, file],
                                    }
                                  : palette
                              );
                            setaddproduct({
                              ...addproduct,
                              colorpalets: updatedColorpalets,
                            });
                          }
                        }}
                      />
                      Add Image
                    </button>
                  </center>
                </div>
              </div>
            );
          })}
        </div>
        {/* add color palets */}
        <center>
          <button
            className="h-[30px] w-[100px] bg-green-600 text-white rounded-[10px] "
            onClick={() => {
              setaddproduct((pre) => {
                return {
                  ...pre,
                  colorpalets: [
                    ...pre.colorpalets,
                    {
                      color: "",
                      name: "",
                      images: [],
                    },
                  ],
                };
              });
            }}
          >
            Add palet
          </button>
        </center>
      </div>
      {/* add or update product button */}
      <div className="flex items-center justify-center gap-[20px] my-[50px]">
        <button
          className="relative flex items-center justify-center gap-[10px] h-[30px] min-w-[160px] bg-green-600 text-white rounded-[10px] "
          onClick={async () => {
            if (uploadloading) {
              return;
            }
            setuploadloading(true);

            const formData = new FormData();
            addproduct.colorpalets.forEach((item, i) => {
              item.images.forEach((image, j) => {
                if (image instanceof File) {
                  const imagename = "image" + i + j;
                  formData.append(imagename, image);
                  item.images[j] = imagename;
                }
              });
            });

            const res = await Addproduct(addproduct, formData, deletedimages);
            if (
              res?.message == "Updated successfully" ||
              res?.message == "Added successfully"
            ) {
              // update show products
              setadminproductrefresher((pre) => pre + 1);
            }
            setmessagefn(res?.message);

            resetfields();
            setupdateproduct(false);
            setuploadloading(false);
          }}
        >
          {uploadloading && (
            <div className="uploadloader h-[20px] aspect-square rounded-full border-t-2 border-l-2 border-solid border-white"></div>
          )}
          {updateproduct ? " Update Product" : "Add Product"}
        </button>
        {updateproduct && (
          <button
            className="h-[30px] min-w-[160px] border border-slate-300 rounded-[10px] "
            onClick={() => {
              resetfields();
              setdeletedimages([]);
              setupdateproduct(false);
            }}
          >
            Cancle Update
          </button>
        )}
      </div>
    </>
  );
}

export default Categories;
