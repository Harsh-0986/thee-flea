import Image from "next/image";

const Header = () => {
	return (
		<header className="text-[#e2a1ff] bg-[#f9ec96] body-font h-28">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
					<Image
						src="/logo.jpg"
						alt="logo"
						className="text-white p-2 bg-indigo-500 rounded-full"
						width={75}
						height={75}
					/>
					<span className="ml-3 text-[#e2a1ff] text-4xl">
						Thee Flea
					</span>
				</a>
			</div>
		</header>
	);
};

export default Header;
