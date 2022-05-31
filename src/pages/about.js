import * as React from "react"

// import { graphql, useStaticQuery } from 'gatsby';
// import { Row, Col, Button, Container } from 'reactstrap';
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
const AboutPage = () => {

  // const data = useHeaderItems();

  // console.log(data)


  return (
    <Layout pageTitle="About Us">
      <h1></h1>
    </Layout>
  )
}

export default AboutPage
