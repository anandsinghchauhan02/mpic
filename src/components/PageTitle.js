import React from "react";
import BlockTitle from "./BlockTitle";

const PageTitle = () => {
    // const { logo, intro, nav, social } = usePageTitleItems();


    return (

        <div className="py-md-5 py-sm-3 bg-light-blue">
            <div className="py-md-4 py-sm-2">
                <BlockTitle title={'About us'} />
            </div>

        </div>

    )
}

export default PageTitle;
