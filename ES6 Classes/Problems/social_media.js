/*
Problem statement
You are tasked with developing a social media platform where users can create accounts, make posts, and interact with those posts. 
Your goal is to implement the necessary classes and functionalities to fulfil the requirements of the platform.

Objective:
User Class:

1- The User class should have the following private properties.
- name (string)
- email(string)
- password(String)
- posts (an array of posts)

2- It should have a constructor method that accepts name, email, and password as parameters 
    and initializes them accordingly, and it should also initialize posts with an empty array.
3- Implement getters and setters for name, email, and password properties.
4- The User class should have the following methods
addPost: This method should take a post object as a parameter and add it to the posts array. 
    This represents a user creating a new post on the platform.
deletePost: This method should take a post object as a parameter and remove it from the posts array. 
    This represents a user deleting one of their posts from the platform.
displayPosts: This method should display a list of titles for all posts currently in the posts array. 
    The titles should be printed to the console, showing what the user has posted.

Post Class:

1- The Post class should inherit from the User class.
2- It should have the following private properties
- title(String) 
- content (string)
- date (String)
- likeCount (number)
3- The constructor method should accept the owner's name, email, password, title, content, 
    and date as parameters and initialize the properties accordingly. 
    It should initialize the likeCount with 0.
4- Implement getters and setters for title, content, date and only getter method for likeCount properties.
5- The Post class should have the following method
addLike: This method should increment the likeCount of the post by 1 each time it is called.
displayDetails: It should print the post'd details inheriting from the User class in 
    key-value pair which includes the owner's name, title, content, date, and likeCount.

Note:-
The name of the getter setter should be the name of the property it is accessing or modifying.
For eg, The name of the getter and setter for the property name should be "name".
Please refer to the scaffold for the expected output.

Hints:
When implementing getters and setters, make sure the getter returns the value of the private property, and the setter allows modification of that property.
In the User class, the addPost(post) method should use the push() method to add a post to the posts array.
Similarly, the deletePost(post) method should use the filter() method to remove a specific post from the posts array. This will help you ensure that only the correct post is removed from the array.
The displayPosts() method in the User class should loop through the posts array and log the title of each post to the console.
In the Post class, use the super() method in the constructor to call the parent class (User) constructor and initialize the inherited properties like name, email, and password.
In the Post class, the displayDetails() method should display the details of the post, including the owner's name (inherited from User), the post's title, content, date, and likeCount.

*/

// const { use } = require("react");

//Do not alter the starter code.
function main(){
//Create your class "User" here with all the properties and methods
class User{
  
  // private properties
  #name;
  #email;
  #password;
  #posts = [];

  // constructor method that accepts name,email,password;
  constructor(name,email,password){
    this.#name = name;
    this.#email = email;
    this.#password = password;
  }

  // getters and setters for name,email,password
  //  name
  get name(){
    return this.#name;
  }
  set name(userUpdateName){
    this.#name = userUpdateName;
  }

  // email
  get email(){
    return this.#email;
  }
  set email(userUpdateEmail){
    this.#email = userUpdateEmail;
  }

  // password
  get password(){
    return this.#password
  }
  set password(userUpdatePassword){
    this.#password = userUpdatePassword;
  }

  addPost(post){
    // Post.call(this,title);
    this.#posts.push(post.title);
  }
  deletePost(post){
    this.#posts = this.#posts.filter()
  }

  // displayPost
  displayPosts(){
    // for(let post : User.#posts){
    console.log(`Posts by ${this.#name}:`);
    for(let post in this.#posts){
      console.log(`- ${this.#posts[post]}`);
    }
    
  }
}
//Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
  // Post class
  class Post extends User{
    // private properties
    #title;
    #content;
    #date;
    #likeCount = 0;

    // constructor method should accept the owner's name, email, password, title, content, 
    // and date as parameters and initialize the properties accordingly. 
    constructor(name,email,password,title,content,date){
      super(name,email,password);
      this.#title = title;
      this.#content = content;
      this.#date =date;
    }

    // getters and setters for title,content,date
    // title
    get title(){
      return this.#title;
    }
    set title(newTitle){
      this.#title = newTitle;
    }

    // content
    get content(){
      return this.#content;
    }
    set content(newContent){
      this.#content = newContent;
    }

    // date
    get date(){
      return this.#date;
    }
    set date(newDate){
      this.#date = newDate;
    }

    // getters for likeCount
    get likeCount(){
      return this.#likeCount;
    }

    addLike(){
      this.#likeCount = this.#likeCount + 1;
    }

  // displayDetails method
  displayDetails(){
    // User.call(this);
    console.log(`Owner : ${this.name}\nTitle : ${this.title}\nContent : ${this.#content}\nDate : ${this.#date}\nLikes : ${this.#likeCount}\n `)
  }

  }
  const user1 = new User("John", "john@example.com", "password123");
  const post1 = new Post(
    "John", 
    "john@example.com",
    "password123",
    "My first post",
    "Lorem ipsum dolor sit amet",
    "2021-01-01"
  );
  const post2 = new Post(
    "John", 
    "john@example.com",
    "password123",
    "My second post",
    "Consectetur adipiscing elit",
    "2021-01-02"
  );
  
  user1.addPost(post1);
  user1.addPost(post2);
  
  post1.addLike();
  post1.addLike();
  
  user1.displayPosts();
  // Output:
  // Posts by John:
  // - My first post
  // - My second post
  
  post1.displayDetails();
  // Output:
  // Owner: John
  // Title: My first post
  // Content: Loremipsum dolor sit amet
  // Date: 2021-01-01
  // Likes: 2
  post2.displayDetails();
  return {User,Post};
}
main();