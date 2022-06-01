import React from "react";
import BlockTitle from "./BlockTitle";

const PageTitle = ({title}) => {
    return (

        <div className="py-md-5 py-sm-3 bg-light-blue">
            <div className="py-md-4 py-sm-2">
                <BlockTitle title={title} />
            </div>

        </div>

    )
}

export default PageTitle;
