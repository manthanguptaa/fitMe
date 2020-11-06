export function checkUserMediaError() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return new Error(
      "Browser API navigator.mediaDevices.getUserMedia not available"
    )
  }
  return null
}

export function getMediaStreamConstraints(facingMode, frameRate) {
  return {
    audio: false,
    video: {
      facingMode,
      frameRate
    }
  }
}

export function getConfidentPoses(poses, minPoseConfidence, minPartConfidence) {
  return poses
    .filter(({ score }) => score > minPoseConfidence)
    // .map(pose => ({
    //   ...pose,
    //   keypoints: pose.keypoints.filter(({ score }) => score > minPartConfidence)
    // }))
}

export function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
  ctx.beginPath();
  ctx.moveTo(ax * scale, ay * scale);
  ctx.lineTo(bx * scale, by * scale);
  ctx.lineWidth = 3;
  ctx.strokeStyle = color;
  ctx.stroke();

  drawPoint(ay, ax, color, ctx)
  drawPoint(by, bx, color, ctx)
}

export function drawPoint(y, x, color, ctx) {
  ctx.beginPath()
  ctx.arc(x, y, 5, 0, 2 * Math.PI, false)
  ctx.fillStyle = color
  ctx.fill()
} 

const MIN_CONFIDENCE = .2;

export function drawKeypoints(ctx, keypoints) {
  const minConfidence = MIN_CONFIDENCE;
  const adjacentKeyPoints = getAdjacentKeyPoints(keypoints, minConfidence);

  adjacentKeyPoints.forEach((keypoints) => {
    drawSegment(
        toTuple(keypoints[0].position), toTuple(keypoints[1].position), 'aqua',
        1, ctx);
  });
}

export const partNames = [
  'nose', 'leftEye', 'rightEye', 'leftEar', 'rightEar', 'leftShoulder',
  'rightShoulder', 'leftElbow', 'rightElbow', 'leftWrist', 'rightWrist',
  'leftHip', 'rightHip', 'leftKnee', 'rightKnee', 'leftAnkle', 'rightAnkle'
];

const connectedPartNames = [
  ['leftHip', 'leftShoulder'], ['leftElbow', 'leftShoulder'],
  ['leftElbow', 'leftWrist'], ['leftHip', 'leftKnee'],
  ['leftKnee', 'leftAnkle'], ['rightHip', 'rightShoulder'],
  ['rightElbow', 'rightShoulder'], ['rightElbow', 'rightWrist'],
  ['rightHip', 'rightKnee'], ['rightKnee', 'rightAnkle'],
  ['leftShoulder', 'rightShoulder'], ['leftHip', 'rightHip']
];

export const partIds =
  partNames.reduce((result, jointName, i) => {
    result[jointName] = i;
    return result;
  }, {});

const connectedPartIndices = connectedPartNames.map(
  ([jointNameA, jointNameB]) => ([partIds[jointNameA], partIds[jointNameB]]));

export function getAdjacentKeyPoints(keypoints, minConfidence) {
  return connectedPartIndices.reduce(
    (result, [leftJoint, rightJoint]) => {
      if (eitherPointDoesntMeetConfidence(
              keypoints[leftJoint].score, keypoints[rightJoint].score,
              minConfidence)) {
        return result;
      }

      result.push([keypoints[leftJoint], keypoints[rightJoint]]);

      return result;
    }, []);
}

function eitherPointDoesntMeetConfidence(
  a, b, minConfidence) {
  return (a < minConfidence || b < minConfidence);
}

function toTuple({y, x}) {
  return [y, x];
}