import { RekognitionClient } from "@aws-sdk/client-rekognition";
// Set the AWS Region.
const REGION = "us-west-2"; //e.g. "us-east-1"

// Create an Amazon Transcribe service client object.
const rekognitionClient = new RekognitionClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  }
});

export { rekognitionClient };