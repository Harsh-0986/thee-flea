import EventCard from "./EventCard";

const UpComingEvents = () => {
	return (
		<div className="flex flex-col justify-center align-center items-center mb-2 bg-[#e2a1ff] pb-4">
			<h2 className="text-2xl text-[#f9ec96] bg-[#e2a1ff] py-4 w-full text-center">
				Upcoming Events
			</h2>
			<div className="flex flex-col md:flex-row ">
				<EventCard
					image="https://static.wixstatic.com/media/8cb27a_8bfc493a78864455b5febbe2cdf17867~mv2.jpg/v1/fill/w_768,h_768,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/8cb27a_8bfc493a78864455b5febbe2cdf17867~mv2.jpg"
					title="Anuv Jain Live in Surat"
					date="Sat, 23 Apr"
					location="Shott Surat"
				/>
				<EventCard
					image="https://static.wixstatic.com/media/8cb27a_8bfc493a78864455b5febbe2cdf17867~mv2.jpg/v1/fill/w_768,h_768,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/8cb27a_8bfc493a78864455b5febbe2cdf17867~mv2.jpg"
					title="Anuv Jain Live in Surat"
					date="Sat, 23 Apr"
					location="Shott Surat"
				/>
			</div>
		</div>
	);
};

export default UpComingEvents;
