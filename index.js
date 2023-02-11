const schedule = require('node-schedule')


//At particular date and time
const someDate = new Date('2023-02-11T13:34:00.000+5:30')

// schedule.scheduleJob(someDate, ()=>{
//     console.log('Job ran @', new Date().toString())
// })

//At recurrence interval

// schedule.scheduleJob('m-job','*/7 * * * * *', ()=>{
//     console.log('I will run after every 7sec ...');

//     // to cancel the job schedule.cancelJob('m-job')
// })

const mjob = schedule.scheduleJob('*/7 * * * * *', ()=>{
    console.log('I will run after every 7sec ...');

    mjob.cancel()
})