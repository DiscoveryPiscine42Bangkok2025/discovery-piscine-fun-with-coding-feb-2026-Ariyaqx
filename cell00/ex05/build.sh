#!/bin/bash

# ตรวจสอบว่ามี argument ส่งเข้ามาหรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # วนลูปสร้าง folder ทีละตัว
    for arg in "$@"
    do
        mkdir "ex$arg"
    done
fi