"use server";
import { Userification } from "@/app/Verifytoken";
import { userscollection } from "@/app/Mongodb";

// get liked products for user
export const getLikedProducts = async () => {
  try {
    const tokenres = await Userification();

    if (!tokenres) {
      return { message: "Please login first" };
    }

    let result = await userscollection.findOne(
      { email: tokenres.email },
      { projection: { favourites: 1 } }
    );

    result._id = result._id.toString();

    return result;
  } catch (error) {
    console.log(error);
    return { message: "Server Error" };
  }
};

// is liked
export async function isliked(productid) {
  try {
    const tokenres = await Userification();

    if (!tokenres) {
      return false;
    }

    const result = await userscollection.findOne({ email: tokenres.email });

    if (result?.favourites.includes(productid)) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

// add to favourite or remove favourite
export async function likeproduct(productid, liked) {
  try {
    const tokenres = await Userification();

    if (!tokenres) {
      return { message: "Please login first" };
    }
    if (liked) {
      // remove from favourite
      const result = await userscollection.findOneAndUpdate(
        { email: tokenres.email },
        { $pull: { favourites: productid } },
        { new: true }
      );

      if (result) return { message: "Removed from favourites" };
    } else {
      // add to favourite
      const result = await userscollection.findOneAndUpdate(
        { email: tokenres.email },
        { $addToSet: { favourites: productid } },
        { new: true, upsert: true }
      );

      if (result) return { message: "Added to favourites" };
    }
  } catch (error) {
    return { message: "Invalid User" };
  }
}
