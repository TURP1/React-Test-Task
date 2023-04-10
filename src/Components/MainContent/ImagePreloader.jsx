import { useEffect } from "react";


function PreloadImage(props) {
    useEffect(() => {
      const img = new Image();
      img.src = props.src;
      img.scrSet = props.srcSet;
    }, [props.src, props.srcSet]);
  
    return null;
  }
export default PreloadImage