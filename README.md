# covidapi-admin

Desktop admin for https://covid19mm.info

## Clone First

If you're using `npm`, feel free to replace `yarn` with `npm run`.

I suggest you to install both.

``` shell
git clone --recursive https://github.com/chawsuthwe/covidapi-admin
cd covidapi-admin
git submodule init
git submodule update
cd frontend/
git pull origin master
```

## Development

``` shell
# install electron package dependencies
yarn

# install frontend dependencies
cd frontend && npm install
# start node dev server
node app.js

cd ../
# start electron dev
yarn dev
```

## Building

``` shell
# build frontend
cd frontend/ && npm run build
cd ../
# build electorn
yarn build
```

## Template Description

- admin site ui => `frontend/`
- electron codes => `src/`

