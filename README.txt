Welcome to Momint technical test.

We have designed this test in such a way that it shouldnt take up too much time, but addresses unique problems that cannot be easily taken off the internet.
What we are looking for in your submission will be:
1. Code quality, structure and readability
2. Speed of output
3. Given a lack of context, the ability to figure it out and addressing accordingly

What is in this momo-repo:
- An image depicting how the front-end should look
- An 'Front-end' directory containing a default Ionic application, please see Ionic for more info
- A 'Api' Node.js/express folder with server Code
- JSON files to insert into your local MongoDb instance, in a 'users' collection

Your task:

##Upload
1. In the app directory, find the home page and modify it to emulate the app image provided
2. Write javascript and appropriate node.js code to facilitate the upload of filetypes, strictly: ['jpeg', 'mp4', 'webm' ];
3. Compress those filetypes accordingly (using libraries or any solution you feel best) - return in the SAME format but compressed
4. Send the compressed file back to the device

##Query
1. Write functionality to request data from the Api on the frontent
2. Write a query wich will fetch all followers for a user (MainUser)  
    2.1 Each user in the user table should have an array of ID's representing the users that they follow
    2.2. You need to find all users where the MainUser ID is in their following Array 
    2.3. eg. Bob wants to see who follows him, Jane and Joe have followed Bob, and therefore have his user ID in their followers array
    2.4. Performance is impoortant here (imagine 100 000+ queries)
3. Return this data in simple JSON format; console.log 

##Setup
- Download and install MongoDb (recommend using Mongo Compass)
- clone repo
- `npm i` in each respective folder (front-end, Api)
- `npm run dev` in the Api folder
- `ionic s` to serve the Ionic front-end
