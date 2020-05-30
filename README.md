# knowledge
A convention-over-configuration knowledge storage web app

# Setup
`npm install && cd client/ && npm install `

`cp config/dev.env.example config/dev.env`

Replace the example environment variables with your own.

To setup MongoDB, follow this guide: https://docs.mongodb.com/manual/installation/

In terminal, run: 

`[PATH_TO_DIRECTORY_WHERE_MONGODB_FOLDER_LIVES]/mongodb/bin/mongod --dbpath=/Users/[NAME]/[PATH_TO_DIRECTORY_WHERE_MONGODB_FOLDER_LIVES]/mongodb-data`

The above command actually starts your database. For example, since my mongodb folder is in the Documents directory of my computer, to start my MongoDB, I run: 

`Documents/mongodb/bin/mongod --dbpath=/Users/SamBrownstone/Documents/mongodb-data`

By default, your MongoDB db will run on the following URL: 
`mongodb://127.0.0.1:27017/`

When you include this URL in your environment variables, you'll want to include a collection name at the end of that URL, to tell your data where to go. You can choose whatever database name you want. For example, I use knowledge (i.e. `mongodb://127.0.0.1:27017/knowledge`). This means that any CRUD operations the API performs create collections (e.g. users, docs) in a parent database of `knowledge`.

You may also want to install some sort of GUI for seeing your data. I like MongoDB Compass: https://www.mongodb.com/download-center/compass

To connect to your local MongoDB on Compass, type CMD+N, and enter `localhost` for Hostname, and `27017` for port, then connect.

# Run
Frontend: `cd client/ && npm run start`
Backend: `npm run dev`