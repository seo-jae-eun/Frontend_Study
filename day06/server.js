const webrtc = require("wrtc");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const servers = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
    {
      urls: "turn:192.168.0.124:3478",
      username: "testuser",
      credential: "qwer1234"
    }
  ],
};

let senderStream;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/watch", async (req, res) => {
  const peer = new webrtc.RTCPeerConnection(servers);

  const clientSdp = new webrtc.RTCSessionDescription(req.body.sdp);
  await peer.setRemoteDescription(clientSdp);

  senderStream
    .getTracks()
    .forEach((track) => peer.addTrack(track, senderStream));

  const answer = await peer.createAnswer();
  await peer.setLocalDescription(answer);
  const data = {
    sdp: peer.localDescription,
  };
  res.json(data);
});

app.post("/broadcast", async (req, res) => {
  const peer = new webrtc.RTCPeerConnection(servers);

  // 방송하는 사람의 스트림을 변수에 저장
  peer.ontrack = (event) => {
    senderStream = event.streams[0];
  };

  // 방송하는 클라이언트의 SDP(글자)를 받아서 RTCSessionDescription(SDP 객체) 를 생성
  const clientSdp = new webrtc.RTCSessionDescription(req.body.sdp);
  // 내 RTCPeerConnection 객체에 클라이언트 컴퓨터의 SDP 정보를 등록
  await peer.setRemoteDescription(clientSdp);
  // 상대방의 정보를 offer로 받았으니 응답을 해주게 응답 SDP를 생성
  const answer = await peer.createAnswer();
  // 내 RTCPeerConnection 객체에 내 SDP 정보를 등록
  await peer.setLocalDescription(answer);
  // 클라이언트에게 보낼 응답 데이터
  const data = {
    sdp: peer.localDescription,
  };
  // 응답 전송
  res.json(data);
});

// 컨트롤러의 메소스 하나
// HTTP GET 요청을 받아서 처리
app.get("/test", async (req, res) => {
  console.log("test");
  res.send("테스트");
});

// Apllication 클래스의 main 메소드
// 8080 포트로 서버 실행
app.listen(8080, () => {
  console.log("Server Started");
});
