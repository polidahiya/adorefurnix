import { getadminorders } from "../_serveractions/Adminorders";
import Selectordertype from "./_comps/Selectordertype";
import Ordercard from "./_comps/_orderscard/Ordercard";
import Productnotfound from "../_components/Productnotfound";
import { revalidatePath } from "next/cache";
import Searchbox from "./_comps/Searchbox";

export default async function Adminhome({ searchParams }) {
  // refresh orders
  const Refreshorders = async (link) => {
    "use server";
    revalidatePath(link);
  };

  const ordertype = Number(searchParams?.order) || 0;
  const ordersres = await getadminorders(ordertype);

  let orders;
  if (ordersres.status == 200) orders = ordersres.result;

  if (ordersres.status != 200)
    return (
      <div className="h-screen w-full flex items-center justify-center text-red-500">
        {ordersres.message}{" "}
      </div>
    );

  return (
    <div>
      <Selectordertype ordertype={ordertype} Refreshorders={Refreshorders} />
      <Searchbox />
      {orders.length == 0 && <Productnotfound />}
      <div className={`p-[20px]`}>
        {orders.map((item, i) => {
          return (
            <Ordercard
              key={new Date().getMilliseconds() + Math.random() + i}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}
