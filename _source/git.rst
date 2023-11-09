Setting up git and Github
=========================

.. note::
    WORK IN PROGRESS 

Author: Dan Baker

This document will explain how to set up a git repository and the process for storing this repository on Github. It is not meant to be completely exhaustive (I'm definitely not an expert) and so you should suppliment whatever I write here with other documentation (I will not go into much detail about how git actually works.)

Set up git repository (repo)
---------------------

1. Initlialise repo

Open a terminal (Command Prompt or PowerShell on Windows) and change directory ("cd") to the folder that contains the files you want to 'version control' and initlialise a new git repository: 

.. code-block:: console

    cd ~/example-project
    git init

2. Add files to the repo

To add a single file called 'test.txt':

.. code-block:: console
    git add test.text

To add all 'changed' files within a folder (i.e. all of them for a new repo):

.. code-block:: console
    git add .

3. Commit files/changes to the repo

.. code-block:: console
    git commit -m "description of commit"

You can write a description of the commit using the '-m' flag. 

4. Make a new branch for a feature

To avoid 'experimenting' on the main branch of a repo, you can make another experimental branch for testing and then merge it back into main when everything works correctly. 




5. Rolling back to a previous commit hash


If you make a mistake, you can revert to a previous commit. To list all the commits associated with a repo, you can look at the log: 

.. code-block:: console 
    git log --oneline

You can then copy the hash of the commit you want to roll-back to and 'reset' the repo to this commit instead:

.. code-block:: console
    git reset --hard <commit-hash>

The '--hard' flag also resets the history of the repo so that the 'unwanted' commit will no longer show up in the log. If you did this by mistake you can still get it back by finding the deleted commit hash using:

.. code-block:: console
    git reflog

and then checking out to that commit hash, creating a new branch and then merging that branch back into the 'main branch'

.. code-block:: console
    git checkout <commit-hash>
    git switch -c <branch-name>
    git checkout main
    git merge <branch-name>


