import { API_URL } from '../constants';

function createRecorderWebcam (stream, mimeType)  {
  // the stream data is stored in this array
  let recordedChunks = []; 
  
  const mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.videodata = null;
  
  mediaRecorder.ondataavailable = function (e) {
    if (e.data.size > 0) {      
      recordedChunks.push(e.data);
    }  
  };


  mediaRecorder.onstop = function (event) {
    saveFile(recordedChunks, mediaRecorder.videodata);
    recordedChunks = [];
  };
  mediaRecorder.start(5000); // For every 5000ms the stream data will be stored in a separate chunk.
  return mediaRecorder;
}

function saveFile(recordedChunks, videodata){
  
  const blob = new Blob(recordedChunks, {
    type: 'video/mp4'
  });
  
  const formdata = new FormData();
formdata.append("blobs", blob, videodata.email + "-" + videodata.step + ".mp4");

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch(API_URL + "/upload-video", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));


  
  /*let filename = window.prompt('Enter file name'),
      downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `${filename}.webm`;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  URL.revokeObjectURL(blob); // clear from memory
  document.body.removeChild(downloadLink);*/
  
}

async function recordWebcam() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: { width: 640, height: 360, frameRate: { ideal: 3, max: 3 }, facingMode: "user"}
  })
    document.getElementById("video").srcObject = stream;
    document.getElementById("video").play();
  return stream;
}

let mediaRecorderWebcam;
const start = async() => {
  let streamWebcam = await recordWebcam();
  let mimeType = 'video/webm';
  mediaRecorderWebcam = createRecorderWebcam(streamWebcam, mimeType);
}
    
const stop = async (videodata) => {
  if(mediaRecorderWebcam) {
    mediaRecorderWebcam.videodata=videodata;
    mediaRecorderWebcam.stop();
    mediaRecorderWebcam.stream.getTracks().forEach(function(track) {
        track.stop();
    })
  }
  
}

export {start, stop}
