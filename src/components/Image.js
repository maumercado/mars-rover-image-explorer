import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoverAPI from '../services/rover';
import ImgMetadata from '../atoms/ImgMetadata';


function Image() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const roverAPI = new RoverAPI();
    const fetchImage = async () => {
      try {
        const img = await roverAPI.getImage(id);
        setLoading(false);
        setImage(img);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [id]);

  return (
    <div className='appContainer'>
      {error ? <div>{error}</div> :
      loading ? <div>Loading...</div> : (
        <div className="imageContainer">
          <img src={image.images.base64} alt="Mars Rover" />
          <ImgMetadata sol={image.metadata.sol} earth_date={image.metadata.earth_date} />
        </div>
      )}
    </div>
  );
}

export default Image;
