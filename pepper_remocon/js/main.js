const pi = 3.1415926;

let pepperCon = {
    qiSession: null,
    alTextToSpeech: null,
    alMotion: null
};

const connect = (ip) => {
    console.log('ip: ' + ip);
    const qis = new QiSession(ip);
    if(qis){
        return qis;
    }else{
        return null;
    }
}

const setServices = () => {
    pepperCon.qiSession.service('ALTextToSpeech').done((res) => {
        pepperCon.alTextToSpeech = res;
    });
    pepperCon.qiSession.service('ALMotion').done((res) => {
        pepperCon.alMotion = res;
    });
}

const changeStatus = () => {
    document.getElementById('status').innerHTML = '接続';
}

const testMethod = () => {
    console.log('btn clicked.');
    console.log(pepperCon);
    pepperCon.alTextToSpeech.say('test method');
}

const pepperIPbtn = document.getElementById('pepperIPBtn');
pepperIPbtn.addEventListener('click', (e) => {
    pepperCon.qiSession = connect(document.getElementById('pepperIP').value);
    if(pepperCon.qiSession === null){
        return 0;
    }else{
        setServices();
        changeStatus();
    }
});

const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    testMethod();
});

const sayBtn = document.getElementById('sayBtn');
sayBtn.addEventListener('click', (e) => {
    pepperCon.alTextToSpeech.say(document.getElementById('say').value);
});

const moveForward = document.getElementById('moveForward');
moveForward.addEventListener('click', (e) => {
    pepperCon.alMotion.moveTo(0.5, 0, 0);
});

const moveBackward = document.getElementById('moveBackward');
moveBackward.addEventListener('click', (e) => {
    pepperCon.alMotion.moveTo(-0.5, 0, 0);
});

const moveRightward = document.getElementById('moveRightward');
moveRightward.addEventListener('click', (e) => {
        pepperCon.alMotion.moveTo(0, -0.5, 0);
});

const moveLeftward = document.getElementById('moveLeftward');
moveLeftward.addEventListener('click', (e) => {
    pepperCon.alMotion.moveTo(0, 0.5, 0);
});

const turnRight30 = document.getElementById('turnRight30');
turnRight30.addEventListener('click', (e) => {
    pepperCon.alMotion.moveTo(0, 0, -30*pi/180);
});

const turnRight60 = document.getElementById('turnRight60');
turnRight60.addEventListener('click', (e) => {
    pepperCon.alMotion.moveTo(0, 0, -60*pi/180);
});

const turnRight90 = document.getElementById('turnRight90');
turnRight90.addEventListener('click', (e) => {
    pepperCon.alMotion.moveTo(0, 0, -90*pi/180);
});

const turnLeft30 = document.getElementById('turnLeft30');
turnLeft30.addEventListener('click', (e) => {
    pepperCon.alMotion.moveTo(0, 0, 30*pi/180);
});

const turnLeft60 = document.getElementById('turnLeft60');
turnLeft60.addEventListener('click', (e) => {
    pepperCon.alMotion.moveTo(0, 0, 60*pi/180);
});

const turnLeft90 = document.getElementById('turnLeft90');
turnLeft90.addEventListener('click', (e) => {
    pepperCon.alMotion.moveTo(0, 0, 90*pi/180);
});
