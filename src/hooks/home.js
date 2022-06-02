import { graphql, useStaticQuery } from 'gatsby';


const useHomeItems = () => {
  const { allHomeYaml: { edges } } = useStaticQuery(graphql`
    query HOME_QUERY {
      allHomeYaml {
        edges {
          node {
            principal {
              avatar
              name
              text
              title
            }
            pros {
              list {
                description
                image
                title
              }
              subTitle
              title
            }
            slides {
              altText
              caption
              key
              src
            }
            teachers {
              subTitle
              list {
                name
                avatar
                subject
              }
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
