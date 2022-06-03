import React from "react";
import BlockTitle from "./BlockTitle";

const PageTitle = ({ title }) => {
	return (

		<div className="py-md-5 py-3 bg-light-blue">
			<div className="py-md-4 py-2">
				<BlockTitle title={title} />
			</div>

		</div>

	)
}

export default PageTitle;
