const pi = 3.1415926;

//class PepperCon

let pepperCon = {
    qiSession: null,
    alTextToSpeech: null,
    alSpeechRecognition: null,
    alAudioDevice: null,
    alMotion: null,
    alRobotPosture: null,
    alTabletService: null,
    alSystem: null,
    alBasicAwareness: null,
    alBackgroundMovement: null
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

const setVolume = () => {
    pepperCon.alAudioDevice.getOutputVolume().done((volume) => {
        let currentVolume = volume;
        console.log(currentVolume);
        document.getElementById('volume').innerHTML = currentVolume;
    });
}

const setLanguage = () => {
    pepperCon.alTextToSpeech.setLanguage('Japanese');
    pepperCon.alSpeechRecognition.setLanguage('Japanese');
    pepperCon.alTextToSpeech.getLanguage().done((res) => {
        console.log(res);
    });
    pepperCon.alSpeechRecognition.getLanguage().done((res) => {
        console.log(res);
    });
}

const setServices = () => {
    pepperCon.qiSession.service('ALTextToSpeech').done((res) => {
        pepperCon.alTextToSpeech = res;
        pepperCon.qiSession.service('ALSpeechRecognition').done((res) => {
            pepperCon.alSpeechRecognition = res;
            setLanguage();
        });
    });
    pepperCon.qiSession.service('ALAudioDevice').done((res) => {
        pepperCon.alAudioDevice = res;
        setVolume();
    });
    pepperCon.qiSession.service('ALMotion').done((res) => {
        pepperCon.alMotion = res;
    });
    pepperCon.qiSession.service('ALRobotPosture').done((res) => {
        pepperCon.alRobotPosture = res;
    });
    pepperCon.qiSession.service('ALTabletService').done((res) => {
        pepperCon.alTabletService = res;
    });
    pepperCon.qiSession.service('ALSystem').done((res) => {
        pepperCon.alSystem = res;
    });
    pepperCon.qiSession.service('ALBasicAwareness').done((res) => {
        pepperCon.alBasicAwareness = res;
    });
    pepperCon.qiSession.service('ALBackgroundMovement').done((res) => {
        pepperCon.alBackgroundMovement = res;
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

const tabletHideBtn = document.getElementById('tabletHideBtn');
tabletHideBtn.addEventListener('click', (e) => {
    pepperCon.alTabletService.hide();
});

const rebootBtn = document.getElementById('rebootBtn');
rebootBtn.addEventListener('click', (e) => {
    pepperCon.alSystem.reboot();
});

const shutdownBtn = document.getElementById('shutdownBtn');
shutdownBtn.addEventListener('click', (e) => {
    pepperCon.alSystem.shutdown();
});

const pepperVolumeBtn = document.getElementById('pepperVolumeBtn');
pepperVolumeBtn.addEventListener('click', (e) => {
    volume = document.getElementById('pepperVolume').value;
    console.log(volume);
    console.log(pepperCon.alAudioDevice.setOutputVolume(+volume).done());
    pepperCon.alAudioDevice.setOutputVolume(+volume).done(() => {
        setVolume();
    });
});

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

const stand = document.getElementById('stand');
stand.addEventListener('click', (e) => {
        pepperCon.alRobotPosture.goToPosture('Stand', 0.8);
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
