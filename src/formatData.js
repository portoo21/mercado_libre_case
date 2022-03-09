
const taskListRegex = /([A-Za-z0-9]+\.exe)/g;

module.exports = function (data) {
    const procInfo = data.procInfo.split(";;;")[1].split(/\s{2,}/)
    let processes = [...data.taskList.matchAll(taskListRegex)].map((x) => x[0])
    processes = [...new Set(processes)];
    const osVersion = data.osVersion.split(";;;")[1].split(/\s{2,}/)
    const currentUser = data.currentUser

    return {
        processorFamily: procInfo[0],
        procesorName: procInfo[3],
        cores: procInfo[4],
        processList: processes,
        osName: osVersion[0],
        osVersion: osVersion[1]
    }
}