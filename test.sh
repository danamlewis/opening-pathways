#!/bin/bash

export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh

cd client;
nvm use;
npm run start-testing;