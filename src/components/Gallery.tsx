/* eslint-disable @typescript-eslint/no-explicit-any */
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

function Gallery (props:any) {
  const PropsImages = props.pics.map((pic:any)=>(
    {original:pic.secure_url,
      thumbnail: pic.secure_url,
      loading: "lazy",
      originalHeight: "400px"
    }
  ))
    return <ImageGallery 
    items={PropsImages} 
    showPlayButton={false} 
    showFullscreenButton={false}
    thumbnailPosition="right"
    />;
}

export {Gallery}