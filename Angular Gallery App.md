Demo Application
================
 
Create an image gallery application that allows a user to view, comment, and manipulate a set of images.
 
App Requirements
----------------
- Display a series of thumbnail images together on the screen.
- There should be a "work area" where an image (thumbnail) can be clicked on and brought into focus as a larger image.
- The thumbnail area should highlight the currently active image.
- The application should contain component routing, meaning I should be able to enter the image id in the route
  and have the image directly in the workspace. Example: `http://localhost:8000/image/123`. This would display
  image with ID `123`. Note the thumbnails should be visible at all times. Don't forget to handle unknown routes.
 
### Workspace Requirements
 
- The workspace should limit how large the image actually displays. For instance, don't let the image exceed 500px x 500px.
  Use whatever threshold you think looks good.
 
#### Comments
 
- Each image should have a comments section where a user can add a comment or see other comments.
- The comments only need to be a single level deep, meaning there is no need to add replies to comments.
- A comment is composed of text, a date-time, and a user name.
- The date and time of the comment should be formatted when display (any human readable format).
- After a user submits a new comment, save it to the server (This doesn't need a backend. Just make an AJAX call to a dummy URL).
- The comments should also persist in memory as well, meaning I should be able to navigate between images and see
  comments that I have already left.
- Validate that the user entered a user name and that the comments are not empty before submitting.
 
#### Orientation
 
- Add a button that will rotate the image 90 degrees at a time (any direction).
- Each press will rotate the image another 90 degrees. Example: If the image is currently rotated 90 degrees
  then the next press will rotate it to 180 degrees.
- The orientation should persist with the image data, meaning I should be able to navigate between images
  and the orientation should be the same as when I last modified it.
- You don't need to actually modify the image data (with canvas). Just rotate the image and persist the state.
 
Technical Requirements
----------------------
- Use your github account and create a repository. Name it whatever makes sense to you.
  You are not limited on the number of commits.
- Use Angular 1.5.x.
- Use angular component router or ui-router. Whichever you prefer.
- You can use es2015 with babel or TypeScript.
- You can use any module bundler you choose
- You can use any libraries you want so long as you
  - **Do not** use other angular components (3rd party).
  - **Do not** use a generator or skeleton project. We would like you to build this from scratch.
- We must be able to checkout and build/run your application
 
What we are looking for
-----------------------
 
- Application structure (Use of services, controllers, etc...)
- JavaScript best practices
- Clarity / readability
- Separation of concerns
- Reasonable error handling
- Reasonable commenting you would expect a good developer to leave for future maintainers
- Adherence to a consistent style guide of your choice, or just your own consistent naming / structure / organization.
- Performance - If we add 100 images to your app, what happens? 1,000 images? 10,000?
 
What we are not looking for
---------------------------
 
- CSS is less important than the application code. We just want it to be
  useable. You don't need to spend time with animated transitions, fancy
  shading, etc etc.
- Excessive documentation / packaging. No need to create a MD doc / npm repo.
- Over engineering, use of local storage, analytics, specs, cookies use.
 
**If any of these requirements are unclear please let us know and we can clarify them for you. Requirements aren't always clear ;)**
