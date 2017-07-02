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
