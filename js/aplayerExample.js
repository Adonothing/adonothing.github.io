// APlayer 教程演示
const ap1 = new APlayer({
    container: document.getElementById('aplayerExampleA'),
    audio: [{
        name: 'bearing',
        artist: 'Adunas',
        url: 'https://picture.adunas.top/Audio/English/bearingAdunasA.mp3',
        cover: '/assets/avatar.webp'
    }]
});

const ap2 = new APlayer({
    container: document.getElementById('aplayerExampleB'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'bearing',
            artist: 'Adunas',
            url: 'https://picture.adunas.top/Audio/English/bearingAdunasA.mp3',
            cover: '/assets/avatar.webp',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'bearing',
            artist: 'Adunas',
            url: 'https://picture.adunas.top/Audio/English/bearingAdunasA.mp3',
            cover: '/assets/avatar.webp',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        }
    ]
});