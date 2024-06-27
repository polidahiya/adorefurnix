import React from "react";

function Bestselling() {
  const bestproducts = [
    {
      image: "/images/bestselling1.png",
      name: "Test name",
      price: "100$",
      stars: 5,
    },
    {
      image: "/images/bestselling2.png",
      name: "Test name",
      price: "100$",
      stars: 3,
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-modern-white-chair-object-png-image_10076590.png",
      name: "Test name",
      price: "100$",
      stars: 4,
    },
  ];

  return (
    <>
      <h3 className="text-[25px] text-center block lg:hidden font-bold">
        Best Selling Products{" "}
      </h3>
      <div className="flex items-center gap-[20px] px-[10px] md:px-[40px] mt-[10px] md:mt-[50px]">
        <div className="min-w-[300px] hidden lg:block">
          <h3
            className="text-[40px] font-bold p-0"
            style={{ lineHeight: "45px" }}
          >
            Best Selling Products{" "}
          </h3>
          <button className="mt-[20px] font-bold text-gray-700">
            See all collection{" "}
          </button>
        </div>

        {/* products */}
        {bestproducts.map((item, i) => {
          return (
            <div
              key={i}
              className="relative w-full rounded-[20px] md:rounded-[30px]"
            >
              <img
                className="w-full aspect-square object-contain"
                src={item.image}
                alt=""
              />
              <div className="bg-white rounded-[20px] md:rounded-[30px] p-[10px] md:p-[20px] shadow-[4px_4px_5px_#bababa7f]">
                <div>
                  <span className="text-[14px] md:text-[20px] font-bold ">
                    {item.name}
                  </span>
                  <br />
                  <span className="text-[10px] md:text-[16px] ">
                    {new Array(item.stars).fill(null).map(() => {
                      return "⭐";
                    })}{" "}
                    {item.stars + "/" + 5}
                  </span>
                </div>
                <div className="mt-[10px] md:mt-[30px] text-[14px] md:text-[20px] font-bold text-slate-400">
                  {item.price}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-[70%] bg-[#c1d0e4] rounded-[20px]  md:rounded-[30px] z-[-1]"></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Bestselling;
