const path = require("path");
const fs = require('fs');

module.exports = function (data, ip, date) {
    try {
        const fileName = ip + "_" + date.toISOString().split("T")[0]
        const fullPath =  path.join(path.normalize(path.join(__dirname, '..')), "reports", fileName + ".csv");
        if (!fs.existsSync(fullPath)) {
            fs.writeFileSync(fullPath, "processorFamily,procesorName,cores,process,osName,osVersion\r\n")
        }

        data.processList.forEach(process => {
            fs.appendFileSync(fullPath, `${data.processorFamily},${data.procesorName},${data.cores},${process},${data.osName},${data.osVersion}\r\n`)
        }) 
    } catch(err) {
        console.error(err)
    }
}