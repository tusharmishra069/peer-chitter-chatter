# P2P Video Chat App

This project is a peer-to-peer (P2P) video chat app built using **WebRTC**. The app allows exactly two peers to connect and chat in real-time. If a third user attempts to join, the connection will be automatically terminated to maintain the two-peer limit.

## Features
- **Peer-to-Peer Video Chat**: Two users can connect and communicate via live video using WebRTC.
- **Auto Disconnect for Third User**: If a third user tries to join the room, the app automatically disconnects the session.
- **Real-time Communication**: The app uses WebRTC technology to establish a direct peer-to-peer connection for smooth, low-latency communication.
- **Simple and Minimal UI**: A clean interface that provides an intuitive chat experience.

## What is WebRTC?

**WebRTC (Web Real-Time Communication)** is a technology that enables real-time, peer-to-peer communication directly through browsers without the need for any plugins or extra software. It supports the transmission of audio, video, and data, making it perfect for live video chat applications.

WebRTC functions as follows:
1. **Peer Discovery**: Discovering other peers with whom the user can connect.
2. **Signaling**: Exchanging session information and network details (candidates) between peers.
3. **Connection Setup**: Directly connecting the peers using ICE (Interactive Connectivity Establishment), and handling NAT/firewall traversal using STUN/TURN servers.

For more information, visit the official [WebRTC Documentation](https://webrtc.org/).

## How to Run the Project

### Prerequisites
- Node.js installed on your machine.
- A WebRTC-supported browser like Chrome, Firefox, or Edge.

### Installation Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/tusharmishra069/p2p-video-chat.git
    ```
2. Navigate to the project directory:
    ```bash
    cd p2p-video-chat
    ```

### Important Notes
- Ensure that both peers use the same room code to join the chat.
- If a third user tries to join the chat room, the connection will be terminated to maintain the two-peer limit.

## Technologies Used
- **WebRTC**: For real-time video communication.
- **HTML/CSS/JavaScript**: Frontend for user interface.

## Contributing
Feel free to submit pull requests or issues for improvements or bug fixes.
