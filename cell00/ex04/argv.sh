#!/bin/bash

# ตรวจสอบว่าจำนวน argument ($#) เท่ากับ 0 หรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # วนลูปแสดง argument ทั้งหมดทีละตัว ($@)
    for arg in "$@"
    do
        echo "$arg"
    done
fi