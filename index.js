//Transmittor
const { Transmitter, DatabaseEvents } = require("@akarui/aoi.db");
const db = Transmitter.createConnection({
    path: `aoidb://vishvaas:123456@one.shadowhosting.xyz:19198`,
    dbOptions: {
        type: "KeyValue",
        options: {
            dataConfig: {
                path: "./database",
            },
        }
    }
})

db.on(DatabaseEvents.Connect, () => console.log("Connected to Database"));
db.on(DatabaseEvents.Disconnect, () => console.log("Disconnected from Database"));
db.connect();


//Receiver
const { Receiver } = require("@akarui/aoi.db"); //commonjs

const rec = new Receiver({
databaseType: "KeyValue",
databaseOptions: {
dataConfig:{ 
tables: ["main", "cache"] } },
host: "0.0.0.0",
port: 19198,
userConfig: [{
username: "vishvaas",
password: "123456",
}]
});

rec.on("connect", () => {
  console.log("Connected to Bot");
});

rec.connect();
