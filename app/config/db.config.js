module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "root",//postman open madi  
    DB: "TESTDB",//db change madthiya nodu
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};