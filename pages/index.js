import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Thee Flea</title>
			</Head>

			{/* Header */}
			<Header />
		</div>
	);
}
