import { __ } from '@wordpress/i18n';
import AddSectionModal from '../AddSectionModal';
import AddArticleModal from '../AddArticleModal';

const ListingButtons = () => {
	return (
		<div className="doc-listing-buttons space-x-3.5 mt-10">
			<AddSectionModal>
				<button
					type="button"
					className="py-2.5 px-4 h-fit inline-flex items-center rounded-md border border-gray-300 bg-white text-gray-700 hover:text-white hover:bg-indigo-600 px-4 text-sm shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					<span className="dashicons dashicons-plus-alt2 w-3.5 h-3.5 mr-3 text-base flex items-center"></span>
					{ __( 'Add section', 'wedocs-pro' ) }
				</button>
			</AddSectionModal>

			{/*<AddArticleModal>*/}
				<button
					type="button"
					className="py-2.5 px-4 h-fit inline-flex items-center rounded-md border border-gray-300 bg-white text-gray-700 hover:text-white hover:bg-indigo-600 px-4 text-sm shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					<span className="dashicons dashicons-plus-alt2 w-3.5 h-3.5 mr-3 text-base flex items-center"></span>
					{ __( 'Add article', 'wedocs-pro' ) }
				</button>
			{/*</AddArticleModal>*/}
		</div>
	);
};

export default ListingButtons;