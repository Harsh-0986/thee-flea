import { CgProfile } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";

const NavBarDesktop = () => {
	return (
		<header className="text-white bg-[#e2a1ff] body-font font-semibold">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-start">
				<nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
					<a className="mr-5 hover:text-gray-500 cursor-pointer">
						First Link
					</a>
					<a className="cursor-pointer mr-5 hover:text-gray-500">
						Second Link
					</a>
					<a className="mr-5 cursor-pointer hover:text-gray-500">
						Third Link
					</a>
					<a className="hover:text-gray-500 cursor-pointer">
						Fourth Link
					</a>
				</nav>

				<a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0" />

				{/* Icons and social profile */}
				<div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
					<div className="inline-flex items-center py-1 px-3">
						<BsInstagram className="cursor-pointer text-xl hover:text-gray-500" />
					</div>

					<button className="inline-flex bg-[#e2a1ff] items-center border-0 py-1 px-3 focus:outline-none hover:text-gray-700 rounded text-base mt-4 md:mt-0">
						<CgProfile className="mx-2 text-xl" /> Log In
					</button>
				</div>
			</div>
		</header>
	);
};

export default NavBarDesktop;
