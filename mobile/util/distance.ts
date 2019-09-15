export default function distance(lat1, lon1, lat2, lon2): number {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d * 1000;
}

export function niceLookingDistance(lat1, lon1, lat2, lon2): string {
    const dist = distance(lat1, lon1, lat2, lon2);
    if (dist > 10) {
        return dist.toFixed(0);

    }
    return dist.toFixed(2);
}