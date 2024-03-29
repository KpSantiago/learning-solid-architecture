# Learning SOLID

**What is _SOLID_?** SOLID is a software architecure model, it's an acronym for the first five object-oriented design principles intended to make object-oriented design more understandable, flexible and maintainable. Created by software engineer Robert C. Martin, the SOLID is a subset of many principles promoted by his.

**Explaning the SOLID acronym**
- **_S(Single responsability principle)_:** it determines that each class and files of our application must have only one responsabilty, only one task.
- **_O(Open closed principle)_:** it defines that a class must be open to extentions, but not to be open to modifications.
- **_L(Liskov substitution principle)_:** it says that we can change the implementation of a class whitout change the business rule of the class or her funcionalitys.
- **_I(Interface segregation principle)_:** it says that we can't create robust interfaces, but dividing them in others interfaces.
- **_D(Dependency iversion principle)_:** it says that the class of our application must not to depend of implementations but rahter on interfaces.

## Project example
This project, basically, is an API REST, whitout database, that save a user register in the "database" and send a e-mail with some massage to him. This project is only to traine and learning the SOLID architecture.

**Project structure**
- **_src_:** where all our application will stay.
- **_app.ts_:** where we configure the app.
- **_server.ts_:** where we initialize the app
- **_entities_:** where all our entities(models) will stay.
  - **obs:** A entitie not always will be relationed with a table of a database.
- **_repositories_:** is where all our classes that do comunication with the database will stay.
- **_use-cases_:** is where the actions that we users can do with our database will stay. For example, the creation of a new user.
- **_providers_:** directory where stay external dependencies, all that are not on our application.

**Functionalities**
- **_Save_** a user, **_find_** a user by his e-mail, if he already exists in the database, and **_send a email_** to user saying **"Welcome to our company"**

**Technologies**
- Node.js
- Express.js
- Nodemailer
- Typesrcipt
- Vitest
- MailTrap