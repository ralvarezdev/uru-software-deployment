#!/bin/bash
echo "Connecting to Linux Server..."
echo "Username: admin"
echo "Host: $1"
echo "Port: $2"
ssh -p $2 -i ./.ssh/linux_server_rsa admin@$1