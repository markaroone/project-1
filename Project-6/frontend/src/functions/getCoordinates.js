const getCoordinates = (data) => {
  const { laps } = data;

  return laps
    .map((lap) => {
      const {
        Track: { Trackpoint },
      } = lap;

      const coordinates = Trackpoint.map((point) => {
        const {
          Position: { LatitudeDegrees: lat, LongitudeDegrees: lng },
        } = point;

        return [+lat, +lng];
      });

      return coordinates;
    })
    .flat();
};

export default getCoordinates;
