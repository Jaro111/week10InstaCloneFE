export const myFetchFunc = async () => {
  const res = await fetch(
    "https://api.unsplash.com/photos/random/?count=10&client_id=DSbIFbF6rYKp5_qgNfB-E8KQ1XyFeVsQDCRt1Q5b85c"
  );
  const data = await res.json();

  const sortedPhotos = await data.map((photo) => {
    return {
      id: photo.id,
      imageURLs: {
        small: photo.urls.small,
      },
      likes: photo.likes,
      photographer_name: photo.user.username,
    };
  });
  return sortedPhotos;
};

export default myFetchFunc;
