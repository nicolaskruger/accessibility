import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type MyRoute = {
  name: string;
  route: string;
};

const myRoutes: MyRoute[] = [
  {
    name: "img",
    route: "/img",
  },
];

export default function Home() {
  const renderRoute = (myRoute: MyRoute[]) =>
    myRoute.map(({ name, route }) => (
      <li key={name}>
        <Link href={route}>{name}</Link>
      </li>
    ));

  return (
    <main className={styles.main}>
      <ul>{renderRoute(myRoutes)}</ul>
    </main>
  );
}
