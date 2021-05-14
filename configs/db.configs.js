const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}`);
})
.catch((err) => console.error('Error connecting to mongo ', err));