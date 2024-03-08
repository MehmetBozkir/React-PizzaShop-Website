# My Makefile 

# Target: Installs project dependencies
install:
    npm install

# Target: Compiles the project
build:
    npm run build


# Target: Runs tests
test:
    npm test

# Target: Starts the project
start: install
    npm start


# Target: Cleans everything and rebuilds
rebuild: clean install build

# Target: Runs the project in development mode
dev:
    npm run dev