#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

install() {
    sudo apt-get install -y build-essential
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt install -y nodejs
}

usage() {
    echo "i) install requirements"
    echo "Usage $0 [i]"
    exit 1
}

case "$1" in
    i)
        install
        ;;
    *)
        usage
        ;;
esac