//Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// /**
//  * @param {number[][]} points
//  * @param {number} k
//  * @return {number[][]}
//  */

var kClosest = function(points, k) {
    const dist = ([a, b]) => a * a + b * b;
    points.sort((a, b) => {
        return dist(a) - dist(b);
    });
    return points.slice(0, k);
};