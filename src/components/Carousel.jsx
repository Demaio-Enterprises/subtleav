import React from 'react';
import AWS from 'aws-sdk';

class ImageSlider extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      imageUrls: [],
    };
  }

  async componentDidMount() {
    // Initialize AWS SDK with the EC2 instance profile credentials
    AWS.config.update({region: 'us-east-2'});

    // Create a new S3 instance
    const s3 = new AWS.S3();

    // Define the S3 bucket and key prefix to search for images
    const bucketName = 'subtleav.com';
    const keyPrefix = 'jpg/';

    // Call the S3 API to list objects in the bucket with the specified prefix
    s3.listObjectsV2({
      Bucket: bucketName,
      Prefix: keyPrefix
    }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // Map the object keys to signed S3 URLs
        const imageUrls = data.Contents.map((obj) => {
          return s3.getSignedUrl('getObject', {
            Bucket: bucketName,
            Key: obj.Key,
            Expires: 60*60*24 // URL expires after 24 hours
          });
        });

        // Update the state with the image URLs
        this.setState({ imageUrls });
      }
    });
  }

  render(){
    const { imageUrls } = this.state;

    return (
      <div>
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt="Slider Image" />
        ))}
      </div>
    );
  }
}

export default ImageSlider;




















//*********************************************************
// const images = [
//   { url: "https://s3.us-east-2.amazonaws.com/subtleav.com/jpg/IMG_0022.JPG" },
//   { url: "https://s3.us-east-2.amazonaws.com/subtleav.com/jpg/IMG_0096.jpg" },
//   { url: "https://s3.us-east-2.amazonaws.com/subtleav.com/jpg/IMG_0131.jpg" },
//   { url: "https://s3.us-east-2.amazonaws.com/subtleav.com/jpg/IMG_0164.JPG" },
//   { url: "https://s3.us-east-2.amazonaws.com/subtleav.com/jpg/IMG_0222.jpg" },
//   { url: "https://s3.us-east-2.amazonaws.com/subtleav.com/jpg/IMG_0341.jpg" },
// ];

// export function ImgCarousel() {

//   return (
//     <div className="w-full flex justify-center p-5">
//       <SimpleImageSlider
//         width={896}
//         height={504}
//         images={images}
//         showBullets={true}
//         showNavs={true}
//       />
//     </div>
//   );
// }