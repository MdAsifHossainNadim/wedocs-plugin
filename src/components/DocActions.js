import { Menu, Transition } from '@headlessui/react';
import { Fragment } from '@wordpress/element';

const DocActions = () => {
	const documentationActions = [
		{ name: 'Add article', href: '#', icon: 'add' },
		{ name: 'Edit', href: '#' },
		{ name: 'Copy shortcode', href: '#', icon: 'copy' },
		{ name: 'Delete', href: '#' },
	];

	const classNames = ( ...classes ) => {
		return classes.filter( Boolean ).join( ' ' );
	};

	return (
		<Menu as="div" className="relative">
			<div>
				<Menu.Button className="flex rounded-full bg-white">
					<span className="dashicons dashicons-ellipsis text-sm rotate-90 text-gray-500"></span>
				</Menu.Button>
			</div>
			<Transition
				as={ Fragment }
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					{ documentationActions &&
						documentationActions.map( ( action ) => (
							<Menu.Item key={ action.name }>
								{ ( { active } ) => (
									<a
										href={ action.href }
										className={ classNames(
											active ? 'bg-gray-100' : '',
											'group flex items-center py-2 px-4 text-sm font-medium text-gray-700 hover:bg-indigo-700 hover:text-white'
										) }
									>
										{ action.icon &&
											action.icon === 'add' && (
												<span className="dashicons dashicons-plus text-xs mt-1.5"></span>
											) }
										{ action.name }
										{ action.icon &&
											action.icon === 'copy' && (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="none"
													className="ml-4 group-hover:stroke-white stroke-gray-500"
												>
													<path
														d="M4.666 11.229H3c-.92 0-1.667-.746-1.667-1.667V2.895c0-.92.746-1.667 1.667-1.667h6.667c.92 0 1.667.746 1.667 1.667v1.667m-5 10H13c.92 0 1.667-.746 1.667-1.667V6.229c0-.92-.746-1.667-1.667-1.667H6.333c-.92 0-1.667.746-1.667 1.667v6.667c0 .92.746 1.667 1.667 1.667z"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											) }
									</a>
								) }
							</Menu.Item>
						) ) }
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default DocActions;
