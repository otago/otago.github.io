import { useQuery, gql } from "@apollo/client";

const api = {
  GetCeremonies: (limit, offset) => {
    const VOLUMES = gql`
      query Ceremony {
        paginatedReadCeremonies(limit: ${limit}, offset: ${offset}) {
          edges {
            node {
              ID
              Code
              Title
              Start
              End
              Success
              Disclaimer
              Yes_HasExtraTickets
              Yes_TicketsContent
              Yes_HasSchoolPreGrad
              Yes_SchoolPreGradContent
              Yes_HasMaoriPreGrad
              Yes_MaoriPreGradContent
              Yes_HasHiringAcademicDress
              Yes_HiringAcademicDressContent1
              Yes_HiringAcademicDressContent2
              No_Option1Title
              No_Option1Content
              No_Option2Title
              No_Option2Content
              Defer_Content
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            totalCount
          }
        }
      }
    `;
    return useQuery(VOLUMES);
  },
};

export default api;
