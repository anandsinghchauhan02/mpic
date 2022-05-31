import React from "react";
import { graphql, useStaticQuery } from 'gatsby';


export const useHeaderItems = () => {
    const { allHeaderYaml: { edges } } = useStaticQuery(graphql`
      query HEADER_QUERY {
        allHeaderYaml {
            edges {
              node {
                nav {
                  link
                  text
                }
                intro {
                  icon
                  link
                  text
                  title
                  iconType
                }
                social {
                  icon
                  link
                  text
                  iconType
                }
                logo {
                    text
                    link   
                    image
                }
              }
            }
          }
      }
    `);
    const items = edges[0]?.node;

    return items
}

