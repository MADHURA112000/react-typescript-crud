# react-typescript-crud
# CRUD_reactjs_ts

TO run project, use
yarn start or npm start in project directory.

## TODO Operations
1. Add TODO
2. Update TODO
3. Delete TODO

## Used following components

 1. In App.tsx component, created arrays for the addition,updation and deletion of the List array.
    List datatype is declared with unique id and string to take input from user.
      Used UUID library to create unique id for each input added.
  2.Used useState hook to preserve current state of component instead of writing class component.
  3. Created component to add new todo in the list using addList formporops created and used useState hook.
  4. Created component to update the list by comparing id of previously stored todo with the id gathered from useState hook by clicking update button.
  5. Created component to delete the item from list.
