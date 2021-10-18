import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hero Image</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content="hero"></meta>
      </Head>

      <main className={styles.main}>
        <h2>Without CDN</h2>
        <Image
          src="/static/hero-image.webp"
          width={"700px"}
          height={"400px"}
          alt="hero image"
        />
        <h2>With CDN</h2>
        <Image
          src="https://res.cloudinary.com/dkfnd7xy7/image/upload/v1634522109/hero-image_ktzi43.webp"
          width={"700px"}
          height={"400px"}
          alt="hero image"
        />
      </main>
    </div>
  );
}
