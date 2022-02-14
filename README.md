# flx1-js-2-debrief

1. This link contains instructions for completing #1:  https://docs.google.com/document/d/1ACw6ILG_rk66ukkkS_84LWiH63hovGnEOKPNtcvRGlg/edit?usp=sharing

2. GenBuzz 
   * Using the Instructions below, write a function that prints numbers from 1 to an upper limit. That upper limit should be passed into your function as an argument.
    *   Ex. genBuzz(15) should print the genBuzz pattern described below from 1 to the upper limit of 15.
   * Instructions: For numbers from 1 to an upper limit (inclusive), print 'Gen' to the console if the number is a multiple of 3, print 'Buzz' if it is a multiple 5, print 'GenBuzz' if it a multiple of both 3 and 5. Otherwise, print the number to the console. Be sure to check that number your `upperLimit` is of type `number`.

3. E-Commerce Item list
    * Use the requiremets below to create a function that takes in an item and prints the price to the console.
    * Use a swtich statement to print the price of the each item in the store to the console.
    * Ex. `itemList('shoes')` should print `Shoes are $50` to the console

    Items: 
     * Shoes- $50
     * Jeans- $25
     * Hat- $12
     * Socks- $2
     * If the function input is not an item in the store, then print 'Invalid Item' to the console.



## Part 1 - Fork and Clone the project

* Begin by _forking_ this project into a personal repository.
   * To do this, click the `Fork` button located at the top right of this page.
* Navigate to your github profile to find the _newly forked repository_.
* Clone the repository from **your account** into the directory on your computer that you use to keep your projects (ex. `dev` directory).
    - Remember this from the lessons on Git and Github?
        - Go to the green `Code` button in the top right of this repository
        - Select `https` and then COPY that url
        - Open Git Bash on your computer, `cd` to a directory where you wish to save this assignment to work on
        - Type `git clone ` followed by the URL you copied from Github
        - `cd` into the repository for this assignment that you have just cloned.
* Open the newly cloned project in a code editor (ex. Visual Studio Code). 

### Part 2 - Edit the _cloned_ project

* from a text editor (i.e. - Visual Studio Code, Notepad ++, etc...), select:
  * `File` > `Add Folder to WorkSpace`
    * Select the directory you use to store your projects (ex. `dev` directory) 
    * From the text editor,in the directory you use to store your projects (ex. `dev` directory), locate the newly cloned project folder.
    * Expand the project from the _project explorer (may just be called `explorer`)_
    * Modify the `app.js`file to complete the assignment.
    

### Part 3 - _Pushing_ new changes to repository

* From a _terminal_ navigate to the root directory of the _cloned_ project.
* From the root directory of the project, execute the following commands:
    * `git add .`
        * Add all files in current directory to the staging area       
    * `git commit -m 'I have made an edit to a file!'`
        * Save all staged changes to local repository
    * `git push -u origin main`
        * Push changes from local repository to remote repository

### Part 4 - Submitting assignment

* From the browser, navigate to the _forked_ project from **your** Github account.
* Click the `Pull Requests` tab.
* Select `New Pull Request`