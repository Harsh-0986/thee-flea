import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="my-6 flex flex-col items-center justify-center align-center">
			<BsInstagram className="text-xl mb-6" />
			<div>
				<span>
					Created by
					<Link href="https://harsh-shah.tk">
						<span className="text-pink-500 hover:text-pink-600 cursor-pointer">
							{" "}
							Harsh Shah
						</span>
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Footer;
