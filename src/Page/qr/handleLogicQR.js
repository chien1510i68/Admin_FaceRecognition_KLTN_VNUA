// LocationUtils.js

// Hàm xử lý logic liên quan đến vị trí
export const getUserPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const positionInfo = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        };
        resolve(positionInfo);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const disTanceTwoPoint = (lat1, lat2, lon1, lon2) => {
  const convertToRadian = (value) => (value * Math.PI) / 180;
  const dLat = convertToRadian(lat2 - lat1);
  const dLon = convertToRadian(lon2 - lon1);
  // Tính toán khoảng cách giữa 2 điểm trên 1 bề mặt cầu
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(convertToRadian(lat1)) *
      Math.cos(convertToRadian(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return 6371000 * c;
};
