// This is a placeholder array of objects that would normally be fetched from our DB.
const actorsList = [
    actor1 = {
        id: 1,
        identity: "Black Bolt",
        isKiller: false,
    },
    actor2 = {
        id: 2,
        identity: "Medusa",
        isKiller: false,
    },
    actor3 = {
        id: 3,
        identity: "Karnak the Shatterer",
        isKiller: false,
    },
    actor4 = {
        id: 4,
        identity: "Crystal",
        isKiller: false,
    },
    actor5 = {
        id: 5,
        identity: "Lockjaw",
        isKiller: false,
    }
];

// This is a placeholder array of objects that would normally be fetched from our DB.
const roomList = [
    room1 = {
        id: 1,
        roomName: "Agon's Tower",
        adjacentTo: [2,3,4],
        isMurderRoom: false,
        occupants: [],
    },
    room2 = {
        id: 2,
        roomName: "Pit of the Dead",
        adjacentTo: [1,3,5],
        isMurderRoom: false,
        occupants: [],
    },
    room3 = {
        id: 3,
        roomName: "The Palace",
        adjacentTo: [1,2,4,5],
        isMurderRoom: false,
        occupants: [],
    },
    room4 = {
        id: 4,
        roomName: "Old Attilan Harbor",
        adjacentTo: [1,3,5],
        isMurderRoom: false,
        occupants: [],
    },
    room5 = {
        id: 5,
        roomName: "Terrigen Lab",
        adjacentTo: [2,3,4],
        isMurderRoom: false,
        occupants: [],
    }
];

const simStart = () => {
    const killer = actorsList[rng(0, actorsList.length)];
    const murderRoom = roomList[rng(0, roomList.length)];
    setKiller(killer);
    setMurderRoom(murderRoom);
    // TODO: Change this to be more vague.
    console.log(`${killer.identity} has commited a murder in ${murderRoom.roomName}!`)
    initialPlacement(murderRoom);
    roomStatus();
};

const setKiller = (killer) => {
    killer.isKiller = true;
};

const setMurderRoom = (murderRoom) => {
    murderRoom.isMurderRoom = true;
};

const initialPlacement = (murderRoom) => {
    //Basic function that randomly determines the initial placement of each actor.
    actorsList.forEach((val) => {
        if (val.isKiller == true) {
            roomList[roomList.indexOf(murderRoom)].occupants.push(val);
        } else {
            // TODO: Innocent actors cannot start in murder room.
            murderRoomCheck();
            roomList[rng(0,roomList.length)].occupants.push(val);
        };
    });
};

const roomStatus = () => {
    roomList.forEach((val) => {
        if (val.occupants[0] == undefined) {
            console.log(`There is nobody inside ${val.roomName}.`);
        } else {
            Object.values(val.occupants).forEach(data => {
                console.log(`${data.identity} is inside ${val.roomName}.`);
            });
        };
    });
};

const murderRoomCheck = () => {
    roomList.forEach((val) => {
            if (val.isMurderRoom == true) {
                return roomList.indexOf(val);
            } else {
                return;
            };
    });
};

const rng = (min, max) => {
    return Math.floor(Math.random()*max) + min;
};

simStart();