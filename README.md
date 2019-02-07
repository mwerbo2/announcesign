
# AnnounceSign

## Background

An easy to use, annoucement creating, updating and scheduling tool. 

### Tech Stack
* Mongodb
* Express
* React
* Node.js 

With other libraries and packages:

* TinyMCE
* OAuth
* Passport

### User Stories
As a user I want to be able to login using my Google Account

As a user I want to be able to create a posting using the WYSIWYG editor

As a user I want to be able to set a date and time for when this posting should display

As a user I want to be able to set a interval for when it can repetitively show

As a user I should be notified if the post I am creating is unable to be posted due to space or time conflicts.

### Mockups
#### Login 
![Login](https://i.imgur.com/yX3J0af.png)
#### Create / edit annoucement with live preview
![Create Display V1](https://i.imgur.com/gcP3SJx.png)
#### Create / edit announcement without preview
![Create Display V2](https://i.imgur.com/vl1JUWS.png)
#### Live display
![Display](https://i.imgur.com/w3MQxJJ.png)
#### Profile / announcement listing 
![Post Display](https://i.imgur.com/5VipkPH.png)
#### Editing announcement within profile 
![Post Display](https://i.imgur.com/9q6lXJd.png)

### Data Model
![Data Model](https://i.imgur.com/DpKYoOC.png)


### Routing

#### User routes
| Path | HTTP Action | SEQUELIZE CRUD | SQL | 
| -----| ---- | ----| ----- |
| /users | GET | 
| /users/:id | GET |

#### Announcement routes
| Path | HTTP Action | SEQUELIZE CRUD | SQL | 
| -----| ---- | ----| ----- |
| /announcements | GET | 
| /announcements/:id | GET |
| /announcements| POST |
| /announements/:id/edit | GET
| /announcements/:id | PUT
| /announcements/:id | DELETE


### Sprint plan

User story|points
----------|------
[tasks/user story 1] | 1
[tasks/user story 2] | 3
[tasks/user story 3] | 1 