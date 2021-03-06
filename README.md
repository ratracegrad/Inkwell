[![Stories in Ready](https://badge.waffle.io/goose-windmill/family-thief.png?label=ready&title=Ready)](https://waffle.io/goose-windmill/family-thief)
[![Stories in Ready](https://badge.waffle.io/family-thief/family-thief.png?label=ready&title=Ready)](https://waffle.io/family-thief/family-thief)
[![Build Status](https://travis-ci.org/Goose-Windmill/family-thief.svg?branch=master)](https://travis-ci.org/Goose-Windmill/family-thief)

# InkWell

> A collaborative writing platform

## Table of Contents

1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Roadmap](#roadmap)
1. [Live Demonstration](#live demonstration)
1. [Screenshots](#screenshots)
1. [Contributing](#contributing)

## Usage

- Download and unzip the repository.
- Install [dependencies](#installing-dependencies).
- Rename /server/config/dbConfig.example.js to be dbConfig.js
- Edit dbConfig.js to point to a valid relational database (sequelize supports quite a few, see [this](http://docs.sequelizejs.com/en/latest/docs/getting-started/) page for examples and instructions on configuring the ORM)
- Rename /server/config/secret.example to secret and replace the content with a new secret string.  Try making it long and not comprised of discernable words.
- Start the server from the base directory with `node server\app.js`.

## Requirements

- Node 0.10.x
- MySQL, MariaDB, SQLite, PostgreSQL or MS SQL

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Database Schema

![relational schema](http://i.imgur.com/G078ktJ.png "Relational Schema")

## Live Demonstration
[You can view this app in production here](https://gw-inkwell.herokuapp.com)

## Screenshots
Home page for Inkwell
![Inkwell Home Page](http://www.jenniferbland.com/images/inkwellHomePage.png)

Inkwell Dashboard
![Inkwell Dashboard](http://www.jenniferbland.com/images/InkwellDashboard.png)

Inkwell Discover Project
![Inkwell Discover Projects](http://www.jenniferbland.com/images/InkwellDiscoverProjects.png)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
