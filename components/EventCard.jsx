const EventCard = ({ image, title, location, date }) => {
	return (
		<div className="flex mx-2 flex-col justify-center items-center align-center my-4 md:my-0 bg-white text-[#e2a1ff] pb-10">
			<img src={image} alt="Image" />
			<span className="text-2xl mt-10">{title}</span>
			<div className="text-lg mt-4">
				<span className="mx-2">{date}</span>|
				<span className="mx-2">{location}</span>
			</div>
			<button className="transition ease-in-out duration-150 mt-12 px-6 py-2 bg-[#e2a1ff] text-[#f9ec96] hover:bg-pink-400">
				Book Now
			</button>
		</div>
	);
};

export default EventCard;
