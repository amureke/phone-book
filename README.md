# Phone Book App

## Description

Phone book application with following features:

- Adding a record into database with “First Name”, “Last Name”, “Telephone” fields from manual data entry form
- Listing of all the records (possibly) currently (added but not deleted) in the database
- Listing of all the records (possibly) that match search criteria for “First Name”, “Last Name”, "Telephone"
- Deleting of the record from the database

## Requirements

Node.js and MySQL installed

## Installation and Usage on Local Machine

1. Clone the repo:

```
$ git clone https://github.com/amureke/phone-book.git
```

2. Install server-side dependencies:

```
$ npm install
```

3. Install client-side dependencies:

```
$ cd client
$ npm install
```

4. Build the app:

```
$ npm run build
```

5. Run the app:

```
$ cd ..
$ npm run start
```

The application should now run on <code>localhost:5000</code>

## Tech Stack

- React
- Sass
- Node/Express
- MySQL
