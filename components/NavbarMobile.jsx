import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const NavbarMobile = () => {
	const [hamMenu, setHamMenu] = useState(false);

	return (
		<>
			<header className="text-white bg-[#e2a1ff]  h-12 px-2 py-1 flex flex-row justify-between items-center ">
				<BsInstagram className="mx-2 text-xl " />

				{!hamMenu ? (
					<GiHamburgerMenu
						onClick={() => setHamMenu((prev) => setHamMenu(!prev))}
						className="mx-2 text-xl"
					/>
				) : (
					<AiOutlineClose
						onClick={() => setHamMenu((prev) => setHamMenu(!prev))}
						className="mx-2 text-xl"
					/>
				)}
			</header>
			<ul
				className={`w-[100%] flex flex-col justify-center align-center text-white bg-[#e2a1ff] text-md py-2 ${
					hamMenu ? "inline-flex" : "hidden"
				}`}
			>
				<li className="flex text-3xl my-3 justify-center align-center">
					<CgProfile />
				</li>
				<li className="flex text-lg my-2 justify-center align-center">
					list
				</li>
				<li className="flex text-lg my-2 justify-center align-center">
					list
				</li>
				<li className="flex text-lg my-2 justify-center align-center">
					list
				</li>
				<li className="flex text-lg my-2 justify-center align-center">
					list
				</li>
			</ul>
		</>
	);
};

export default NavbarMobile;
