import React from "react";

function Checkout() {
	return (
		<>
			<Stepper />
			<section className="max-w-5xl mx-auto pb-40 pt-12">
				<h1 className="mb-8 font-semibold text-3xl">
					Payment Method & Order Summary
				</h1>
				<div className="grid grid-cols-2">
					<div className="flex-col justify-between ">
						<div>
							<div className="space-y-4 ">
								<div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
									<input
										defaultChecked
										id="bordered-radio-1"
										type="radio"
										value=""
										name="bordered-radio"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										htmlFor="bordered-radio-1"
										className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										<img
											src="/payment/qris.svg"
											alt="logo"
											className="max-w-[100px]"
										/>
									</label>
								</div>
								<div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
									<input
										id="bordered-radio-2"
										type="radio"
										value=""
										name="bordered-radio"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										htmlFor="bordered-radio-2"
										className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										<img
											src="/payment/bca-va.svg"
											alt="logo"
											className="max-w-[170px]"
										/>
									</label>
								</div>
							</div>
						</div>
						<div className="mt-56">
							<h3 className="text-lg font-medium">Total</h3>
							<p className="text-3xl font-bold">Rp.233.100</p>
							<span className="text-blue-600">*with tax</span>
						</div>
					</div>
					<div className="ml-12 bg-slate-800 dark:bg-slate-50 rounded-md">
						<div className="p-8 rounded-md shadow-md">
							<div className="mb-4">
								<label
									htmlFor="data-center"
									className="font-medium block mb-2 text-sm text-[#EDC997] dark:text-white"
								>
									Package Plan
								</label>
								<select
									id="data-center"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
									defaultValue="Business"
									disabled
								>
									<option>Choose plan</option>
									<option value="Business">Business Plan</option>
								</select>
							</div>
							<div className="mb-4">
								<label
									htmlFor="data-center"
									className="font-medium block mb-2 text-sm text-[#EDC997] dark:text-white"
								>
									Data Center
								</label>
								<select
									id="data-center"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-1"
									defaultValue="POGE"
									disabled
								>
									<option>Choose a country</option>
									<option value="POGE">Data Center Pondok Gede</option>
								</select>
							</div>
							<div className="mb-4">
								<label
									htmlFor="base-input"
									className="block mb-2 text-sm font-medium text-[#EDC997] dark:text-white"
								>
									Sub Domain URL
								</label>
								<div className="w-full flex items-center">
									<input
										type="text"
										id="base-input"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-tr-none rounded-br-none"
										value="cumi-cumi"
										disabled
										readOnly
									/>
									<span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 rounded-tl-none rounded-bl-none border-l-0 w-fit">
										.zenradius.id
									</span>
								</div>
							</div>
							<div className="mb-4">
								<label
									htmlFor="base-input"
									className="block mb-2 text-sm font-medium text-[#EDC997] dark:text-white"
								>
									Email
								</label>
								<div className="w-full flex items-center">
									<input
										type="email"
										id="base-input"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-tr-none rounded-br-none"
										value="agus@jayabadi.com"
										disabled
										readOnly
									/>
								</div>
							</div>

							<button className="mt-4 w-full bg-blue-600 rounded focus:outline-nonehover:bg-blue-700 py-4 text-white">
								Submit Order
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Checkout;

function Stepper() {
	return (
		<div className="max-w-5xl mx-auto pt-8">
			<ol className="flex w-full justify-center">
				<li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
					<span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
						<svg
							className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 16 12"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5.917 5.724 10.5 15 1.5"
							/>
						</svg>
					</span>
				</li>
				<li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
					<span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
						<svg
							className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 16 12"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5.917 5.724 10.5 15 1.5"
							/>
						</svg>
					</span>
				</li>
				<li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
					<span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
						<svg
							className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 16 12"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5.917 5.724 10.5 15 1.5"
							/>
						</svg>
					</span>
				</li>
				<li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
					<span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
						<svg
							className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 16 12"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 5.917 5.724 10.5 15 1.5"
							/>
						</svg>
					</span>
				</li>

				<li className="flex items-center w-full">
					<span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
						<svg
							className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 18 20"
						>
							<path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
						</svg>
					</span>
				</li>
			</ol>
		</div>
	);
}
