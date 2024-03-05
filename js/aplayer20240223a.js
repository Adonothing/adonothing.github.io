// 阅读-论文-一种基于目测的未知目标运动分析方位角方法
const ap4 = new APlayer({
    container: document.getElementById('aplayer20240223a'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: true,
    listMaxHeight: 90,
    lrcType: 3,
    audio: [
        {
            name: 'Abstract',
            artist: 'Aria',
            url: 'https://picture.adunas.top/Article/arXiv-2401.17117v1/AbstractAria.mp4',
            cover: 'cover1.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'Abstract',
            artist: 'Adunas',
            url: 'https://picture.adunas.top/Article/arXiv-2401.17117v1/AbstractAdunas.mp3',
            cover: 'cover1.jpg',
            lrc: 'lrc1.lrc',
            theme: '#ebd0c2'
        }
    ]
});