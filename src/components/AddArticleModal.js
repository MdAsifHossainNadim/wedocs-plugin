import { __ } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element';
import { Dialog, Transition } from '@headlessui/react';
import { dispatch } from '@wordpress/data';
import docStore from '../data/docs';
import ComboBox from './ComboBox';

const AddArticleModal = ( { sections, className, children } ) => {
	const [ isOpen, setIsOpen ] = useState( false );
	const [ newDoc, setNewDoc ] = useState( {
		title: { raw: '' },
		status: 'publish',
	} );

	const onTitleChange = ( e ) => {
		setNewDoc( { ...newDoc, title: { raw: e.target.value } } );
	};

	const createDoc = () => {
		if ( newDoc.title.raw === '' ) {
			return;
		}

		dispatch( docStore )
			.createDoc( newDoc )
			.then( ( result ) => {
				setNewDoc( { ...newDoc, title: { raw: '' } } );
				closeModal();
			} )
			.catch( ( err ) => {} );
	};

	const closeModal = () => {
		setIsOpen( false );
	};

	const openModal = () => {
		setIsOpen( true );
	};

	return (
		<>
			<button type="button" onClick={ openModal } className={ className }>
				{ children }
			</button>

			<Transition appear show={ isOpen } as={ Fragment }>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={ closeModal }
				>
					<Transition.Child
						as={ Fragment }
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={ Fragment }
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white py-6 px-9 text-center align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-bold text-gray-900 mb-2"
									>
										{ __(
											'Enter your article title',
											'wedocs'
										) }
									</Dialog.Title>
									<p className="text-gray-500 text-base">
										{ __(
											'Help text how to add section',
											'wedocs'
										) }
									</p>
									{ /*<div className="mt-6 mb-5">*/ }
									{ /*	<input*/ }
									{ /*		type="text"*/ }
									{ /*		name="doc_title"*/ }
									{ /*		id="doc-title"*/ }
									{ /*		placeholder={ __(*/ }
									{ /*			'Type a section name',*/ }
									{ /*			'dokan-driver'*/ }
									{ /*		) }*/ }
									{ /*		required*/ }
									{ /*		className="h-11 bg-gray-50 !border-gray-300 text-gray-900 text-base !rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full !py-2 !px-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"*/ }
									{ /*		value={ newDoc.title.raw }*/ }
									{ /*		onChange={ ( e ) => {*/ }
									{ /*			onTitleChange( e );*/ }
									{ /*		} }*/ }
									{ /*	/>*/ }
									{ /*</div>*/ }

									<div className="mt-6 mb-5">
										<ComboBox sections={ sections } />
									</div>

									<div className="mt-6 space-x-3.5">
										<button
											className="bg-indigo-600 hover:bg-indigo-800 text-white font-medium text-base py-2 px-5 rounded-md"
											onClick={ () => {
												createDoc();
											} }
										>
											{ __( 'Create', 'wedocs' ) }
										</button>
										<button
											className="bg-white hover:bg-gray-200 text-gray-700 font-medium text-base py-2 px-5 border border-gray-300 rounded-md"
											onClick={ closeModal }
										>
											{ __( 'Cancel', 'wedocs' ) }
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default AddArticleModal;
