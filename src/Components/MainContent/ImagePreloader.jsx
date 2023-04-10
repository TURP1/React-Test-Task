import { useState, useEffect } from "react";

function PreloadImage(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = props.src;
    img.srcset = props.srcSet;
    img.onload = () => {
      setLoaded(true);
    };
  }, [props.src, props.srcSet]);

  return loaded ? <img {...props} /> : null;
}

export default PreloadImage;