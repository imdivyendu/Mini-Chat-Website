const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChat = [
    {
        from: "neha",
        to: "preeti",
        message: "give me notes of class",
        created_at: Date()
    },
    {
        from: "rahul",
        to: "preeti",
        message: "teach me js callback",
        created_at: Date()
    },
    {
        from: "manti",
        to: "dibyendu",
        message: "khelega free fire",
        created_at: Date()
    },
    {
        from: "dibyendu",
        to: "manti",
        message: "Shut up! stupid, Go to the bed and Study WebDev",
        created_at: Date()
    }
];

Chat.insertMany(allChat);