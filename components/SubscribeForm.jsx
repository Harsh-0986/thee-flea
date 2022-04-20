const SubscribeForm = () => {
	return (
		<div className="w-[60%] md:w-[60%] mx-auto flex flex-col align-center justify-center items-center">
			<span className="my-6 text-2xl font-bold text-pink-400">
				Subscribe Form
			</span>
			<div className="relative z-0 mb-6 w-full group">
				<input
					type="email"
					name="floating_email"
					className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
					placeholder=" "
					required
				/>
				<label
					htmlFor="floating_email"
					className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
				>
					Email address
				</label>
			</div>
			<button className="transition duration-150 ease-in-out flex flex-col justify-center align-center bg-blue-500 px-10 py-2 mb-6 text-white rounded-lg hover:bg-blue-400">
				Submit
			</button>
		</div>
	);
};

export default SubscribeForm;
