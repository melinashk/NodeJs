## IndexedDb

indexedDB is a client-side storage mechanism that allows web applications to store and retrieve data in the browser. It is supported by most modern web browsers, including Chrome, Firefox, and Edge.

Creating a database: You can create a database by calling the indexedDB.open() method and passing in a name for your database. This will create a new database or open an existing one if it already exists. The method returns an instance of the IDBDatabase object, which represents the database.
```js
let db;
const request = indexedDB.open('myDatabase', 1);

request.onerror = function(event) {
  console.log("Database error: " + event.target.errorCode);
};

request.onsuccess = function(event) {
  db = event.target.result;
  console.log("Database opened successfully");
};
```

Creating object stores: Once you have a database instance, you can create one or more object stores to store data. An object store is similar to a table in a relational database and contains a collection of data items. You can create an object store by calling the createObjectStore() method on the database instance.

```js
const objectStore = db.createObjectStore('users', { keyPath: 'id' });

```

In this example, we create an object store named "users" and specify that the "id" property should be used as the key path.

Adding data: To add data to an object store, you can use the add() or put() method on the object store instance. The add() method adds a new item to the store, while the put() method updates an existing item or adds a new item if it doesn't already exist.
```js
const transaction = db.transaction(['users'], 'readwrite');
const objectStore = transaction.objectStore('users');

const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
const request = objectStore.add(user);

request.onerror = function(event) {
  console.log("Error adding user: " + event.target.errorCode);
};

request.onsuccess = function(event) {
  console.log("User added successfully");
};

```
In this example, we create a new user object and add it to the "users" object store.

Retrieving data: To retrieve data from an object store, you can use the get() method on the object store instance. The get() method takes a key value as its parameter and returns the corresponding item.
```js

const transaction = db.transaction(['users'], 'readonly');
const objectStore = transaction.objectStore('users');

const request = objectStore.get(1);

request.onerror = function(event) {
  console.log("Error retrieving user: " + event.target.errorCode);
};

request.onsuccess = function(event) {
  const user = event.target.result;
  console.log("User retrieved successfully:", user);
};

```