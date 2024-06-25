import React from "react";
import Image from "next/image";

function page() {
  const services = [
    {
      image: "",
      heading: "Heading",
      para: "This is a test paragraph",
    },
    {
      image: "",
      heading: "Heading",
      para: "This is a test paragraph",
    },
    {
      image: "",
      heading: "Heading",
      para: "This is a test paragraph",
    },
  ];
  const bestproducts = [
    {
      image:
        "https://gallerypng.com/wp-content/uploads/2024/05/riddhikumar-girl-sitting-on-chair-png-image.png",
      name: "Test name",
      price: "100$",
      stars: 5,
    },
    {
      image:
        "https://images.restaurant-furniture.com/image/upload/c_pad,dpr_1.0,f_auto,h_650,q_auto,w_650/rfcom/media/catalog/product/u/s/us-255-dm-b-vnl-bl-s-vnl-bl-1.png",
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
    <div>
      <div className="relative w-full box-content h-fit">
        <nav className="absolute top-0 left-0 h-[80px] w-full flex items-center justify-between p-[10px] md:px-[40px] z-10 ">
          <Image
            className="h-[50px] invert"
            src="/logo.png"
            alt="adorefurnix logo"
            height={50}
            width={200}
          ></Image>
          <ul className="absolute  top-0 left-[50%] translate-x-[-50%] h-full flex items-center justify-center gap-[50px] text-[18px] text-white">
            <li className="bg-clip-text text-transparent font-bold bg-[linear-gradient(90deg,#10e89c,#0593f7)]">
              Home
            </li>
            <li>Home</li>
            <li>Home</li>
            <li>Car</li>
          </ul>
          <div></div>
        </nav>
        {/*  */}
        <div className="absolute top-[150px]">
          <h2 className="text-[3vw] font-semibold max-w-[70%] text-center mx-auto text-white">
            Hamari collection itni pyaari h ki sabko unhe ghar me rakhne ka man
            kare
          </h2>
        </div>

        {/* bg image */}
        <img
          className="w-full top-0 z-[-1]"
          src="/images/pullokkaran-banner-01.jpg"
          alt="homepageslide"
          height={1000}
          width={1000}
        ></img>
        {/* gradient */}
        <div
          className="absolute bottom-0 left-0 w-full h-[150px] z-10"
          style={{
            backgroundImage: "linear-gradient(0deg, white, transparent)",
          }}
        ></div>
      </div>
      {/*  */}
      <div className="h-[200px] flex items-center justify-evenly ">
        {services.map((item, i) => {
          return (
            <div key={i} className="flex">
              <Icon />
              <div className="flex flex-col justify-between py-[5px]">
                <h2 className="text-[25px] font-bold">{item.heading}</h2>
                <p className="font-semibold text-slate-500">{item.para}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* best selling products */}
      <div className="flex items-center gap-[10px] px-[10px] md:px-[40px]">
        <div className="min-w-[300px]">
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
            <div key={i} className="relative w-full rounded-[30px]">
              <img
                className="w-full aspect-square object-contain"
                src={item.image}
                alt=""
              />
              <div className="bg-white rounded-[30px] p-[20px] shadow-[4px_4px_5px_#bababa7f]">
                <div>
                  <span className="text-[20px] font-bold ">{item.name}</span>
                  <br />
                  {new Array(item.stars).fill(null).map((star, i) => {
                    return "⭐";
                  })}
                </div>
                <div className="mt-[30px] text-[20px] font-bold">
                  {item.price}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 w-full h-[70%]  rounded-[30px] z-[-1]"
                style={{ background: "#c1d0e4" }}
              ></div>
            </div>
          );
        })}
      </div>
      {/*  */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa vitae
        consequatur iusto praesentium, animi consectetur beatae placeat
        corrupti, molestiae quas fugiat neque, aliquid eligendi illum suscipit
        deserunt quam ratione aperiam sapiente adipisci id maiores quo repellat
        obcaecati! Cumque reiciendis itaque autem eaque eveniet doloribus nam
        excepturi natus! Rem natus vero non reiciendis, harum voluptas adipisci
        aut, praesentium fuga voluptate fugit quas doloremque illum? Ut rerum
        quia deleniti aspernatur a distinctio deserunt excepturi asperiores
        pariatur vero recusandae dolore amet iure, fugit dicta natus commodi
        obcaecati adipisci alias. Architecto, enim? Consectetur, quod nulla.
        Soluta earum iste veritatis harum fuga ducimus, voluptates ut in impedit
        dolore quia accusamus error, expedita dolorum dolorem odit culpa
        repellendus odio delectus quisquam quasi. Ullam illum soluta dolorum
        veritatis atque corporis nisi omnis obcaecati sapiente! Illum aut
        distinctio quas non officia, quaerat repellendus nobis ut quibusdam
        suscipit mollitia, sunt animi eveniet modi amet quidem quos quia. Quidem
        praesentium voluptatibus doloremque. Eligendi maxime laborum hic! Ea
        enim quasi consequatur ut maiores nam commodi porro, dignissimos
        suscipit quos culpa at? Placeat deleniti explicabo harum dolor ipsam vel
        quo. Esse maxime tempora doloribus praesentium eligendi veritatis vero
        aliquam, animi enim illum a sit, vitae, repudiandae impedit numquam ab
        dignissimos soluta! Minima totam, sapiente beatae id tempore sequi cum
        repellat nesciunt odio voluptas praesentium est libero autem
        exercitationem perferendis repudiandae! Error, quibusdam ex temporibus
        harum aut repellat? Assumenda suscipit, consequuntur laudantium rerum
        repudiandae error itaque ducimus doloremque vel tempore maxime totam
        minus temporibus saepe consequatur modi quod quaerat cumque fugit odit
        quos velit qui sint? Fuga, alias? Dolorem porro aliquam, recusandae
        expedita, voluptate placeat, maiores modi delectus quisquam voluptatum
        voluptatibus doloribus quia ratione harum totam neque dignissimos
        officia. Eum expedita nihil reprehenderit placeat illum ducimus quis
        vitae optio facere aliquid dolorum rem similique voluptatem laborum
        dolor natus vero incidunt, maiores tempora sunt ullam doloremque, sequi
        deleniti sint! Nam adipisci esse sint itaque quia, aliquam modi voluptas
        numquam natus. Quos cum nemo odio assumenda possimus, est qui odit
        inventore, quaerat quia quidem et, molestias tempore atque corporis
        rerum praesentium! Eligendi quisquam optio obcaecati dolores? Excepturi,
        sunt dolor! Distinctio, at laboriosam libero tenetur ullam dolores.
        Consectetur quam commodi dignissimos consequuntur consequatur impedit
        tempora nostrum quis, ad aspernatur itaque laboriosam dolorum, libero
        animi similique quasi nihil excepturi! Consectetur rem in veniam
        cupiditate nihil excepturi maiores totam architecto? Quisquam laboriosam
        atque cum ad! Illum iusto illo provident in saepe, harum dolor?
        Repellendus accusantium obcaecati quidem vel. Impedit incidunt omnis
        minus, quam explicabo et esse sed alias, distinctio praesentium numquam
        id, recusandae iste dignissimos blanditiis debitis rerum corporis ullam!
        Fugiat, eligendi commodi accusamus ipsum perspiciatis nam in excepturi
        voluptatum tenetur doloribus repellat corrupti, corporis libero odit
        similique recusandae inventore officia, atque ullam architecto quis quod
        autem omnis magnam. Quibusdam distinctio excepturi placeat molestias cum
        voluptatibus itaque ducimus ea nihil numquam, reiciendis fuga neque quae
        doloribus dicta provident eveniet tempora, exercitationem eius. Ex in
        excepturi perspiciatis sunt inventore suscipit totam. Odit reiciendis
        eveniet veniam, labore, sint voluptas deleniti sit corporis facilis
        velit optio non distinctio doloribus dolorum magnam eaque saepe odio, ex
        delectus sed necessitatibus. Recusandae, dolorem excepturi possimus rem
        nesciunt reiciendis repellat repudiandae. Quibusdam cumque nulla sit.
        Enim, ad eos. Adipisci molestias deleniti ullam possimus consectetur
        beatae, dolorum esse iure voluptatibus cupiditate nulla perferendis fuga
        sapiente a nisi. Quas officia perspiciatis natus aliquam minima
        cupiditate perferendis, quasi ipsum architecto non voluptatem accusamus
        officiis, soluta laudantium modi placeat sequi, facere fugit accusantium
        in dolores ducimus laborum. Cum sequi temporibus facilis repellendus
        laboriosam libero ab nam. Alias officiis culpa iste suscipit blanditiis
        voluptatum ducimus, quaerat ipsa unde! Beatae minus eligendi culpa eaque
        inventore, perferendis voluptatum enim exercitationem, impedit corporis
        similique, rem velit dignissimos commodi modi! Ut, libero tempore?
        Dignissimos dolorum, odit itaque dolore, ullam, perspiciatis atque sed
        suscipit quae possimus illo accusamus natus quis labore nisi modi
        officiis explicabo vero velit reprehenderit veniam optio! Aut,
        consequatur officia iure voluptatem, dignissimos placeat maxime
        obcaecati rem fuga, nam impedit. Accusamus qui illum doloribus, eaque
        dicta ducimus dolore porro delectus modi commodi ad ipsam ullam
        voluptates excepturi quae et quia voluptatem, non aliquid. Fugit fugiat
        doloribus minus est natus voluptatibus corporis voluptatem, nisi qui
        molestias possimus accusamus non? Esse numquam ratione sint fugiat illo
        natus iure minus officia, veniam id aperiam. Reiciendis est, cupiditate
        consequuntur rerum atque temporibus natus vitae quae animi deleniti
        nesciunt architecto sed non officiis alias saepe odit voluptate esse
        dolorum autem porro veritatis fugiat quos quidem. Quo dolorem atque
        libero ducimus eius ab dolores voluptates ullam! Impedit et nisi,
        quaerat voluptatem tempore voluptas vel dolor deleniti neque vitae odit
        aspernatur consequuntur, eos ad dolorem ullam. Est excepturi repellendus
        laborum? Rerum ipsam amet neque alias, minus suscipit ea dolores at
        repellendus iure ipsum molestias, dignissimos perferendis porro officiis
        deserunt fuga consectetur doloribus minima soluta! In maiores odio
        incidunt dolore ipsum debitis minima consectetur minus ex doloremque!
        Praesentium soluta illo ut quisquam fugiat sequi dignissimos velit,
        temporibus aut minima aliquam error? Ab rem iusto distinctio earum error
        veniam a reprehenderit autem labore nostrum, exercitationem natus ipsum?
        Architecto necessitatibus nesciunt accusantium dolores, animi sed illo?
        Non numquam optio eligendi quos dolores? Facilis at voluptatibus sunt
        eligendi omnis tenetur recusandae veniam modi consequuntur
        exercitationem. Labore in placeat sit adipisci itaque, repudiandae
        facilis beatae similique aspernatur quasi a sequi magnam blanditiis
        consectetur enim incidunt molestiae dolorem exercitationem recusandae?
        Eveniet id blanditiis saepe fugiat repudiandae quae ipsam eaque
        consequatur alias quis, quo, natus reprehenderit vel enim. Saepe
        blanditiis sint obcaecati dignissimos nam cumque, sit sequi minus
        corporis harum similique quidem pariatur iste at suscipit. Reprehenderit
        veritatis veniam praesentium minus, ratione aut hic neque earum at
        labore corporis impedit cum ea sint nihil nostrum. Ad repellendus quidem
        dolor error dolores ab commodi? Nostrum amet excepturi quae
        exercitationem officiis doloremque facilis ipsam impedit, vitae vel
        mollitia adipisci est. Tenetur ab harum excepturi, repellat veritatis
        doloribus inventore, est sint aliquid quaerat, ullam consequatur
        delectus nostrum et? Voluptates sint quas explicabo! Vitae sed
        voluptatum doloremque ipsam nesciunt dolores ducimus accusamus ullam
        recusandae fugit necessitatibus enim cupiditate earum quis, at deserunt
        modi fugiat quas eveniet. Quibusdam quaerat recusandae ea.
      </p>
    </div>
  );
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon h-[80px]"
      viewBox="0 0 1024 1024"
    >
      <g>
        <path
          fill="#0AF"
          d="M862.906 932.188H162.97c-38.719 0-70.125-31.407-70.125-70.125V432.5c0-38.719 31.406-70.125 70.125-70.125h699.937c38.719 0 70.125 31.406 70.125 70.125v429.563c0 38.718-31.406 70.125-70.125 70.125z"
        ></path>
        <path
          fill="#FC592D"
          d="M784.063 227.563H239.938c-32.438 0-58.782 26.343-58.782 58.78v45.938h661.688v-45.937c0-32.531-26.344-58.781-58.782-58.781z"
        ></path>
        <path
          fill="#FFCE00"
          d="M721.25 91.344H306.594c-32.438 0-58.781 26.344-58.781 58.781v45.938h532.312v-45.938c-.094-32.438-26.344-58.781-58.875-58.781z"
        ></path>
      </g>
    </svg>
  );
}

export default page;
