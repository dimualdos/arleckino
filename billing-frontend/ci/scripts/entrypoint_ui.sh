#!/bin/sh
cd pc
SRC=staging
[[ $CI_COMMIT_BRANCH == 'master' ]] && SRC=master
sed -i "s/staging.arlekino/$SRC.arlekino/g" .env.production
rm -rf node_modules
npm i
npm run build
