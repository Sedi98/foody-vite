import React from "react";
import Helmet from "react-helmet";


type Props = {
  title: string;
}
const HelmetLib:React.FC<Props> = ({title}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
     
    </Helmet>
  );
};

export default HelmetLib;
