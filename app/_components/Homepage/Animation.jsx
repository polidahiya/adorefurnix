const Animation = () => {
  return (
    <section
      className="relative bg-cover bg-center w-full aspect-[9/4] text-white"
      style={{ backgroundImage: "url(/images/pullokkaran-banner-01.jpg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Discover Premium Furniture
        </h1>
        <p className="mt-4 text-center text-lg md:text-xl">
          Transform your home with our handpicked furniture collection
        </p>
        <a
          href="/shop"
          className="mt-6 px-6 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 text-white text-lg"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Animation;
