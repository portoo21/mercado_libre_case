# Pre-requisites
Node 12+

## Install dependencies
npm install

# Run project
npm start

# Execute script to Get server info (only on windows using git bash)
./load-stats.sh

# Check reports
Reports are generated in the /reports folder

# Troubleshooting

## Add execution permission
chmod +x load-stats.sh


## Request example
```
{
  procInfo: 'Caption                              DeviceID  MaxClockSpeed  Name                                     NumberOfCores  Status  ;;;AMD64 Family 25 Model 80 Stepping 0  CPU0      3301           AMD Ryzen 9 5900HX with Radeon Graphics  8              OK      ;;;;;;',
  taskList: 'Image Name                     PID Session Name        Session#    Mem Usage========================= ======== ================ =========== ============System Idle Process              0 Services                   0          8 KSystem                           4 Services                   0      3,332 KRegistry                       240 Services                   0     47,912",
  osVersion: 'Caption                    Version     ;;;Microsoft Windows 11 Home  10.0.22000  ;;;;;;',
  currentUser: 'portoo'
}
```
