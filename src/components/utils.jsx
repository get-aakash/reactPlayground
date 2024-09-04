export function getImageUrl(imageId, size="m") {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}