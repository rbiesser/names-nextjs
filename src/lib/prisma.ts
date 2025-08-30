import { name, PrismaClient } from "@prisma";

const prisma = new PrismaClient();

export async function getTenRandomNames() {
  const names: name[] = await prisma.$queryRaw`
  SELECT * FROM "name"
  ORDER BY RANDOM()
  LIMIT 10;
`;
  return names;
}

export async function getCountByYOB(name: string) {
  const name_by_state = await prisma.all_names_by_state.groupBy({
    by: ["yob", "gender"],
    where: {
      name: name,
    },
    _sum: {
      count: true,
    },
    orderBy: {
      yob: "asc",
    },
  });
  return name_by_state;
}
