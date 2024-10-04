import Link from "next/link";
import Image from "next/image";
import { LuArrowRightCircle } from "react-icons/lu";

const Newarrival = async ({ Cachedproducts }) => {
  const allproducts = await Cachedproducts();
  const newarrival = allproducts
    .filter((item) => item.keywords.toLowerCase().includes("new arrivals"))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="mt-20 bg-bg1 py-10">
      <h3 className="text-3xl md:text-4xl font-bold text-center  mb-10 font-serif italic ">
        New Arrivals
      </h3>
      <div className="relative grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 px-4 md:px-16">
        {newarrival.map((item) => (
          <div
            key={item.name}
            className="relative bg-white shadow-md rounded-xl p-2"
          >
            <Image
              className="w-full aspect-[4/3] object-cover rounded-lg"
              src={item.colorpalets[0]?.images[0]}
              alt={item.name}
              width={400}
              height={400}
              loading="lazy"
            />
            <h4 className="text-[18px] font-semibold  mb-2 truncate mt-2">
              {item.name}
            </h4>
            <p className="font-bold text-[16px] md:text-[20px]">
              ₹{parseInt(item?.price, 10).toLocaleString("en-IN")}
            </p>
            <Link
              href={`/${item.category}/${item.subcat}/${item._id}`}
              className="block mt-4 bg-orange-500 text-center text-white py-2 rounded-lg hover:bg-orange-600"
            >
              View Details
            </Link>
            {/* new tag */}
            <img
              className="absolute top-[-13px] right-[-14px] h-24 aspect-square"
              src="/images/newtag.webp"
              alt="new tag image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <center>
        <Link
          href={"/Search?query=new arrivals"}
          className="relative w-fit group flex items-center justify-center gap-[10px] px-6 py-3 mt-8  text-white font-semibold rounded-full overflow-hidden"
        >
          <span className="z-10">View More</span>
          <LuArrowRightCircle className="z-10" />
          <div className="absolute top-0 left-0 w-[200%] h-full bg-[linear-gradient(90deg,#10e89c,#0593f7,#10e89c)]  group-hover:translate-x-[-50%] duration-200"></div>
        </Link>
      </center>
    </section>
  );
};

export default Newarrival;
