import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { notFound } from "next/navigation";

import styles from "./page.module.css";
import { getCountByYOB } from "@/lib/prisma";
import { theme } from "@/theme/charts";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: Props) {
  // URL -> '/name?search=name'
  const name = (await searchParams).search;

  // TODO: string[] is not implemented!
  if (!name || typeof name != "string") {
    notFound();
  }

  const nameByYOB = await getCountByYOB(name);

  if (!nameByYOB || nameByYOB.length === 0) {
    notFound();
  }

  const countOfMaleNames = nameByYOB.filter((name) => name.gender === "M");
  const countOfFemaleNames = nameByYOB.filter((name) => name.gender === "F");

  // console.log(nameByYOB);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{name}</h1>
      <ScatterChart
        width={800}
        height={300}
        sx={theme}
        series={[
          {
            label: `${name}, M`,
            data: countOfMaleNames.map((v) => ({
              x: v.yob,
              y: v._sum.count || 0,
              // id: v.yob,
            })),
          },
          {
            label: `${name}, F`,
            data: countOfFemaleNames.map((v) => ({
              x: v.yob,
              y: v._sum.count || 0,
              // id: v.yob,
            })),
          },
        ]}
        yAxis={[
          {
            colorMap: {
              type: "piecewise",
              // TODO: threshold as a function of the total results
              thresholds: [10, 100, 1000],
              colors: ["lightblue", "blue", "orange", "red"],
            },
          },
        ]}
      />
    </div>
  );
}
