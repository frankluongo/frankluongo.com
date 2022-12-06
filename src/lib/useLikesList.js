import { graphql, useStaticQuery } from "gatsby";

export function useLikesList() {
  const data = useStaticQuery(graphql`
    query LikesListQuery {
      allNotion(
        filter: {
          properties: {
            published: { value: { eq: true } }
            space: { value: { name: { eq: "likes" } } }
          }
        }
      ) {
        nodes {
          title
          id
          properties {
            subspace {
              value {
                name
              }
            }
          }
        }
      }
    }
  `);
  const list = data.allNotion.nodes;
  const likes = list.filter(
    (item) => item.properties.subspace.value.name === "likes"
  );
  const dislikes = list.filter(
    (item) => item.properties.subspace.value.name === "dislikes"
  );
  return { dislikes, likes };
}
