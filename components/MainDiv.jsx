const MainDiv = () => {
	return (
		<>
			<div className="z-[10] flex flex-col justify-center align-center items-center absolute   w-full md:my-24">
				<h2 className="mx-4 my-24 md:my-12 md:text-5xl text-center mb-5 font-semibold text-3xl md:text-4xl text-white">
					Introducing The Thee Flea (Summer Edition)
				</h2>
				<span className="md:text-2xl md:my-5 mx-5 my-2 text-md text-white text-center md:mb-12">
					A one of its kind Experiential Flea A Creative Witty
					Property
				</span>
				<p className="text-center my-6 text-md text-white md:text-lg md:mx-12">
					‘THE WHITE FLEA’ is a creative hub for all enthusiasts
					wandering for different experiences in their day-to-day
					lives. It is a platform for the coolest artists, Mavericks,
					Outliners, Designers, Chefs & Startups boasting
					generation-defining trends! From Shopping, Playing, Dancing,
					Singing to being a foodie, your thirst ends here! It is
					curation to connect souls of the modern world to feel the
					joy along with experiencing breathtaking installations.
					Discover yourself between unique displays by quirky brands
					that stretch their boundaries of connection & typicality.
					Find yourself at this splendid flea to experience soul
					touching vibrations!
				</p>
				<button className="transition ease-in-out duration-150 mt-4 flex justify-center align-center text-white focus:bg-gray-500 px-4 py-2 text-center rounded-2xl border border-white hover:bg-[#f9ec96] hover:text-[#e2a1ff] md:mt-12">
					Plan your visit
				</button>
			</div>
			<img
				src="/main.jpg"
				alt="Main"
				className="w-full relative top-0 left-0 object-cover "
			/>
		</>
	);
};

export default MainDiv;
