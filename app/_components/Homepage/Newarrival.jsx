import Link from "next/link";
import Nextimage from "@/app/_components/Nextimage";
import { LuArrowRightCircle } from "react-icons/lu";

const Newarrival = async ({ products }) => {
  const newarrival = products
    .filter((item) => item.keywords.toLowerCase().includes("new arrivals"))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="">
      <h3 className="text-2xl md:text-4xl font-bold text-center  mb-10 font-recline  ">
        New Arrivals
      </h3>
      <div className="relative grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 md:gap-6 px-4 md:px-16">
        {newarrival.map((item) => (
          <div key={item.name} className="relative bg-white shadow-md  p-2">
            <Nextimage
              className="w-full aspect-square object-cover bg-bg1"
              src={item.colorpalets[0]?.images[0]}
              alt={item.name}
              width={400}
              height={400}
              quality={10}
              loading="lazy"
              
            />
            <h4 className="text-[14px] md:text-[16px] font-semibold  mb-2 truncate mt-2">
              {item.name}
            </h4>
            <p className="font-bold text-[16px] md:text-[20px]">
              ₹{parseInt(item?.price, 10).toLocaleString("en-IN")}
            </p>
            <Link
              href={`/${item.category}/${item.subcat}/${item._id}`.replace(
                / /g,
                "-"
              )}
              className="block mt-4 bg-orange-500 text-center text-white py-2 hover:bg-orange-600"
            >
              View Details
            </Link>
            {/* new tag */}
            <img
              className="absolute top-[-13px] right-[-14px] w-24 aspect-square"
              src="/images/newtag.webp"
              alt="new tag image"
              height={300}
              width={500}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href={"/Search?query=new_arrivals"}
          className="relative w-fit group flex items-center justify-center gap-[10px] px-6 py-3 mt-8  text-white font-semibold rounded-full overflow-hidden"
        >
          <span className="z-10">View More</span>
          <LuArrowRightCircle className="z-10" />
          <div className="absolute top-0 left-0 w-[200%] h-full bg-animatingtheme  group-hover:translate-x-[-50%] duration-200"></div>
        </Link>
      </div>
    </section>
  );
};

export default Newarrival;
