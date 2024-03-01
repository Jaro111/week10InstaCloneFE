// GET RANDOM INAMGES
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

// GET USER INFO BY USERNAME
export const getPhotographer = async (username) => {
  const res = await fetch(
    `https://api.unsplash.com/users/${username}?&client_id=tRIl595IYP6qMcBSVze7LiAfMeQSytYrAF0u5A-L_6M`
  );

  const data = await res.json();
  let userData = {};
  userData["name"] = data.name;
  userData["username"] = data.username;
  userData["id"] = data.id;
  userData["likes"] = data.total_likes;
  userData["social"] = data.social;

  return userData;
};

// GET USER PHOTOS

export const getPhotographerPhotos = async (username) => {
  const res = await fetch(
    `https://api.unsplash.com/users/${username}/photos?&client_id=tRIl595IYP6qMcBSVze7LiAfMeQSytYrAF0u5A-L_6M`
  );

  const data = await res.json();
  console.log(data);

  const userPhotos = await data.map((photo) => {
    return {
      id: photo.id,
      imageURLs: {
        small: photo.urls.small,
        regular: photo.urls.regular,
      },
      likes: photo.likes,
      photographer_name: photo.user.username,
    };
  });
};

export default {
  myFetchFunc: myFetchFunc,
  getPhotographer: getPhotographer,
  getPhotographerPhotos: getPhotographerPhotos,
};
