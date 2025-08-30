import styles from "./page.module.css";
import Link from "next/link";
import { getTenRandomNames } from "@/lib/prisma";

export default async function Home() {
  const names = await getTenRandomNames();

  function setClassNameByGender(gender: string) {
    return gender == "M" ? styles.boy : styles.girl;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ul className={styles["names-list"]}>
          {names.map((name) => (
            <li key={name.name} className={setClassNameByGender(name.gender)}>
              <Link href={`/name?search=${name.name}`}>
                {name.name}, {name.gender}
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
