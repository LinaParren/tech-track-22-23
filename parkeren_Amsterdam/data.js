// const dataset = [
//     {
//         zoneId: 1,
//         polygons: [
//             [],
//             [],
//             []
//         ],
//         tarief: 3.5,
//     },
//     {
//         zoneId: 2,
//         polygons: [
//             [],
//             [],
//             []
//         ],
//         tarief: 4.5,
//     }
// ]

dataset = data.map(zone => {

    let polygonArray;

    if(zone.location.type === 'MultiPolygon') {
        polygonArray = zone.location.coordinates[0][0];
    } else if(zone.location.type === 'Polygon') {
        polygonArray = zone.location.coordinates[0];
    }
    
    return {
        zoneId: zone.zoneId,
        polygons: polygonArray
    }
})