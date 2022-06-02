import React, { useEffect } from "react"

// import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row } from 'reactstrap';
import ImagePanel from '../components/ImagePanel';
import Layout from '../components/Layout';
import { BlockTitle, CardColumn, Pros } from "../components";
import useHomeItems from '../hooks/home';
import { withPrefix } from "gatsby";

const IndexPage = () => {

  const { pros = [], teachers = [], principal = {}, slides = [] } = useHomeItems();

  return (
    <>

      {/* <div className="right-gola-container">
        <div className="right-gola"></div>
      </div> */}

      <Layout hasSlider={true} slides={slides}>

        <div className="py-md-5 py-sm-3">
          <div className="py-md-4 py-sm-2">
            <BlockTitle title={pros.title} subTitle={pros.subTitle} />

            <Row className="justify-content-center" >
              <Col className="py-md-4 py-2" md="9" sm="12" >
                <Pros list={pros.list} />

              </Col>
            </Row>
            <CardColumn />

          </div>

        </div>

        <ImagePanel image={principal.avatar} imageLeft={true} imageStyle={{ width: '50%', borderRadius: '20px' }}>
          <div className="py-5 mt-5">
            <h2>
              {principal.title}
            </h2>


            <p>
              {principal.text}
              <span>
                - {principal.name}
              </span>
            </p>

          </div>

        </ImagePanel>

        <div className="py-md-5 py-sm-3">
          <div className="py-md-4 py-sm-2">


            <BlockTitle title={teachers.title} subTitle={teachers.subTitle} />

            <div className="p-3">

            </div>
            <Row>

              {
                teachers.list.map(({ name, subject, avatar }, index) => {
                  return (
                    <Col key={index}>
                      <div className="teacher-image">
                        <img src={withPrefix(avatar)} title="" />
                        <div className="p-3">
                          <h5>{name}</h5>
                          <div className="link-primary">
                            {subject}
                          </div>
                        </div>
                      </div>
                    </Col>

                  )
                })
              }


            </Row>

          </div>

        </div>




      </Layout>
    </>
  )
}

export default IndexPage
