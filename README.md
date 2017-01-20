# Blogmon
### a blog built with Rails and Ember, by Joel

![front page](http://i.imgur.com/StfqV7H.png "Front-Page")

## Links to Repositories and Deployed Sites in this full stack web application

- front-end repository -- you're currently viewing https://github.com/jbuzzanco/blogmon
- back-end repository https://github.com/jbuzzanco/back-end-blogmon
- front-end github-pages https://jbuzzanco.github.io/blogmon
- back-end heroku https://blogmon-portfolio.herokuapp.com/


## Technologies Used
- HTML5
  - the structure of webpage
- SASS
  - the style of webpage
- Ember
  - the routing and views of webpage
  - Handlebars
    - part of Ember :) that allows for Javascript objects embedded with HTML
- JavaScript
  - the behaviour and interaction with webpage
- Ruby on Rails
  - Supports and constraints the front-end in order to work as expected


## Approach towards building this Blog application

The approach that I took, started off with wireframing, and looking at other blogs to get
some inspiration for what I wanted my application to look be laid out like. Then I began writing
some user stories in order to better map out what I wanted my application to do.

Upon having user stories and rough wireframes, I didn't waste time to get started building. I began to build
out the backend with Ruby on Rails, taking full advantage of the Rails command line to generate scaffolds, and routes,
which is one reason why I chose rails, is it's ability to generate from the command line, as this was an application
that needed to be built swiftly.

After having the back-end functional, I began with the client of the application. The client was built with ember.
As with rails commands, I began using Ember CLI commands from the command line in order to generate the
necessary resources and routes and components. I found it nice to be able to generate from the command line in order to know that
the files are named appropriately and in the correct location.

Ember is what took the majority of the time, as it was a new framework, and took some getting used to. Editing the generated routes and templates and components is the game from there. Ember is great for having different views on different routes, which
is what a lot of Web Development consists of in real production environments. Ember was a great framework to learn.


## User stories
- [x] As a authenticated user/admin I can create blogs.
- [x] As a authenticated user/admin I can edit blogs.
- [x] As a authenticated user/admin I can delete blogs.
- [x] As a authenticated user/admin I can view blogs.
- [x] As a visitor, I can view blogs
- [ ] As a authenticated user/admin I can view comments (improvement).
- [ ] As a visitor, I can comment on blogs (improvement)
- [ ] As a visitor, I can view comments on blogs (improvement)
- [ ] As a authenticated user/admin I can create comments. (improvement)

## ERD
- [Sketch of Entity Relationship Diagram](http://imgur.com/8787D7p)



## Wireframes/ sketches

- [blog posts sketch](http://imgur.com/jvqc2Pw)
- [blog post individual sketch](http://imgur.com/LmKizOD)
- [comments section sketch](http://imgur.com/kCttsWM)

## Further Polishing, and troubles in development stage


A big trouble was learning how the hierarchy of ember works, and to generate components and how the relate to the resources, all within a week's time. It was intense learning and implementing Ember in such a small amount of time
Also generating an application adapter from the command line took some time to figure out what was going wrong, before realizing it got rid of importing ember!

As it can be improved, as with all software and websites. I would like to have styling be better. With formatting, colors, fonts. Also, I would like to
have an excerpt section from the body of the blog post that sticks out in bigger font for creative design.
