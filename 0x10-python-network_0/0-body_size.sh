#!/bin/bash
# Script displays size of content-length
curl -sI "$1" | grep -i Content-Length | awk '{print $2}' | tr -d '\r'

