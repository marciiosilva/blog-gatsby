import React from 'react'
import propTypes from 'prop-types'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import * as S from './styled'
import getThemeColor from '../../utils/getThemeColor'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => (
    <S.PaginationWrapper>
        {!isFirst && <AniLink cover direction="left" bg={getThemeColor()} duration={0.6} to={prevPage}>página anterior</AniLink>}
        <p>{currentPage} de {numPages}</p>
        {!isLast && <AniLink cover direction="right" bg={getThemeColor()} duration={0.6} to={nextPage}>próxima página</AniLink>}
        
    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string,
}

export default Pagination