import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.titleContainer}>
      <p className={styles.homePageTitle}>Welcome to login app</p>
      <Link className={styles.loginAnchor} href="/login"> Log in</Link>
    </div>
  );
}
