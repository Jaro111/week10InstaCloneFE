export const myFetchFunc = async () => {
  const res = await fetch(
    "https://api.unsplash.com/photos/random/?count=12&client_id=DSbIFbF6rYKp5_qgNfB-E8KQ1XyFeVsQDCRt1Q5b85c"
  );
  const data = await res.json();

  const sortedPhotos = await data.map((photo) => {
    return {
      id: photo.id,
      imageURLs: {
        small: photo.urls.small,
        regular: photo.urls.regular,
      },
      likes: photo.likes,
      photographer_name: photo.user.username,
      photographer_id: photo.user.id,
    };
  });
  return sortedPhotos;
};

export default myFetchFunc;
