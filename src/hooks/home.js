import { graphql, useStaticQuery } from 'gatsby';


const useHomeItems = () => {
  const { allHomeYaml: { edges } } = useStaticQuery(graphql`
    query HOME_QUERY {
      allHomeYaml {
        edges {
          node {
            pros {
              description
              image
              title
            }
          }
        }
      }
    }
  `);
  const items = edges[0]?.node;

  return items
}

export default useHomeItems;
