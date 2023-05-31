import { gql } from '@apollo/client'
import Page from '@/pages/Page'
import { Route } from 'react-router-dom'

const pageCreation = (title, url, id) => {
  const page = (
    <Route
      key={title}
      path={url}
      element={<Page iDInfo={id} title={title} />}
    />
  )

  return page
}

const generatePage = (routes, page) => {
  const { id, attributes } = page
  const { url, title } = attributes

  routes.push(pageCreation(title, url, id))
}

const GET_MENU_ITEMS = gql`
  query {
    headerLink {
      data {
        attributes {
          links {
            title
            href
            id
            children {
              title
              href
            }
          }
        }
      }
    }
  }
`
const GET_All_PAGES = gql`
  query {
    pages {
      data {
        id
        attributes {
          title
          url
        }
      }
    }
  }
`

const getPageInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            textCircle {
              title
            }
            card {
              title
            }
            cardCircle {
              title
            }
            cardCircleProfile {
              title
            }
            Carrousel {
              title
            }
            CountCircle {
              content
            }
            Form {
              title
            }
            InfoImages {
              title
            }
            KeyIndustries {
              title
              MainPage
            }
            Manifesto {
              title
            }
            secondTextCircle {
              title
            }
          }
        }
      }
    }
  `
}

const getCircleTextInfo = (id, provider = 'textCircle') => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            ${provider} {
              title
              content
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCarrouselInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            Carrousel {
              title
              content
              link
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCardInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            card {
              title
              content
              button
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCardProfileInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            cardCircleProfile {
              title
              name
              linkedin
              mail
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCardTitle = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            CardContainerTitle
          }
        }
      }
    }
  `
}

const getCountCircleInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            CountCircle {
              number
              content
              color
              PlusSymbol
            }
          }
        }
      }
    }
  `
}

const getManifestoInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            Manifesto {
              title
              content
            }
          }
        }
      }
    }
  `
}

const getKeyIndustriesInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            KeyIndustries {
              title
              TitleImages {
                title
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                content
              }
            }
          }
        }
      }
    }
  `
}

const getTitleAndImgesInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            InfoImages {
              title
              content
              TitleImages {
                title
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getFormInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            Form {
              title
              content
              InputName {
                label
                name
                placeholder
                type
              }
              Mail {
                label
                name
                placeholder
                type
              }
              PhoneInput {
                label
                name
                placeholder
                type
              }
              CountryInput {
                label
                name
                placeholder
                type
              }
              ContactPreferences {
                Legend
                name
                label
                checked
              }
              SelectInput {
                Legend
                idName
                placeholder
              }
              options {
                option
              }
              textarea {
                label 
                name 
                placeholder
              }
              valueBtn
            }
          }
        }
      }
    }
  `
}

export {
  generatePage,
  GET_MENU_ITEMS,
  GET_All_PAGES,
  getPageInfo,
  getCircleTextInfo,
  getCarrouselInfo,
  getCardInfo,
  getCardProfileInfo,
  getCardTitle,
  getCountCircleInfo,
  getManifestoInfo,
  getKeyIndustriesInfo,
  getTitleAndImgesInfo,
  getFormInfo,
}
