import { __ } from '@wordpress/i18n';

const TestMenu = () => {
	return (
		<aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
			<nav className="py-[18px] bg-white rounded-md space-y-0.5">
				<a
					href="general"
					className="text-gray-600 hover:text-gray-600 hover:bg-gray-100 group rounded-md mx-2 px-5 py-3 flex items-center text-sm font-medium"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="21"
						fill="currentColor"
						className="text-gray-400 flex-shrink-0 -ml-1 mr-4 h-6 w-6"
					>
						<path
							d="M1 10.512l2-2m0 0l7-7 7 7m-14 0v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"
							stroke="#9ca3af"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span className="truncate">
						{ __( 'General', 'wedocs-pro' ) }
					</span>
				</a>
				<a
					href="permission"
					className="bg-gray-100 text-gray-900 hover:bg-white group rounded-md mx-2 px-5 py-3 flex items-center text-sm font-medium"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="21"
						fill="none"
						className="text-gray-400 flex-shrink-0 -ml-1 mr-4 h-6 w-6"
					>
						<path
							d="M10 2.866a3.99 3.99 0 0 1 3-1.354 4 4 0 1 1 0 8 3.99 3.99 0 0 1-3-1.354m3 11.354H1v-1a6 6 0 1 1 12 0v1zm0 0h6v-1a6 6 0 0 0-6-6 5.97 5.97 0 0 0-3 .803m1-7.803a4 4 0 1 1-8 0 4 4 0 1 1 8 0z"
							stroke="#9ca3af"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span className="truncate">
						{ __( 'Permission Management', 'wedocs-pro' ) }
					</span>
				</a>
				<a
					href="widget"
					className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 group rounded-md mx-2 px-5 py-3 flex items-center text-sm font-medium"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 18"
						fill="none"
						aria-hidden="true"
						className="text-gray-400 flex-shrink-0 -ml-1 mr-4 h-6 w-6"
					>
						<path
							d="M1 3.512v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-6l-2-2H3a2 2 0 0 0-2 2z"
							stroke="#9ca3af"
							strokeWidth="2"
							strokeLinejoin="round"
						/>
					</svg>
					<span className="truncate">
						{ __( 'Assistant Widget', 'wedocs-pro' ) }
					</span>
				</a>
				<a
					href="license"
					className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 group rounded-md mx-2 px-5 py-3 flex items-center text-sm font-medium"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="21"
						fill="none"
						aria-hidden="true"
						className="text-gray-400 flex-shrink-0 -ml-1 mr-4 h-6 w-6"
					>
						<path
							d="M13 5.512a2 2 0 0 1 2 2m4 0a6 6 0 0 1-7.743 5.743L9 15.512H7v2H5v2H2a1 1 0 0 1-1-1v-2.586a1 1 0 0 1 .293-.707l5.964-5.964A6 6 0 0 1 13 1.512a6 6 0 0 1 6 6z"
							stroke="#9ca3af"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					<span className="truncate">
						{ ( 'License', 'wedocs-pro' ) }
					</span>
				</a>
			</nav>
		</aside>
	);
};

export default TestMenu;