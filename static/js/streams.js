const APP_ID = '6ad714dd593b4f598a1fee7bda52c434'
const CHANNEL = 'main'
const TOKEN = '007eJxTYFjomdUm5d+z93jTuc9Wh2fNFv11L+BGl4DJF/+j0m+Uiq8qMJglppgbmqSkmFoaJ5mkmVpaJBqmpaaaJ6Ukmholmxib7A3rSGkIZGTgfenIwAiFID4LQ25iZh4DAwDV8yET'
let UID;

const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN)
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
                     <div class="username-wrapper"><span class="user-name">My name</span></div>
                     <div class="video-player" id="user-${UID}"></div> 
                  </div>`
    document.getElementById('video-streams').insertAdjacentElement('beforeend',player)
    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0],localTracks[1]])


}


joinAndDisplayLocalStream()



