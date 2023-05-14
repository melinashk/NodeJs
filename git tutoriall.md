## git tutorials

Git is a version control which helps managing projecrs and their versions.
we can go back previous versions as well as move forward the previous verision

### initializing a repo

```bash
git init
```
git init command iniatlize the repo as a local repo

### cloning a repo

```bash
git clone repo_link
```
this git command helps clone a repo from the remote repo

### Areas of git
there are mainly 4 areas of git
1. working directory
2. staging area
3. local repo
4. remote repo

#### working directory
it is the directory in which we work and code

#### staging area
the area in which the files stays after we perform a git command
```bash
git add filename
```
the staging repo is on the upside of the working directory and below the local repo to be comitted

#### local repo
after we commit the file it goes to the local repo in which the log of the file is maintained
```bash
git commit -m "commit message"
```
#### remote repo
it is the repo maintained in the cloud platform such as github and gitlab which holds the copy of our code
```bash
git push origin branchname
```

## what is a branch
branch in git are the forks from the main repo in which we can rtest out things and later merge the changes to the main branch

to create a branch we can do
```bash
git checkout --type branchname
```
to switch between branches we again use the checkkout
```bash
// to go to branch git from main
git checkout git

// to go to main from git
git checkout main
```

## git logs

we create checkpoints when we commit the changes which is recorded in the log
the log holds the previous versions of the code
```bash
git log
```
using git log we can see all the checkpoints we have made

#### to go to a version
 to go to a version or checkpoint using git we have to use the hasg of the log
```bash
git checkout hashoftheversion
```
this will take us to the version of our code and we can mode back and forth

to get changes from remote to local repo we use git fetch
```bash
git fetch
```
and to check the changes of local and remote repo we use diff
```bash
git diff
```
if we want to merge the fetched data from the remote repo we use the merge
```git
git merge
```