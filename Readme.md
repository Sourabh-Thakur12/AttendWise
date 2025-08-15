# (Temp) Working Convention for less confusion
1. Clone the Repo
2. set origin
3. fetch all branches
    > git fetch --all
4. create a local dev branch and link to remote dev
    > git checkout -b dev origin/dev
5. pull remote changes 
   > git pull origin dev
6. create your feature branch
   >git switch -c name/featureName
7. pull remote dev for added safety
8. code and test your feature
9. push changes
10. switch to dev
    >git switch dev
11. pull remote dev
12. merge your feature
    > git merge featureBranchh
13. test on dev branch and push to remote dev
14. (optional) delete your featurebranch after merge locally and remote
15. > git fetch --prune