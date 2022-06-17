Hi This is a CRUD API TODO app.
We can: 
  * Create a Todo
  * Read a Todo
  * Update a Todo
  * Delete a Todo
But to do all of it, you need to be authorized first. I've implemented a jwt authorization in this app. 
To use the app. Firstoff hit the get route for login. GET (/login). 
It creates a JWT token. This token should be used in Headers of the CRUD request. 
'authorization' = <JWT Token>
  
Attached are the screenshots of the requests in POSTMAN along with the response.
 
* GET Request for JWT Authorization: ![image](https://user-images.githubusercontent.com/36265605/174309731-40d7feaf-e37e-4164-9a4f-f0114e421069.png)
* POST Request to Create a Todo: ![image](https://user-images.githubusercontent.com/36265605/174309804-a2dfc762-4d70-4387-a38e-75d8abc3665f.png)
* GET Request to Read all Todos: ![image](https://user-images.githubusercontent.com/36265605/174309859-b413d23d-e732-4146-9b32-cc920f776475.png)
* PUT Request to Update a Todo: ![image](https://user-images.githubusercontent.com/36265605/174309897-44cd0ffa-8893-45a2-96f6-228cff1edffb.png)
* DEL Request to Delete a Todo: ![image](https://user-images.githubusercontent.com/36265605/174309925-f9166ebf-a4cd-4919-907e-84f1f620c4fa.png)
If in a case any of these api end-points are accessed without authorization we get: ![image](https://user-images.githubusercontent.com/36265605/174309977-3ab89ec6-9ebd-4572-93ee-c9279df37a0b.png)
