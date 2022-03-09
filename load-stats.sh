#!/bin/bash

# Get processor info
PROC_INFO=$(wmic cpu get caption, deviceid, name, numberofcores, maxclockspeed, status | tr '\r\n' ';')
# Get task lsit
TASK_LIST=$(tasklist | tr -d '\r\n')
# Get os name and version
OS_VERSION=$(wmic OS get caption,version | tr '\r\n' ';')
# Get current user
CURRENT_USER=$(whoami | tr -d '\r\n')

DATA="{ \"procInfo\": \"$PROC_INFO\", \"taskList\": \"$TASK_LIST\", \"osVersion\": \"$OS_VERSION\", \"currentUser\": \"$CURRENT_USER\" }"

generate_post_data()
{
  cat <<EOF
{
  "procInfo": "$PROC_INFO",
  "taskList": "$TASK_LIST",
  "osVersion": "$OS_VERSION",
  "currentUser": "$CURRENT_USER"
}
EOF
}

#echo "$(generate_post_data)"

curl -v -X POST -H "Content-Type: application/json" --data "$(generate_post_data)" http://localhost:3000/send-stats
