const cron = require("node-cron");


//At particular date and time
// const someDate = new Date('2023-02-11T1:21:00.000+5:30')

// schedule.scheduleJob(someDate, ()=>{
//     console.log('Job ran @', new Date().toString())
// })

//At recurrence interval

// schedule.scheduleJob('m-job','*/7 * * * * *', ()=>{
//     console.log('I will run after every 7sec ...');

//     // to cancel the job 
//     schedule.cancelJob('m-job')
// })

// const mjob = schedule.scheduleJob('*/7 * * * * *', ()=>{
//     console.log('I will run after every 7sec ...');

//     mjob.cancel()
// })


const events = [
    { text: "event 1", dateTime: "* * * * *" },
    { text: "event 2", dateTime: "* * * * *" },
    { text: "event 3", dateTime: "* * * * *" },
    { text: "event 4", dateTime: "* * * * *" },
    { text: "event 5", dateTime: "* * * * *" },
    { text: "event 6", dateTime: "* * * * *" },
    { text: "event 7", dateTime: "* * * * *" },
    { text: "event 8", dateTime: "* * * * *" },
    { text: "event 9", dateTime: "* * * * *" },
    { text: "event 10", dateTime: "* * * * *" }
];

async function runEvents(events) {
    for (const event of events) {
        await triggerFunction(event.text);
    }
}

async function triggerFunction(text) {
    await sleep(text.length * 1000);
    console.log(text.split("").reverse().join(""));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

cron.schedule("* * * * *", () => {
    runEvents(events);
});
