import React, { useState, useEffect, useRef } from 'react';

const Participant = ({ muted, participant, setVideoRef, setCanvasRef, isPlayer, score }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const canvasRef = useRef();
  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = trackMap => Array.from(trackMap.values())
    .map(publication => publication.track)
    .filter(track => track !== null);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    const trackSubscribed = track => {
      if (track.kind === 'video') {
        setVideoTracks(videoTracks => [...videoTracks, track]);
      } else {
        setAudioTracks(audioTracks => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = track => {
      if (track.kind === 'video') {
        setVideoTracks(videoTracks => videoTracks.filter(v => v !== track));
      } else {
        setAudioTracks(audioTracks => audioTracks.filter(a => a !== track));
      }
    };

    participant.on('trackSubscribed', trackSubscribed);
    participant.on('trackUnsubscribed', trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      
      if (isPlayer && setVideoRef && setCanvasRef) {
        setVideoRef(videoRef);
        setCanvasRef(canvasRef);
      }
      
      return () => {
        videoTrack.detach();
      };
    }
  }, [isPlayer, setCanvasRef, setVideoRef, videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  return (
    <div className="participant">
      <h3>{participant.identity}</h3>
      <div className='video-wrapper'>
        { isPlayer ?
          <>
            <canvas ref={canvasRef} width="560" height="420" style={{transform: 'scaleX(-1)'}}></canvas>
            <video ref={videoRef} width="560" height="420" autoPlay={true} className="hidden" />
          </>
          : <video ref={videoRef} width="400" height="300" autoPlay={true} />
        }
        <audio ref={audioRef} autoPlay={true} muted={muted} />
        <div className='score-overlay'>{score}</div>
      </div>
    </div>
  );
};

export default Participant;