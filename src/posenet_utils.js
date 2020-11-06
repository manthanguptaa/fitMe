import similarity from 'compute-cosine-similarity';

export const poseSimilarity = (pose1, pose2) => {
  const poseVector1 = getPoseVector(pose1);
  const poseVector2 = getPoseVector(pose2);
  return cosineDistanceMatching(poseVector1, poseVector2);
};

function getPoseVector(pose) {
  const xPos = pose.keypoints.map(k => k.position.x);
  const yPos = pose.keypoints.map(k => k.position.y);

  let minX = Math.min(...xPos);
  // let maxX = Math.max(...keypoint.position.x);
  let minY = Math.min(...yPos);
  // let maxY = Math.max(...keypoint.position.y);

  const vector = [];
  for (let i = 0; i < xPos.length; i++) {
    vector.push(xPos[i] - minX);
    vector.push(yPos[i] - minY);
  }
  return vector;
}

// Cosine similarity as a distance function. The lower the number, the closer // the match
// poseVector1 and poseVector2 are a L2 normalized 34-float vectors (17 keypoints each
// with an x and y. 17 * 2 = 32)
function cosineDistanceMatching(poseVector1, poseVector2) {
  const cosineSimilarity = similarity(poseVector1, poseVector2);
  const distance = 2 * (1 - cosineSimilarity);
  return Math.sqrt(distance);
}


// poseVector1 and poseVector2 are 52-float vectors composed of:
// Values 0-33: are x,y coordinates for 17 body parts in alphabetical order
// Values 34-51: are confidence values for each of the 17 body parts in alphabetical order
// Value 51: A sum of all the confidence values
// Again the lower the number, the closer the distance
// eslint-disable-next-line no-unused-vars
function weightedDistanceMatching(poseVector1, poseVector2) {
  const vector1PoseXY = poseVector1.slice(0, 34);
  const vector1Confidences = poseVector1.slice(34, 51);
  const vector1ConfidenceSum = poseVector1.slice(51, 52);

  const vector2PoseXY = poseVector2.slice(0, 34);

  // First summation
  const summation1 = 1 / vector1ConfidenceSum;

  // Second summation
  let summation2 = 0;
  for (let i = 0; i < vector1PoseXY.length; i++) {
    const tempConf = Math.floor(i / 2);
    const tempSum = vector1Confidences[tempConf] * Math.abs(vector1PoseXY[i] - vector2PoseXY[i]);
    summation2 += tempSum;
  }

  return summation1 * summation2;
}
