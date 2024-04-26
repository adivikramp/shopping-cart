NOTE: You have to add command "npm i" or "npm install" before running the program in your local environment.

you need to run npm i in the root directory as well as the shopping-cart folder

NOTE You should create a new file named as ".env" and create a variable named "SECRET_KEY".

"SECRET_KEY" variable will contain the stripe private key which you can obtain from your stripe API Keys section.

Inside the shopping-cart folder, go to data folder and open products.js. It contains the list of items with their own unique ids. In your stripe account, you will have to add the products by adding the name and price manually which will generate id for each product. Now change the ids according to your own generated ids.

Everything is set. You can now use the command "npm run start" in two seperate terminals , one for backend and other for frontend and the website will work.
