import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import * as S from "./styled"

const Avatar = () => {
  const data = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "photo-profile.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 60
              placeholder: TRACED_SVG
            )
          }
        }
      }
    `
  )

  console.log(data)

  const image = getImage(data.avatarImage)

  return <S.AvatarWarapper image={image} alt="profile image" />
}

export default Avatar
