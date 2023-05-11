import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonNote = (props) => (
    <ContentLoader
        speed={1}
        width={215}
        height={285}
        viewBox="0 0 215 285"
        backgroundColor="#bababa"
        foregroundColor="#ababab"
        {...props}
    >
        <rect x="-1" y="-1" rx="20" ry="20" width="214" height="285" />
    </ContentLoader>

)

export default SkeletonNote

