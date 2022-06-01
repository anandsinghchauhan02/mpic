import * as React from "react"

// import { graphql, useStaticQuery } from 'gatsby';
// import { Row, Col, Button, Container } from 'reactstrap';
import ImagePanel from '../components/ImagePanel';
import Layout from '../components/Layout';


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

  // const data = useHeaderItems();

  // console.log(data)


  return (
    <>

      {/* <div className="right-gola-container">
        <div className="right-gola"></div>
      </div> */}

      <Layout>

        <ImagePanel image="/images/home_1.png" imageLeft={false} >
          <div className="py-5 mt-5">
            <h2>
              WELCOME TO MY NICE SCHOOL.
            </h2>
            <p>
              The school aspires to keep up a situation in which understudies may outperform expectancies in academic exercises, demonstrate dominant learning, and develop scholarly limitations and capacities that will prepare them for public administration. We provide understudies with comprehensive and in-depth learning experiences in order for them to value the wonders of the world and never stop seeking more, while also acknowledging, tolerating, and consuming more up to date and better as their lives progress.
            </p>
          </div>


        </ImagePanel>

        <ImagePanel image="/images/principal.jpg" imageLeft={true} imageStyle={{ width: '50%' }}>
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
      </Layout>
    </>
  )
}

export default IndexPage
