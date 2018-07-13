Lesson Challenge
Read these articles: Redux Thunk, Why do we need middleware for async flow in Redux?, and Understanding how redux-thunk works. Answer the following questions and share your answers with your classmates:
https://medium.com/@gethylgeorge/understanding-how-redux-thunk-works-72de3bdebc50
https://github.com/redux-saga/redux-saga

1) Why do we use middleware to perform asynchronous tasks in Redux apps?
  We'll need to separate the logic UI and the logic server. For a scalable App and maintnaible App it's important.
  However for a small project, we can use componentDidMount to send a promises asynchrone, 
  but in a bigger app separate the logic is more interressing.
  A compoment it use only for the vue and not to call aynchronously a database.


2) How do we use redux-thunk to make API requests in Redux apps?
  We use through a middleware, redux-thunk allow us to use an action creator with an function returned and not only an object.
  the method will return a function with a parameter dispatch, implementation example:
  ```function handleBtn(goal) {
    return (dispatch) => {
       Promise.all([
         API.goal()
       ]).then(( goals ) => {
         dispatch(btn(goals)) // dispatch the action
       })
    }
  }```


