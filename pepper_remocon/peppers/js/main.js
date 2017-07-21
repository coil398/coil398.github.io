const pi = 3.1415926;

//class PepperCon

let pepperCon = {
    qiSession: null,
    alTextToSpeech: null,
    alSpeechRecognition: null,
    alAudioDevice: null
};

let pepperCon2 = {
    qiSession: null,
    alTextToSpeech: null,
    alSpeechRecognition: null,
    alAudioDevice: null
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
        currentVolume = volume;
        console.log(currentVolume);
        document.getElementById('volume').innerHTML = currentVolume;
    });
}

const setVolume2 = () => {
    pepperCon2.alAudioDevice.getOutputVolume().done((volume) => {
        currentVolume = volume;
        console.log(currentVolume);
        document.getElementById('volume2').innerHTML = currentVolume;
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

const setLanguage2 = () => {
    pepperCon2.alTextToSpeech.setLanguage('Japanese');
    pepperCon2.alSpeechRecognition.setLanguage('Japanese');
    pepperCon2.alTextToSpeech.getLanguage().done((res) => {
        console.log(res);
    });
    pepperCon2.alSpeechRecognition.getLanguage().done((res) => {
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
}

const setServices2 = () => {
    pepperCon2.qiSession.service('ALTextToSpeech').done((res) => {
        pepperCon2.alTextToSpeech = res;
        pepperCon.qiSession.service('ALSpeechRecognition').done((res) => {
            pepperCon2.alSpeechRecognition = res;
            setLanguage2();
        });
    });
    pepperCon2.qiSession.service('ALAudioDevice').done((res) => {
        pepperCon2.alAudioDevice = res;
        setVolume2();
    });
    pepperCon2.qiSession.service('ALMotion').done((res) => {
        pepperCon2.alMotion = res;
    });
    pepperCon2.qiSession.service('ALRobotPosture').done((res) => {
        pepperCon2.alRobotPosture = res;
    });
    pepperCon2.qiSession.service('ALTabletService').done((res) => {
        pepperCon2.alTabletService = res;
    });
    pepperCon2.qiSession.service('ALSystem').done((res) => {
        pepperCon2.alSystem = res;
    });
}

const changeStatus = () => {
    document.getElementById('status').innerHTML = '接続';
}

const changeStatus2 = () => {
    document.getElementById('status2').innerHTML = '接続';
}

const testMethod2 = () => {
    console.log('btn clicked.');
    console.log(pepperCon);
    console.log(pepperCon2)
    pepperCon.alTextToSpeech.say('同時に発話');
    pepperCon2.alTextToSpeech.say('同時に発話');
}

const pepperVolumeBtn = document.getElementById('pepperVolumeBtn');
pepperVolumeBtn.addEventListener('click', (e) => {
    volume = document.getElementById('pepperVolume').value;
    console.log(volume);
    console.log(pepperCon.alAudioDevice.setOutputVolume(+volume).done());
    pepperCon.alAudioDevice.setOutputVolume(+volume).done(() => {
        setVolume();
    });
});

const pepperVolumeBtn2 = document.getElementById('pepperVolumeBtn2');
pepperVolumeBtn2.addEventListener('click', (e) => {
    volume = document.getElementById('pepperVolume2').value;
    console.log(volume);
    console.log(pepperCon2.alAudioDevice.setOutputVolume(+volume).done());
    pepperCon2.alAudioDevice.setOutputVolume(+volume).done(() => {
        setVolume2();
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

const pepperIPbtn2 = document.getElementById('pepperIPBtn2');
pepperIPbtn2.addEventListener('click', (e) => {
    pepperCon2.qiSession = connect(document.getElementById('pepperIP2').value);
    if(pepperCon2.qiSession === null){
        return 0;
    }else{
        setServices2();
        changeStatus2();
    }
});

const testMethod = () => {
    console.log('btn clicked.');
    console.log(pepperCon);
    console.log(pepperCon2)
    pepperCon.alTextToSpeech.say('同時に発話');
    pepperCon2.alTextToSpeech.say('同時に発話');
}

const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    testMethod();
});