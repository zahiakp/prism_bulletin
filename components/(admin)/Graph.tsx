"use client";
import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

function Report({ inv}: { inv: any;}) {
  const [period, setPeriod] = useState("this_week");
  const [salesMetrics, setSalesMetrics] = useState<any>({
    views: 0,
    shares: 0,
    posts: 0,
  });
  const [chartData, setChartData] = useState<any>({
    labels: "",
    datasets: [
      {
        label: "View",
        backgroundColor: "rgba(255, 172, 100, 0.2)",
        borderColor: "rgba(255, 172, 100, 1)",
        pointBackgroundColor: "rgba(255, 172, 100, 1)",
        data: [],
        tension: 0.4,
        fill: true,
      },
      // {
      //   label: "Middle",
      //   backgroundColor: "rgba(255, 172, 100, 0.5)",
      //   borderColor: "rgba(255, 172, 100, 1)",
      //   pointBackgroundColor: "rgba(255, 172, 100, 1)",
      //   data: [],
      //   tension: 0.4,
      //   fill: true,
      // },
      {
        label: "Share",
        backgroundColor: "rgba(88, 188, 116, 0.2)",
        borderColor: "rgba(88, 188, 116, 1)",
        pointBackgroundColor: "rgba(88, 188, 116, 1)",
        data: [],
        tension: 0.4,
        fill: true,
      },
    ],
  });
  useEffect(() => {
    const filteredData = filterDataByPeriod(inv, period);
    const metrics = calculateSalesMetrics(
      filteredData.invFl
    );
    setSalesMetrics(metrics);

    let newLabels: string[] = [];

    switch (period) {
      case "this_week":
        newLabels = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
        break;
      case "this_month":
        for (let i = 1; i <= 30; i += 3) {
          newLabels.push(`${i}-${i + 2}`);
        }
        break;
      case "last_3_months":
        const now = new Date();
        const threeMonthsAgo = new Date(
          now.getFullYear(),
          now.getMonth() - 2,
          now.getDate()
        );
        const weeks = Math.ceil(
          (now.getTime() - threeMonthsAgo.getTime()) / (7 * 24 * 60 * 60 * 1000)
        );
        for (let i = 1; i <= weeks; i++) {
          newLabels.push(`Week ${i}`);
        }
        break;
      case "last_6_months":
        const today = new Date();
        for (let i = 5; i >= 0; i--) {
          const month = new Date(today.getFullYear(), today.getMonth() - i, 1);
          newLabels.push(month.toLocaleDateString("en-US", { month: "short" }));
        }
        break;
      case "last_9_months":
        const nineMonthsAgo = new Date();
        nineMonthsAgo.setMonth(nineMonthsAgo.getMonth() - 8);
        for (let i = 8; i >= 0; i--) {
          const month = new Date(
            nineMonthsAgo.getFullYear(),
            nineMonthsAgo.getMonth() + i,
            1
          );
          newLabels.push(month.toLocaleDateString("en-US", { month: "short" }));
        }
        break;
      case "this_year":
        const currentYear = new Date().getFullYear();
        for (let i = 0; i < 12; i++) {
          const month = new Date(currentYear, i, 1);
          newLabels.push(month.toLocaleDateString("en-US", { month: "short" }));
        }
        break;
      default:
        throw new Error("Invalid period specified");
    }

    setChartData((prevData: any) => ({
      ...prevData,
      labels: newLabels,
    }));

    processChartData(filteredData);
  }, [period, inv]);

  const calculateSalesMetrics = (invoices: any) => {
    const InvRe = invoices.reduce(
      (acc: any, invoice: any) => {
        acc.views += parseFloat("20");
        acc.shares += parseFloat("30");
        acc.posts += 1;
        return acc;
      },
      { views: 0, shares: 0, posts: 0 }
    );

    return {
      views: InvRe.views,
      shares: InvRe.shares,
      posts: InvRe.posts,
    };
  };

  const isWithinPeriod = (date: any, startDate: any, endDate: any) => {
    return date >= startDate && date <= endDate;
  };

  const getStartOfLastWeek = (date: Date) => {
    const lastWeekDate = new Date(date);
    lastWeekDate.setDate(lastWeekDate.getDate() - 7);
    return lastWeekDate;
  };

  const getStartOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  const getStartOfYear = (date: Date) => {
    return new Date(date.getFullYear(), 0, 1);
  };

  const filterDataByPeriod = (invs: any[], period: string) => {
    const now = new Date();
    let startDate;

    switch (period) {
      case "this_week":
        startDate = getStartOfLastWeek(now);
        break;
      case "this_month":
        startDate = getStartOfMonth(now);
        break;
      case "last_3_months":
        startDate = new Date(now.getFullYear(), now.getMonth() - 2, 1);
        break;
      case "last_6_months":
        startDate = new Date(now.getFullYear(), now.getMonth() - 5, 1);
        break;
      case "last_9_months":
        startDate = new Date(now.getFullYear(), now.getMonth() - 8, 1);
        break;
      case "this_year":
        startDate = getStartOfYear(now);
        break;
      default:
        throw new Error("Invalid period specified");
    }

    const invFl = invs.filter((invoice: any) => {
      const invoiceDate = new Date(invoice.date);
      return isWithinPeriod(invoiceDate, startDate, now);
    });

    return { invFl};
  };

  const processChartData = (filteredData: any) => {
    const salesData: any = {
      Monday: { views: 0, shares: 0 },
      Tuesday: { views: 0, shares: 0 },
      Wednesday: { views: 0, shares: 0 },
      Thursday: { views: 0, shares: 0 },
      Friday: { views: 0, shares: 0 },
      Saturday: { views: 0, shares: 0 },
      Sunday: { views: 0, shares: 0 },
    };

    filteredData.invFl.forEach((invoice: any) => {
      const day = new Date(invoice.date).toLocaleString("en-us", {
        weekday: "long",
      });
      salesData[day].views += parseFloat("30");
      salesData[day].shares += parseFloat("20");
    });

    const newData: any = {
      views: [],
      shares: [],
    };

    Object.keys(salesData).forEach((day: string) => {
      newData.views.push(salesData[day].views);
      newData.shares.push(salesData[day].shares);
    });

    setChartData((prevData: any) => ({
      ...prevData,
      datasets: prevData.datasets.map((dataset: any, index: number) => ({
        ...dataset,
        data:
          index === 0
            ? newData.views
            : index === 1 && newData.shares,
      })),
    }));
  };

  useEffect(() => {
    const filteredData = filterDataByPeriod(inv, period);
    const metrics = calculateSalesMetrics(
      filteredData.invFl,
    );
    setSalesMetrics(metrics);
    processChartData(filteredData);
  }, [period, inv]);

  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const canvas = document.getElementById("myChart") as HTMLCanvasElement;
    const ctx: any = canvas.getContext("2d");
    const reversedData = {
      ...chartData,
      datasets: [...chartData.datasets].reverse(),
    };

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: reversedData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [chartData]);

  return (
    <div className="report flex flex-col items-center justify-center w-full mt-10">
      <div className="flex justify-between w-full"><h6 className="text-3xl font-semibold">Report</h6><div className="p-2 pl-4 w-60 bg-white rounded-xl flex items-center shadow-lg gap-3">
        <p className="text-zinc-400">Period</p>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="select select-bordered select-sm w-full max-w-xs"
        >
          <option value="this_week">This Week</option>
          <option value="this_month">This Month</option>
          <option value="last_3_months">Last 3 Months</option>
          <option value="last_6_months">Last 6 Months</option>
          <option value="last_9_months">Last 9 Months</option>
          <option value="this_year">This Year</option>
        </select>
      </div></div>
      <div className="flex gap-4 py-10 w-full flex-wrap">
        <div className="flex flex-col justify-center rounded-2xl overflow-hidden">
          <div className="bg-zinc-200 py-2 px-5">Post Count</div>
          <div className="bg-white text-[50px] px-10">
            {salesMetrics.posts || 0}
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-2xl overflow-hidden">
          <div className="bg-zinc-200 py-2 px-5">Total Views</div>
          <div className="bg-white text-[50px] px-10">
            ₹{salesMetrics.views}
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-2xl overflow-hidden">
          <div className="bg-zinc-200 py-2 px-5">Total Shares</div>
          <div className="bg-white text-[50px] px-10">
            ₹{salesMetrics.shares}
          </div>
        </div>
      </div>
      <div className="p-12 w-full rounded-xl bg-white">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}

export default Report;
