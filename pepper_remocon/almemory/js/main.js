const pi = 3.1415926;

class PepperCon {
    constructor(){
        this.qiSession = undefined,
        this.alAudioDevice = undefined,
        this.alMemory = undefined
    }
};

let pepperCon = new PepperCon();

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

const setServices = () => {
    pepperCon.qiSession.service('ALAudioDevice').done((res) => {
        pepperCon.alAudioDevice = res;
        setVolume();
    });
    pepperCon.qiSession.service('ALMemory').done((res) => {
        pepperCon.alMemory = res;
    });
}

const changeStatus = (status) => {
    document.getElementById('status').innerHTML = status;
}

const pepperIPbtn = document.getElementById('pepperIPBtn');
pepperIPbtn.addEventListener('click', (e) => {
    pepperCon.qiSession = connect(document.getElementById('pepperIP').value);
    if(pepperCon.qiSession === null){
        changeStatus('エラー')
        return 0;
    }else{
        setServices();
        changeStatus('接続');
    }
});

const alMemory1 = document.getElementById('alMemory1');
alMemory1.addEventListener('click', (e) => {
    pepperCon.alMemory.raiseEvent('alMemory1', 1);
});

const alMemory2 = document.getElementById('alMemory2');
alMemory2.addEventListener('click', (e) => {
    pepperCon.alMemory.raiseEvent('alMemory2', 1);
});

const alMemory3 = document.getElementById('alMemory3');
alMemory3.addEventListener('click', (e) => {
    pepperCon.alMemory.raiseEvent('alMemory3', 1);
});
