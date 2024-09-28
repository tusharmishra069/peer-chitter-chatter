// Function to show the input field and join button for video chat or chat
let showInputField = (id) => {
    const container = document.createElement('div');
    container.id = `${id}-container`;

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = `Enter ${id === 'video-chat' ? 'Room Code for Video Chat' : 'Chat Room Code'}`;
    inputField.id = `${id}-input`;

    const joinButton = document.createElement('button');
    joinButton.innerText = 'Join';
    joinButton.id = `${id}-join-btn`;
    joinButton.style.marginTop = '10px';

    // Append input field and join button
    container.appendChild(inputField);
    container.appendChild(joinButton);

    // Append the container just below the button
    document.body.appendChild(container);

    // Add functionality to the Join button
    joinButton.addEventListener('click', () => {
        const inputValue = document.getElementById(`${id}-input`).value;
        if (inputValue.trim()) {
            handleJoin(id, inputValue);
        } else {
            alert('Please enter a valid room code');
        }
    });
};

// Event handler for joining the video chat or chat based on user input
let handleJoin = (id, inputValue) => {
    if (id === 'video-chat') {
        // Navigate to the video chat room with the entered room code
        const url = `https://tusharmishra069.github.io/peer-chitter-chatter/index1.html?room=${inputValue}`;
        window.open(url, "_blank");
    }
    // Additional functionality for chat can be added here later if needed
};

// Initialize video chat button functionality
let initVideoChat = async () => {
    // Show the input field and join button for the Video Chat button
    if (!document.getElementById('video-chat-container')) {
        showInputField('video-chat');
    }
};

// Event listener for the video chat button
document.getElementById('video-chat-btn').addEventListener('click', initVideoChat);
