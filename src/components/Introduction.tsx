import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faPlay, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from 'react-redux';
import { setSignup } from "../redux/slices/config";

export default function Introduction() {
	const dispatch = useDispatch()

	const [isWorked, setIsWorked] = useState(true)
	const [activeKworks, setActiveKworks] = useState(0) //91814
	const [newKworksThisWeek, setNewKworksThisWeek] = useState(0) //2240
	const [newBuyersThisWeek, setNewBuyersThisWeek] = useState(0) //2684

	const [infoModal, setInfoModal] = useState(false)
	const [search, setSearch] = useState("")

	const myRef = useRef<HTMLDivElement>(null)
	const [scrollHeight, setScrollHeight] = useState<number>(0);

	const statusNumbers = () => {
		setIsWorked(true)
		let i = 0;
		let n = 0;
		let m = 0;
		const intervalId = setInterval(() => {
			setActiveKworks(i);
			i += 321;
			if (i > 91814) {
				clearInterval(intervalId)
				setActiveKworks(91814)
			};
		}, 1);

		setTimeout(() => {
			const intervalKwork = setInterval(() => {
				setNewKworksThisWeek(n)
				n += 8
				if (n > 2240) {
					clearInterval(intervalKwork)
					setNewKworksThisWeek(2240)
				}
			}, 1)
		}, 500)

		setTimeout(() => {
			const intervalBuyer = setInterval(() => {
				setNewBuyersThisWeek(m)
				m += 9
				if (m > 2684) {
					clearInterval(intervalBuyer)
					setNewBuyersThisWeek(2684)
				}
			}, 1)
		}, 1000)
	}

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry], observer) => {
				if (entry.isIntersecting) {
					if (myRef.current && observer) {
						observer.unobserve(myRef.current);
					}
					// Run your function here
					statusNumbers()
				}
			},
			{ threshold: 0 } // Trigger when the element is in view
		);

		if (myRef.current) {
			observer.observe(myRef.current);
		}

		return () => {
			if (myRef.current && observer) {
				observer.unobserve(myRef.current);
			}
		};
	}, []);

	return (
		<div>

			{/* Buy affordable freelance serviceson the go */}
			<div className='introduction-bg_img h-96 relative'>
				<div className='absolute w-full h-full backdrop-blur bg-white/10 max-sm:hidden'></div>
				<div className='absolute w-full h-full'>
					<div className='h-full flex items-center justify-between container mx-auto max-sm:justify-center'>
						<div className=''>
							<h3 className='text-4xl font-medium max-md:text-2xl max-sm:text-center text_small'>
								Buy affordable freelance services <br />
								on the go
							</h3>
							<div className="mt-5 relative flex items-center">
								<FontAwesomeIcon className="text-gray-500 left-3 top-3.5 text-lg absolute pointer-events-none max-md:text-base max-md:top-2.5" icon={faMagnifyingGlass} />
								<input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='outline-none py-2 text-lg pl-12 w-96 pr-10 rounded-l border border-gray-400 border-r-0 max-md:w-72 max-md:text-sm' placeholder='Try "social media design"' />
								<FontAwesomeIcon onClick={(() => setSearch(""))} className={"text-gray-500 text-2xl relative right-7 max-md:text-lg " + (search ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none")} icon={faXmark} />
								<button className="bg-[#04B70A] text-white py-2 text-lg relative right-3.5 rounded-r px-5 hover:bg-green-500 border border-gray-400 border-l-0 max-md:text-sm">Qidirish</button>
							</div>
						</div>
						<div className="mr-40 relative max-md:mr-4 max-lg:mr-10 max-sm:hidden">
							<img className="w-64 max-md:w-40 max-lg:w-52" src="https://pngimg.com/uploads/girls/girls_PNG6492.png" alt="" />
							<div className="overflow-hidden absolute bottom-2 text-white font-bold text-xl bg-black/20 w-64 text-center rounded py-1 backdrop-blur-sm max-lg:w-52 max-lg:text-lg max-md:w-36 max-md:text-sm">Lilith, Web Developer</div>
						</div>
					</div>
				</div>
			</div>

			{/* Explore Kwork's Evergrowing Marketplace */}
			<div className="container mx-auto my-14 categories_img">
				<h1 className="text-3xl font-medium mb-6">Explore Kwork's Evergrowing Marketplace</h1>
				<div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
					<div style={{ backgroundImage: "url('https://cdn.kwork.com/files/category/collage/categories_first_level/en/t4/seo_guest.webp?ver=1615534300')" }} className="relative image_box cursor-pointer mr-8 inline-block mb-5"></div>
					<div style={{ backgroundImage: "url('https://cdn.kwork.com/files/category/collage/categories_first_level/en/t4/reklama-pr_guest.webp?ver=1628520228')" }} className="relative image_box cursor-pointer mr-8 inline-block mb-5"></div>
					<div style={{ backgroundImage: "url('https://cdn.kwork.com/files/category/collage/categories_first_level/en/t4/programming_guest.webp?ver=1615534237')" }} className="relative image_box cursor-pointer mr-8 inline-block mb-5"></div>
					<div style={{ backgroundImage: "url('https://cdn.kwork.com/files/category/collage/categories_first_level/en/t4/design_guest.webp?ver=1615534203')" }} className="relative image_box cursor-pointer mr-8 inline-block mb-5"></div>
					<div style={{ backgroundImage: "url('https://cdn.kwork.com/files/category/collage/categories_first_level/en/t4/audio-video_guest.webp?ver=1615534330')" }} className="relative image_box cursor-pointer mr-8 inline-block mb-5"></div>
					<div style={{ backgroundImage: "url('https://cdn.kwork.com/files/category/collage/categories_first_level/en/t4/business_guest.webp?ver=1615534340')" }} className="relative image_box cursor-pointer mr-8 inline-block mb-5"></div>
					<div style={{ backgroundImage: "url('https://cdn.kwork.com/files/category/collage/categories_first_level/en/t4/writing-translations_guest.webp?ver=1615534286')" }} className="relative image_box cursor-pointer mr-8 inline-block mb-5"></div>
				</div>
			</div>

			{/* Status numbers */}
			<div className="container mx-auto grid grid-cols-4 max-lg:grid-cols-2 border py-6 rounded-xl border-gray-300 shadow-lg mb-20">
				<div ref={myRef} className="text-center max-lg:mb-10">
					<div className="text-5xl font-bold mb-2 max-md:text-4xl">KWORK</div>
					<div className="text-sm text-gray-600 flex items-center justify-center">Freelance Marketplace
						<div className="relative">
							<FontAwesomeIcon onMouseEnter={() => setInfoModal(true)} className="text-[#BBBBBB] text-lg ml-1" icon={faCircleQuestion} />

							{/* <div onMouseLeave={() => setInfoModal(false)} className={"absolute info_modal_box pt-6 " + (infoModal ? "show_animation" : "hidden_animation")}>
								<div className="info_modal border rounded-lg bg-white px-4 py-2">
									Kwork is the new platform taking the freelancing world by storm. <br />
									Shop with confidence with our 100% Money Back Guarantee and <br />
									smart freelancer rating system. Get started for free on Kwork now: <br />
									shopping for freelance services has never been easier.
								</div>
							</div> */}

						</div>
					</div>
				</div>
				<div className="text-center border-x border-gray-300 max-lg:mb-10 max-lg:border-r-0">
					<div className="text-blue-600 text-5xl font-medium mb-2 max-md:text-4xl">{activeKworks.toLocaleString()}</div>
					<div className="text-sm text-gray-600">active kworks</div>
				</div>
				<div className="text-center border-r border-gray-300">
					<div className="text-blue-600 text-5xl font-medium mb-2 max-md:text-4xl">{newKworksThisWeek.toLocaleString()}</div>
					<div className="text-sm text-gray-600">new kworks <br /> this week</div>
				</div>
				<div className="text-center">
					<div className="text-blue-600 text-5xl font-medium mb-2 max-md:text-4xl">{newBuyersThisWeek.toLocaleString()}</div>
					<div className="text-sm text-gray-600">new buyers <br /> this week</div>
				</div>
			</div>

			{/* Discover how easy it is to get things done */}
			<div className="bg-[#F4F8FD] mb-20 max-lg:text-center max-lg:text-center">
				<div className="container mx-auto py-10">
					<h3 className="text-3xl font-medium">Discover how easy it is to get things done</h3>
					<p className="mt-1">Perfect for your personal and business goals!</p>
					<div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1 max-lg:grid-cols-1 mt-16">
						<div className="text-center">
							<div className="bg-white rounded-full p-5 border-2 border-blue-300 inline-block relative w-32 h-32">
								<img className="absolute item_center" src="https://cdn.kwork.com/images/index/steps-choose.svg" alt="" />
							</div>
							<div className="text-xl font-medium mb-3">Find a freelancer</div>
							<div>Explore thousands of professional services for every budget.</div>
						</div>
						<div className="text-center max-lg:my-14">
							<div className="bg-white rounded-full p-5 border-2 border-blue-300 inline-block relative w-32 h-32">
								<img className="absolute item_center" src="https://cdn.kwork.com/images/index/steps-pay-en.svg" alt="" />
							</div>
							<div className="text-xl font-medium mb-3">Shop with confidence</div>
							<div>Always know prices and deadlines upfront. Your payment isn't released until you approve the work.</div>
						</div>
						<div className="text-center">
							<div className="bg-white rounded-full p-5 border-2 border-blue-300 inline-block relative w-32 h-32">
								<img className="absolute item_center" src="https://cdn.kwork.com/images/index/steps-result.svg" alt="" />
							</div>
							<div className="text-xl font-medium mb-3">Get quality results</div>
							<div>Our 100% Money Back Guarantee ensures top-quality work delivered on time or your money back.</div>
						</div>
					</div>
				</div>
			</div>

			{/* Intelligent business solutions for entrepreneurs */}
			<div className="container mx-auto mb-20 flex justify-between max-md:flex-col">
				<div className="w-2/4 max-md:w-full">
					<h1 className="font-medium text-2xl">Intelligent business solutions for entrepreneurs</h1>

					<div className="flex items-start my-8">
						<img className="mx-6 mt-0.5" src="https://cdn.kwork.com/images/icons/checked.svg" alt="" />
						<div>
							<div className="font-medium text-lg">Scaling Made Easy</div>
							<div>Find professional talent to boost your conversion, sales, and traffic. <br />and traffic.</div>
						</div>
					</div>

					<div className="flex items-start mb-8">
						<img className="mx-6 mt-0.5" src="https://cdn.kwork.com/images/icons/checked.svg" alt="" />
						<div>
							<div className="font-medium text-lg">Outsource & Save (up to 87%!)</div>
							<div>Dramatically reduce your expenses with fixed-price <br /> freelance services for every budget.</div>
						</div>
					</div>

					<div className="flex items-start">
						<img className="mx-6 mt-0.5" src="https://cdn.kwork.com/images/icons/checked.svg" alt="" />
						<div>
							<div className="font-medium text-lg">Focus on Priorities</div>
							<div>Spend up to 75% less time on business tasks and focus on <br /> what really matters for growth.</div>
						</div>
					</div>
				</div>

				<iframe className="w-2/4 max-md:w-full max-md:h-96 max-md:mt-10" src="https://www.youtube.com/embed/l1bCVNCH0jc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
			</div>

			{/* Start saving with freelance services today */}
			<div className="text-center mb-20 kw_wrapper py-16">
				<h1 className="text-3xl font-medium mb-2">Start saving with freelance services today</h1>
				<h3 className="text-xl text-neutral-800 font-medium">Speed, quality, and affordability: you can have it all!</h3>
				<button onClick={() => dispatch(setSignup(true))} className="bg-[#04B70A] hover:bg-green-500 text-white px-32 mt-14 py-2 rounded">Sign up for Free</button>
			</div>

			{/* KWORK Freelance Marketplace */}
			<div className="container mx-auto mb-20">
				<h1 className="text-3xl font-medium"><span className="font-bold mr-1">KWORK</span> Freelance Marketplace</h1>
				<h3 className="mb-10">Getting things done has never been easier.</h3>
				<div className="grid grid-cols-2 gap-5 text-sm max-lg:grid-cols-1">
					<div className="lg:mb-4">
						<p><b>Want to save time and money without compromising on quality?</b> That's what we’re here for.</p><br />

						<p>We built Kwork to help independent and results-oriented entrepreneurs like you find talented freelancers for all your business needs.</p><br />

						<p>On Kwork, thousands of talented freelancers compete for your business by listing their services in the Marketplace. These services are sold like convenient grab-and-go items in a real store. On our platform, there are no confusing and costly hourly rates.</p><br />

						<p>There's also no more haggling over price and deadlines. Prices, deadlines, and services included are specified in advance, saving you time, money, and energy.</p><br />

						<p>You can shop freelance services with confidence on Kwork. If anything ever goes wrong, you're protected by our <b>100% Money Back Guarantee</b>, one-of-a-kind <b>Buyer Protection Program</b>, and incredible Support Team.</p><br />

						Why wait? Get things done today!
					</div>
					<div>
						<p><b>Have a unique job, or too busy to browse for freelancers?</b> Post a buyer request in our tailor-made Exchange section!</p><br />

						<p>Just provide a description, delivery time, and budget. Kwork's seasoned freelancers will send in bespoke offers customized to your task. Best suited for complex or large projects.</p><br />

						<p>The quality of offers on Kwork is unique. Thanks to a proprietary feature on our platform, you don't need to sift through a sea of generic offers you might receive on other freelance platforms. Since Kwork professionals are rewarded for putting special thought and effort into every offer, you get to choose from the crème de la crème.</p><br />

						<p>Have a project you need to check off? Post your request today!</p>
					</div>
				</div>
			</div>

		</div>
	)
}
