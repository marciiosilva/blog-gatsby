import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './styled';

const Avatar = () => {
    const { AvatarImage } = useStaticQuery(
        graphql`
            query {
                AvatarImage: file(relativePath: {eq: "profile-photo.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 60){
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fluid={AvatarImage.childImageSharp.fluid} className="profile" />
}

export default Avatar;