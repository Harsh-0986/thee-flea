import Head from "next/head";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import NavbarMobile from "../components/NavbarMobile";
import NavBarDesktop from "../components/NavBarDesktop";
import MainDiv from "../components/MainDiv";

export default function Home() {
	const [mobileDevice, setMobileDevice] = useState(false);

	useEffect(() => {
		let details = navigator.userAgent;

		// Checking whether the webpage is opened on mobile or pc.
		let regexp = /android|iphone|kindle|ipad/i;
		let isMobileDevice = regexp.test(details);

		setMobileDevice(isMobileDevice);
	}, []);

	return (
		<div>
			<Head>
				<title>Thee Flea</title>
			</Head>

			{/* Header */}
			{mobileDevice && <NavbarMobile />}
			<Header />
			{!mobileDevice && <NavBarDesktop />}

			{/* Main Div */}
			<MainDiv />
		</div>
	);
}
