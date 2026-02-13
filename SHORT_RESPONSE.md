# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim. 

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content). 

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**

"Synchronous" code runs sequentially, meaning we have to wait for the previous line of code or function to finish running before moving forward. "Asynchronous" code executes in a non-blocking way. It will start a process that takes time to complete, but it will not prevent the rest of the synchronous code from running. 

This is important because an application might need to get data from an API. The process will not be instantaneous, as it can be affected by several factors like internet connection speed. By using asynchronous code, we ensure that our asynchronous code doesn't collide with the synchronous code, break the application, or cause unexpected behavior.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**

`GET` and `POST` are HTTP methods that support CRUD (create, read, update, delete) operation. Here's the difference between `GET` and `POST`:
- `GET` is used to **retrieve** data an API's database.
- `POST` is used to request to **send and create** data in the API's database.

**Amazon.com**'s search bar uses the `GET` method to retrieve data from a database containing products using the user's search keywords. 

**Facebook** uses the `POST` method when a new user wants to create an account. The user provides all the required information, which is then sent to their database.

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**

**Vite** is a tool that offers programmers the ability to host their application locally and bundle the code for easier and faster deployment. 

When we open a file by dragging into a browser, it uses the `file://` protocol. This prevents programmers from using ES modules like `import` and `export` and from getting data from a **third-party APIs** due to same-origin policy and CORS (Cross-Origin Resource Sharing) restrictions.

**Vite** enables ES modules loading and fetching by hosting the application using the `http://` protocol. This complies with the same-origin policy, as the fetched data and our application hsare the same protocol.

Programmers can also use the **Live Server** extension in VS Code. However, it doesn't offer the **build** tool that **Vite** offers and doesn't work with React projects.
