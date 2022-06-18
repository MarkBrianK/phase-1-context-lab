function createEmployeeRecord(record){
    let object = new Object()
    object.firstName = record[0]
    object.familyName = record[1]
    object.title = record [2]
    object.payPerHour = record[3]
    object.timeInEvents = []
    object.timeOutEvents = []
    return object
}
function createEmployeeRecords(array){
    let employeeRecords = []
    array.forEach(elem => {
        employeeRecords.push(createEmployeeRecord(elem))
    })
    return employeeRecords
}
function createTimeInEvent(time){
    let newTime = time.split(" ")
    this.timeInEvents.push(new Object({
        type : "TimeIn",
        date : newTime[0],
        hour : parseInt(newTime[1])
    }))
    return this
    
}
function createTimeOutEvent(time){
    let newTime = time.split(" ")
    this.timeOutEvents.push(new Object({
        type : "TimeOut",
        date : newTime[0],
        hour : parseInt(newTime[1])
    }))
    return this
    
}


let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}