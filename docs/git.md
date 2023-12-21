Setting up git and Github
=========================
Author: Dan Baker

This document will explain how to set up a git repository and the process for storing this repository on Github. It is not meant to be completely exhaustive (I'm definitely not an expert) and so you should suppliment whatever I write here with other documentation (I will not go into much detail about how git actually works.)

Set up git repository (repo)
---------------------

1. Initlialise repo

    Open a terminal (Command Prompt or PowerShell on Windows) and change directory ("cd") to the folder that contains the files you want to 'version control' and initlialise a new git repository:   

        
        cd ~/example-project  
        git init
        

2. Add files to the repo

    To add a single file called 'test.txt':

        git add test.text

    To add all 'changed' files within a folder (i.e. all of them for a new repo):

        git add .

3. Commit files/changes to the repo

        git commit -m "description of commit"

    You can write a description of the commit using the '-m' flag. 


4. Make a new branch for a feature

    To avoid 'experimenting' on the main branch of a repo, you should make another experimental branch for testing and then merge it back into main when everything works correctly. 

        git checkout -b <new-branch>
        # do a load of stuff 
        git checkout main # if main branch is called 'main'
        git merge <new-branch>


5. Rolling back to a previous commit hash


    If you make a mistake, you can revert to a previous commit. To list all the commits associated with a repo, you can look at the log: 


        git log --oneline

    You can then copy the hash of the commit you want to roll-back to and 'reset' the repo to this commit instead:

        git reset --hard <commit-hash>

    The '--hard' flag also resets the history of the repo so that the 'unwanted' commit will no longer show up in the log. If you did this by mistake you can still get it back by finding the deleted commit hash using:


        git reflog

    and then checking out to that commit hash, creating a new branch and then merging that branch back into the 'main branch'


        git checkout <commit-hash>
        git switch -c <branch-name>
        git checkout main
        git merge <branch-name>

Add repository to Github
------------------------

1. Log in to Github and then make a new repository.

2. You then need to add the 'remote' to your git repository: 

        git remote add origin https://github.com/<your-github-username>/<your-repository-name>.git
        git branch -M main
        git push -u origin main

3. You can then push changes to Github when you make them on your local repository: 


        git add .
        git commit -m "commit message"
        git push


Contributing to existing project / collaborating
------------------------------------------------

1. Clone the repository (or pull from upstream if you already have it)


        git clone https://github.com/<github-username>/<repository-name>.git

        # or 

        git pull # from within containing folder i.e. the one with the .git folder

2. Make a new branch


        git checkout -m new_feature # change "new_feature" to whatever you like

3. Add feature, push to origin as usual

        git add .
        git commit -m "added new feature"
        git push

4. Create a pull request

    Create a pull request on Github in order to merge your branch with the 'main' branch. The rules for doing this will be different for different projects. 

