import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import PropTypes from 'prop-types'
import * as S from './styled'

const Comments = ({ url, title }) => {
    const completeUrl = `https://willianjusten.com.br${url}`
    return (
        <S.CommentsWrapper>
            <S.CommentsTitle>Comentários</S.CommentsTitle>
            <ReactDisqusComments 
                shortname="blog-developer"
                identifier={completeUrl}
                title={title}
                url={completeUrl}
            />
        </S.CommentsWrapper>
    )
}

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Comments