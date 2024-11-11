import React, { useMemo } from "react";
import { filterlist, sortinglist } from "@/app/commondata";
import Link from "next/link";

function Appliedfilters({ category, subcat, searchParams }) {
  const { pricerange, sort } = searchParams;

  const baseUrl = `/${category}${subcat ? `/${subcat}` : ""}`;

  const createLinkWithParams = (newParams) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === 0 || value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const pricerangeLink = useMemo(
    () => createLinkWithParams({ pricerange: 0 }),
    [searchParams, baseUrl]
  );

  const sortLink = useMemo(
    () => createLinkWithParams({ sort: 0 }),
    [searchParams, baseUrl]
  );

  const subcatLink = useMemo(
    () => createLinkWithParams({ subcat: null }),
    [searchParams, baseUrl]
  );

  if (
    !subcat &&
    (pricerange == null || pricerange == 0) &&
    (sort == null || sort == 0)
  )
    return null;

  return (
    <div className="flex flex-wrap gap-2 mb-5 text-sm">
      {pricerange && pricerange != 0 && (
        <FilterItem
          label={filterlist[pricerange]?.name}
          link={pricerangeLink}
        />
      )}
      {sort && sort != 0 && (
        <FilterItem
          label={`Sort by ${sortinglist[sort]?.name}`}
          link={sortLink}
        />
      )}
      {subcat && <FilterItem label={`${subcat} only`} link={subcatLink} />}
    </div>
  );
}

function FilterItem({ label, link }) {
  return (
    <div className="flex items-center h-7 pl-5 rounded-lg bg-bg1">
      {label}{" "}
      <Link
        href={link.replace(/ /g, "_")}
        className="text-sm hover:text-theme px-3"
      >
        X
      </Link>
    </div>
  );
}

export default Appliedfilters;
