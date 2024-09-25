"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import NewsCard from "@/components/common/NewsCard";
import { getArticle } from "@/app/(admin)/admin/articles/Add/func";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Spinner from "@/components/common/Spinner";
import Empty from "@/components/common/Empty";

function Content({ cat }: { cat: any }) {
  const [news, setNews] = useState<any>("loading");
  const [totalRecords, setTotalRecords] = useState<any>("loading");
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(12);

  useEffect(() => {
    fetchNews();
  }, [first, rows, cat]);

  const fetchNews = async () => {
    const page = first / rows + 1;
    const query = new URLSearchParams({
      page: page?.toString(),
      limit: rows?.toString(),
      search: "",
      category: cat == "All" ? "" : cat, // Updated to match backend filter
    }).toString();

    const data = await getArticle(query);

    if (data.success) {
      setNews(data.data);
      setTotalRecords(data.total);
    }
  };

  const onPageChange = (e: PaginatorPageChangeEvent) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  return (
    <main className="flex flex-col w-full justify-center my-14">
      {news === "loading" ? (
          <Spinner />
        ) : news.length !== 0 ? (
        <><div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto">
        
          
            {news.map((item: any, index: number) => (
              <Link key={index} href={`/${item.url}`}>
                <NewsCard data={item} />
              </Link>
            ))}
            
          
        </div>
        {totalRecords > 12 && (
          <div className="card mt-2 w-[90%] max-w-[1200px] mx-auto">
            <Paginator
              first={first}
              rows={rows}
              totalRecords={totalRecords}
              rowsPerPageOptions={[12, 24, 48]}
              onPageChange={onPageChange}
            />
          </div>
        )}</> ) : (
          <div className="mt-10 w-[90%] max-w-[1200px]">
            <Empty />
          </div> 
        )}
      
    </main>
  );
}

export default Content;
