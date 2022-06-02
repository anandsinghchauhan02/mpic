import React, { useEffect } from "react"

// import { graphql, useStaticQuery } from 'gatsby';
import { CardColumns, Card, Col, Row } from 'reactstrap';
import ImagePanel from '../components/ImagePanel';
import Layout from '../components/Layout';
import { BlockTitle, CardColumn, Pros } from "../components";
import useHomeItems from '../hooks/home';
import { withPrefix } from "gatsby";

const teachers = [
  {
    name: 'Nice Name',
    subject: 'English teacher',
    avatar: '/images/t1.jpg'
  },
  {
    name: 'Nice Name',
    subject: 'Math teacher',
    avatar: '/images/t2.jpg'
  },
  {
    name: 'Nice Name',
    subject: 'Science teacher',
    avatar: '/images/t3.jpg'
  },
  {
    name: 'Nice Name',
    subject: 'SST teacher',
    avatar: '/images/t4.jpg'
  },
  {
    name: 'Nice Name',
    subject: 'Hindi teacher',
    avatar: '/images/t5.jpg'
  },
]

// function useHeaderItems() {
// const data = useStaticQuery(graphql`
//   query PAGE_QUERY {
//     navYaml {
//       label
//       link
//     }
//     aboutYaml {
//       intro
//     }
//   }
// `);

// const items = edges.map(({ node }) => node);
// return data
// }
// styles

// markup
const IndexPage = () => {

  const { pros } = useHomeItems();
  // console.log(data)





  return (
    <>

      {/* <div className="right-gola-container">
        <div className="right-gola"></div>
      </div> */}

      <Layout hasSlider={true}>

        <div className="py-md-5 py-sm-3">
          <div className="py-md-4 py-sm-2">
            <BlockTitle title={'Welcome To My Nice school'} subTitle={'The school aspires to keep up a situation in which understudies may outperform expectancies.'} />

            <Row className="justify-content-center" >
              <Col className="py-md-4 py-2" md="9" sm="12" >
                <Pros list={pros} />

              </Col>
            </Row>
            <CardColumn />

          </div>

        </div>

        <ImagePanel image="/images/principal.jpg" imageLeft={true} imageStyle={{ width: '50%', borderRadius: '20px' }}>
          <div className="py-5 mt-5">
            <h2>
              Message from Principal.
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

        </ImagePanel>

        <div className="py-md-5 py-sm-3">
          <div className="py-md-4 py-sm-2">


            <BlockTitle title="The Awesome Gurus" subTitle="The school aspires to keep up a situation in which understudies may outperform expectancies in academic exercises." />

            <div className="p-3">

            </div>
            <Row>

              {
                teachers.map(({ name, subject, avatar }, index) => {
                  return (
                    <Col>

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
