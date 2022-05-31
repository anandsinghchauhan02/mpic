import * as React from "react"

// import { graphql, useStaticQuery } from 'gatsby';
// import { Row, Col, Button, Container } from 'reactstrap';
import { Layout, ImagePanel } from '../components';


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
    <Layout>
      <div className="right-gola"></div>
      <ImagePanel image="/images/home_1.png" imageLeft={false} >
        <div className="py-5 mt-5">
          <h2>
            Our Mission is to provide best in class education.
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>


      </ImagePanel>

      <ImagePanel image="/images/home_3.jpg" imageLeft={true} imageStyle={{ width: '50%' }}>
        <div className="py-5 mt-5">
          <h2>
            Best in class faculties.
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

      </ImagePanel>
    </Layout>
  )
}

export default IndexPage
