import { useState, useEffect } from "react";

function PreloadImage(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.alt = props.alt
    img.src = props.src;
    img.srcset = props.srcSet;
    img.onload = () => {
      setLoaded(true);
    };
  }, [props.src, props.srcSet, props.alt]);

  return loaded ? <img {...props} alt={props.alt} /> : null;
}

export default PreloadImage;