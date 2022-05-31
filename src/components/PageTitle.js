import React from "react";
import {
    Row, Col, Container,

} from "reactstrap";
import { Icon } from '../components';
import { Link } from 'gatsby';


const PageTitle = () => {
    // const { logo, intro, nav, social } = usePageTitleItems();


    return (

        <div className="bg-light py-md-5 py-sm-3" style={{ background: 'aliceblue' }}>
            <div className="py-md-4 py-sm-2 text-center">
                <h2 className="display-3">About us</h2>
            </div>

        </div>

    )
}

export default PageTitle;
