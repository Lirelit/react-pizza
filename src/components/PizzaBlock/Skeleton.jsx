import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="453" y="561" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="130" cy="130" r="130" /> 
    <rect x="165" y="329" rx="0" ry="0" width="1" height="0" /> 
    <rect x="-5" y="592" rx="7" ry="7" width="106" height="33" /> 
    <rect x="119" y="427" rx="28" ry="28" width="157" height="57" /> 
    <rect x="4" y="320" rx="7" ry="7" width="271" height="96" /> 
    <rect x="6" y="432" rx="5" ry="5" width="101" height="43" /> 
    <rect x="3" y="274" rx="7" ry="7" width="271" height="31" />
  </ContentLoader>
)

export default Skeleton