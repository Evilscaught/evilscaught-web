# evilscaught-web

A vue-based website which will host all sorts of interesting topics.   


## Setting up the Development Environment
[Visual Studio Code](https://code.visualstudio.com/) is the primary text editor used when developing this website.  Using Visual Studio Code is recommended - but not required.  The subsequent instructions will take you through the steps required to run the server locally on your computer.

### Windows

#### Enabling the Windows Subsystem for Linux
Only go through these instructions if you haven't already set-up some sort of bash environment on your Windows desktop computer.

1. Click on the start menu and search for "Windows Features". A program titled "Turn Windows Features On or Off" should appear in the search results.  Click to open the program. 
2. Once the program has loaded there should be a list of Windows features on display. Scroll down and locate the feataure "Windows Subsystem for Linux"
3. Mark "Windows Subsystem for Linux" as checked, and hit the "Ok" button. An additional pop-up will appear as Windows begins configuring files, once finished you will be asked to restart you computer by the Windows service. Do so before proceding to the next step.   
4. After your computer has been restarted, open-up the Windows PowerShell and Execute the following command to install a Linux distrobution for the Windows Subsystem for Linux.
```
Invoke-WebRequest -Uri https://aka.ms/wsl-ubuntu-1604 -OutFile Ubuntu.appx -UseBasicParsing
```
- It will take a while for the download to complete.
5. A Microsoft app-file `Ubuntu.appx` will be downloaded onto your computer.  It should be located in your 
directory `C:\Users\%USERNAME%` 
6. Locate the file, double-click on it, and install it. A Bash window will open during installation.
7. After installation has completed you will be asked to create a Unix account.  The username should be the same as the username shown in the PowerShell.  If you're unsure of what the username is and where it's shown, use this PowerShell command to print it `$env:UserName`
8. Now that you've set-up the WSL, in the future you'll be able to load bash either by searching for "Bash" in the Windows start-menu or by executing `wsl` in the Windows PowerShell.
- Tip: If you choose to launch the WSL in the PowerShell, you can always go back to the PowerShell with the `exit` command. Similarly the `cmd` command can be used to open the command-prompt.



#### Setting up the Bash Development Environment
These instructions assume that you've got a full-featured bash environment working in Windows.

1. In the WSL, download and install nvm
- You can check if you already have it installed with `nvm --version`
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
2. Restart the WSL 
3. Download and install Node.js version 14.5.0
```bash
nvm install 14.5.0
```
- npm will be automatically installed with Node.js
4. Once finished you can verify that node and npm were installed with `node --version` and `npm --version`  
5. Navigate to your desired directory and clone the repository.  You may be prompted to enter your GitLab credentials.
```bash
sudo git clone https://gitlab.com/Evilscaught/evilscaught-web.git
```
- Omitting the `sudo` command may result in the operation being denied.

6. Navigate into the directory of your newly cloned repository
7. Run `npm install` to install all dependencies
8. Run `npm run serve` to start the server.
9. The server will be listening at https://localhost:8080.
- Using the `--https` flag will allow you start the local server with an encrypted connection.  However, firefox will warn you with a potential security risk ahead.  To bypass the block, click on 'Advanced...' and then 'Accept the Risk and Continue'.
- The HTTP-secure connection is required for an optimal development environment. Firefox will block any unsecure HTTP request.
---
## File Structure 
The file-structure shown below is meant to be a guide in regards to the purpose of the important files and directories.  When developing the website, it would be ideal to have the text editor or IDE open in the root directory. The root directory is also where you'll be able to execute scripts such as `npm run serve` to start the local development server.

```bash
evilscaught-web/  # The root directory
|───node_modules/   # Contains all node package manager dependencies
|   |   ...
|
|───public/ # The public directory serves as an escape hatch from webpack
|   |   favicon.ico
|   |   index.html  # Entry point, this is where Vue injects the Root view 
|
|───src/    # The "source" directory, here are the files that "make" the website. 
|   |
|   |───assets/ # Images, audio, etc. is stored here.
|   |   |   ...
|   |   
|   |───components/ # Vue components are stored here.  
|   |   |   ...     # These are the "building blocks" of the single file components
|   |
|   |───router/
|   |   |   index.js    # Defines the routes to all the single file components
|   |
|   |───store/  # This directory is pending deletion
|   |   |   ...
|   |   
|   |───styles/ # Cascading style sheets stored here
|   |   |   ...
|   |   
|   |───views/  # Contains all the single file components (i.e. website pages)
|   |   |   ...
|   |
|   |   App.vue # All single file components are injected into the App view. 
|   |           # App view is then injected in the Root view (see main.js below)
|   |
|   |   main.js # Root view is created here and injected into ./public/index.html
|
|   .gitattributes
|   .gitignore
|   .gitlab-ci.yml  # Used by GitLab Pages for Pipelining
|   babel.config.js # Babel Global Configuration File
|   dependencies.md # Documentation on dependencies used throughout development
|   package.json 
|   package-lock.json
|   README.md
|   vue.config.js   # Global Configuration file loaded by @vue/cli-service
```