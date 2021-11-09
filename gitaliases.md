## Random
---
### Random dad joke if typo on git add 
	dad = !curl https://icanhazdadjoke.com/ && echo 

## Git Flow Operations
---
### Add file, add and commit all, add patch
	a = add
	ac = !git add . && git commit -am
	ap = add -p
### Commit, commit all, commit all ?, amend commit 
	c = commit --verbose
	ca = commit -a --verbose
	cam = commit -a -m
	m = commit --amend --verbose
	cm = !git add -A && git commit -m
### Checkout, create and checkout new branch, checkout master, checkout develop
	co = checkout 
	cob = checkout -b
	com = checkout master
	cod = checkout develop
### Sync and cleanup with remote
	up = !git pull --rebase --prune $@ && git submodule update --init --recursive 
### Creates a savepoint commit
	save = !git add -A && git commit -m 'SAVEPOINT' 
### Creates a wip commit
	wip = !git add -u && git commit -m "WIP" 
### Modify current commit
	amend = commit -a --amend 
### Go back a single commit
	undo = reset HEAD~1 --mixed 
### Stash and list stashes
	st = stash
	stl = stash list
### Diff, diff stat, diff cached
	d = diff
	ds = diff --stat
	dc = diff --cached
### Reset working directory discarding/removing all files
	res = !git reset --hard 
### Pushes current branch
	done = !git push origin HEAD 
### Create a silent savepoint commit and reset back a commit
	wipe = !git add -A && git commit -qm 'WIPE SAVEPOINT' && git reset HEAD~1 --hard 
### ?
	bclean = "!f() { DEFAULT=$(git default); git branch --merged ${1-$DEFAULT} | grep -v " ${1-$DEFAULT}$" | xargs git branch -d; }; f" 
	bdone = "!f() { DEFAULT=$(git default); git checkout ${1-$DEFAULT} && git up && git bclean ${1-$DEFAULT}; }; f"

### Branch Delete: 
>This checks out your local master branch and deletes all local branches that have already been merged to master

	brd = !sh -c \"git checkout master && git branch --merged | grep -v '\\*' | xargs -n 1 git branch -d\"

### Branch Delete Here:
> Deletes all local branches that have already been merged to the branch that you're currently on

	brdhere = !sh -c \"git branch --merged | grep -v '\\*' | xargs -n 1 git branch -d\"

### Push everything to remote
	pushitgood = push -u origin --all
### Push current to remote
	po = !echo 'Ah push it' && git push origin && echo 'PUSH IT REAL GOOD'
### Add current branch to remote ??
	rao = remote add origin
	mergetest = "!f(){ git merge --no-commit --no-ff \"$1\"; git merge --abort; echo \"Merge aborted\"; };f "
### Rebase interactive aggainst master
	ria = !git rebase -i 'git merge-base HEAD master'

## History / Listing
---

### One-line log
	l = log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short 
### Pretty formatted git log
	lg = !git log --pretty=format:\"%C(magenta)%h%Creset -%C(red)%d%Creset %s %C(dim green)(%cr) [%an]\" --abbrev-commit -30 
### List aliases
	la = "!git config -l | grep alias | cut -c 7-" 
### List branches sorted by last modified
	lb = "!git for-each-ref --sort='-authordate' --format='%(authordate)%09%(objectname:short)%09%(refname)' refs/heads | sed -e 's-refs/heads/--'"
### Display current branch
	b = rev-parse --abbrev-ref HEAD 
### Aside from providing one-line logs, it also shows the branching in/out
	hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
### ?
	ec = config --global -e

### Forced Pull:
> You have a local branch (e.g. for reviewing), but someone else did a forced push update on the remote branch. A regular git pull will fail, but this will just set the local branch to match the remote branch. BEWARE: this will overwrite any local commits you have made on this branch that haven't been pushed.

	pullf = !sh -c \"git reset --hard origin/$(git rev-parse --abbrev-ref HEAD)\"

### Pull only the current branch and dont update refs of all remotes
	pullhead = "!f() { \
	local b=${1:-$(git rev-parse --abbrev-ref HEAD)}; \
	git pull origin $b; \
	}; f" 

### Blow up local branch and repull from remote 
	smash = "!f() { \
	local b=${1:-$(git rev-parse --abbrev-ref HEAD)}; \
	echo 'Are you sure you want to run this? It will delete your current '$b'.'; \
	read -p 'Enter to continue, ctrl-C to quit: ' response; \
	git checkout master; \
	git branch -D $b; \
	git fetch origin $b; \
	git checkout $b; \
	}; f"

### Rebase current branch off master
	rbm = "!f() { \
	local b=${1:-$(git rev-parse --abbrev-ref HEAD)}; \
	echo 'Are you sure you want to run this? It will delete your current '$b'.'; \
	read -p 'Enter to continue, ctrl-C to quit: ' response; \
	git checkout master; \
	git pull origin master; \
	git checkout $b; \
	git rebase master; \
	}; f"

### Rebase current branch off develop
	rbd = "!f() { \
	local b=${1:-$(git rev-parse --abbrev-ref HEAD)}; \
	echo 'Are you sure you want to run this? It will delete your current '$b'.'; \
	read -p 'Enter to continue, ctrl-C to quit: ' response; \
	git checkout develop; \
	git pull origin develop; \
	git checkout $b; \
	git rebase develop; \
	}; f"