# Setting-up a portable git environment with gpg keys

The following instructions will take you through a step-by-step process on setting up a Portable Git Configuration that will allow you to load your preferred git-configuration settings and use your gpg keys to sign your commits on any Windows device. 

## But doesn't git already provide a binary for a portable installation? 

Unfortunatly gpg on the "portable" git bash still relies on the host computer to save your keys.  This is due to the fact that the git bash relies on the `HOME` environment variable (which points to the user on the host computer by default) for running various tasks.  The official git documentation [states](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables "Git Documentation: Chapter 10, Section 8 - Environment Variables") that `HOME` isn't usually considered customizable (too many other things depend on it) as the primary reason for doing this.  Please note that other un-intended side effects may result from modifying gits home directory, that being said, we won't have to change the `HOME` directory because gpg provides us with the environment variable `GNUPGHOME` which can be made different from `HOME` in unique circumstances such as this. 
___
## Pre-requisites
- A USB Stick
- Access to a Windows Computer
- Some knowledge on using a unix command-line interface and `vim`

## Getting Started

The software versions used when writing these instructions were:

![git](https://img.shields.io/badge/git-2.27.0-4fc08d.svg?colorA=2c3e50&style=flat-square)
<br>
![gpg](https://img.shields.io/badge/gpg-2.2.20-4fc08d.svg?colorA=2c3e50&style=flat-square)

### Installation

1. Download the 64-bit Git for Windows Portable from the [official website](https://git-scm.com/download/win). 
2. Once the download has completed, launch the installer.  
3. You will be prompted to select an install location, click on the button with three dots and select the root directory of your portable device. 
4. Once the installer has finished extracting the contents, we can move on to configuration. 

### Configuration
If you are unfamiliar with the bash and vim environment, consult [this brief section](#Fundamental-Bash-Commands) which lists the most fundamental commands.  

1. Navigate to the directory where you have installed git and launch `git-bash.exe`
2. Once bash has fully loaded you should already be in the home directory denoted by the forward slash character `/`,  
```bash
username@computername MINGW64 / <-- your current directory
$
```
Some things worth mentioning before we continue: 
- Keep in mind that `/` points to the directory where you installed Git.  It does _not_ point to the root directory of your portable device. 
- You can access different volumes on your computer by typing the volume letter after the forward slash. i.e. `cd /c` to access Local Disk C
- Executing the `cd` command without any parameters or `cd $HOME` or `cd ~` will take you to the `HOME` directory. 
3. Navigate to `/etc/profile.d/` and open the `bash_profile.sh` file using vim
4. At the end of the file, add the following:
```bash
export GNUPGHOME=/.gnupg
```
- This will make it so that gpg will save your keys to your portable device, and not the host computer. 
5. Save the file and restart bash. 
6. You can double check that these changes were made by executing `gpg --version` and verifying that the home directory is correct. Below is example output. 
```bash
gpg (GnuPG) 2.2.20-unknown
libgcrypt 1.8.5
Copyright (C) 2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Home: /.gnupg
Supported algorithms:
Pubkey: RSA, ELG, DSA, ECDH, ECDSA, EDDSA
Cipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,
        CAMELLIA128, CAMELLIA192, CAMELLIA256
Hash: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224
Compression: Uncompressed, ZIP, ZLIB, BZIP2
```
7. Generate a GPG key with the `gpg generate-key` command.  Use `gpg --full-generate-key` for more advanced options. 
- [Optional] Consult [GitLab](https://docs.gitlab.com/ee/user/project/repository/gpg_signed_commits/) or [GitHub](https://docs.github.com/en/enterprise/2.19/user/github/authenticating-to-github/signing-commits) documentation for more precise documentation on generating gpg keys and signing commits according to their specifications
8. Now that you've generated your gpg key there is one last thing you must do before you'll be able to sign your git commits. Add your real name and email to gits <b>system</b> configuration file, the credentials should be the same as what you have on GitHub or GitLab and _MUST_ match what you used to generate your gpg keys.<br><br> 
`git config --system user.name "First Last"`
<br>
`git config --system user.email "first.last@email.com"`

- Git relies on your username and email in the git-configuration file to sign commits using gpg keys. 
- Git has three configuration files
    - local (restricted to the current repository)
    - global (restricted to the current user, which is saved on the host computer as defined by the `HOME` environment variable)
    - system (saved in the `/etc/` directory of your portable device and overrides everything else)
- If you wish to also make the global .gitconfig file portable you'll have to change the `HOME ` environment variable by adding `export HOME=` in the `bash_profile.sh` file.
9. There is one last thing that needs to be done before you'll be able to sign your commits on the go.  GPG relies on a helper service that needs to be manually started from the command line almost everytime you plug-in your portable device, otherwise you'll get a timeout error when trying to sign your commits:
```bash
gpg: DBG: locking for 'F:/.gnupg/pubring.kbx.lock' done via O_EXCL
gpg: DBG: locking for 'F:/.gnupg/gnupg_spawn_agent_sentinel.lock' done via O_EXCL
gpg: cant connect to the agent: IPC connect call failed
gpg: keydb_search failed: No agent running
gpg: skipped "9F5F2A97358508C54AE33519E617A56D86AFA457": No agent running
gpg: signing failed: No agent running
error: gpg failed to sign the data
fatal: failed to write commit object
```
10. Fortunantly with a little bit of programming we can automate this without having to type `gpg-agent --daemon` everytime we start git. Navigate to `/etc/` and open the `bash_profile.sh` file.
11. At the end of the file add the following code:
```bash
# Automatically starts gpg-agent for signing files and commits
# Disabling this if-else will result in error:
# gpg: can't connect to the agent: IPC connect call failed

if [ $(ps | grep gpg-agent | wc -l) == 0 ]; then
        echo "Starting gpg-agent --daemon"
        eval gpg-agent --daemon
else
        echo "gpg-agent already running"
fi
```
- The if-else statement checks if gpg-agent --daemon is already running before attempting to start it. 
12. Success! You can now sign commits using git bash from your portable device on any Windows computer using `git commit -S -m "some_commit"`
---

## Fundamental Bash Commands
- `cd some_directory` or `cd some_directory/` to navigate into a directory
- `cd ..` or `cd ../` to go back to the parent directory
- Don't wear yourself out typing the entire directory name, use the tab key for autofill. 
- `ls` will show all non-hidden directories and files
- `ls -l -a` will neatly list all files and directories, including hidden ones.
- `ls | grep --color=auto <search_keyword>` is used for searching 
- You can also print to the console your current working directory with the `pwd` command
- The `cat` command can be used to quickly print the contents of a file to the console. i.e. `cat somefile.txt`
- The `vim` command will open your bash text-editor.  You can pass in a file as an argument to open (and edit) the file. i.e. `vim somefile.txt`
- `exit` command is used to close bash

## Fundamental vim commands
All this assumes you already have vim open:
- Pressing `i` will enable insert mode for file editing
- Pressing the ESCAPE key followed by the SEMI-COLON (`:`) key will allow you to execute important vim commands:
    - `w` to save the file
    - `wq` to save the file and quit the text editor
    - `q` to quit the text editor 
    - `q!` to force quit the text editor discarding any changes you made to the file
---
## Resources that helped create this tutorial
[git Documentation, "10.8 Git Internals - Environment Variables"](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables)
<br>
[gpg Documentation, "4.3 Configuration Files"](https://www.gnupg.org/documentation/manuals/gnupg/GPG-Configuration.html)
<br>
[Michael Wales, "Make .gitconfig Work for You"](http://michaelwales.com/articles/make-gitconfig-work-for-you/)
<br>
[Michael Heap, "gpg: can't connect to the agent: IPC connect call failed"](https://michaelheap.com/gpg-cant-connect-to-the-agent-ipc-connect-call-failed/)

