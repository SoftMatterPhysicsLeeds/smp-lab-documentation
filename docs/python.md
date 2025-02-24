# Python 

Author: Dan Baker

## Installing Python


If you're reading this, you're likely looking for an alternative to Anaconda. My recommended approach to installing Python, and managing 3rd party packages and virtual environments, is uv. 

### Downloading uv


The recommended method to install uv on Windows is with their installation script (they advise copy/pasting a command into Powershell). 

``` shell

powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

```


### Using uv to install python

To install Python using uv, type this into Powershell: 

``` shell

uv python install
```

### Setting up a virtual environment for data analysis

!!! warning
    By default, Windows will not allow you to run 'scripts' in Powershell. This means you will not be able to 'activate' your virtual environment. To solve this, enter the following in Powershell:
    ``` shell
    
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    ```

1. Open Powershell and navigate to the folder you would like to install your environment in (it doesn't matter where, as long as you know!)

2. Create a virtual environment as follows (I will be naming it 'analysis' but you can name it whatever you like.) 
    ``` shell

    uv venv analysis
    ```
    <figure markdown>
    ![make venv](static/python/uv_venv.png)
    </figure markdown>
3. Activate your environment using the activate script (copy/paste the text after 'Activate with:'). In this case:
    ``` shell

        analysis\Scripts\activate.ps1
    ```
    If you're successful, your prompt will have the name of your venv in brackets at the beginning: 

    <figure markdown>
    ![make venv](static/python/uv_venv_activated.png)
    </figure markdown>

4. Install some 'relevant 3rd party analysis packages' (numpy, scipy, matplotlib, jupyter, pandas) using uv's package manager:

    ``` shell

    uv pip install numpy scipy matplotlib jupyter pandas

    ```

## Spyder

1. First activate the virtual environment you want to install Spyder in. For this example, I will be installing it in the 'analysis' venv we made before:

    ``` shell

    "C:\Users\USERNAME\analysis\Scripts\activate.ps1"
    ```
    If this is succesful, the venv name will appear in brackets at the beginning of the prompt.

2. Install Spyder using uv:

    ``` shell 

    uv pip install spyder
    ```

3. If you're doing this on a PC you have full control of (i.e. not a university one) you can now just type 'spyder' to run Spyder. If not, this will not work because the university blocks all unsigned executables and the 'spyder' command is installed in the environment as an .exe in the Scripts folder (go look!). We can solve this by invoking the ```start``` function from the spyder module instead:

    ``` shell

    python -m spyder.app.start
    ```

    Spyder will then open, eventually. Should be faster when you open it again.... 

### Making a shortcut to Spyder

Our method of running Spyder - activating our environment and then typing ```python -m spyder.app.start``` - is a bit cumbersome and annoying. Let's change that! Open a text editor (literally anything; notepad is fine) and type: 

``` 

C:\Users\USERNAME\analysis\scripts\python.exe -m spyder.app.start

```

Make sure to change the path to the 'python.exe' to the one that matches the environment you installed Spyder in! 
Save this file as "spyder.bat" (you can name it whatever you like, but you need to save it as a .bat). Double click on the file in file explorer, and Spyder will open! 

We can turn our .bat into a Desktop Shortcut by right clicking it and selecting "Send to - Desktop (create shortcut)". You can then change the icon of this shortcut by right clicking it, clicking 'Properties' and selecting 'Change Icon'.

<figure markdown>
![change icon](static/python/change_icon.png)
</figure markdown>

If you want this to be the 'Spyder' icon, the go to: "your_environment_name\Lib\site-packages\spyder\images" and select 'windows_app_icon.ico'.


<figure markdown>
![change icon](static/python/icon.png)
</figure markdown>

## VSCode

### Installation

Go to the <a href="https://code.visualstudio.com/" target="_blank">VSCode Website</a> and click 'Download for Windows'. Double click the installer, and install! It's a good idea to tick the box(es) to add 'Open with Code' to File Explorer. 

### Extensions

For working with Python files, I would recommend the following extensions: 

- Python
- Jupyter
- Error Lens
- Data Wrangler (requires Pandas)

### Editing a .py file using a venv 

1. Make a folder for analysis, or navigate to a pre-existing folder.
2. Open VScode at that location by either a) right clicking in the folder in File Explorer and selecting 'Open with Code' or b) navigating to the folder in Powershell and typing ```code .```.
3. Make a new .py in the folder by clicking the new file button in the explorer pane.
    <figure markdown>
    ![new file button in VScode](static/python/new_file.png)
    </figure markdown>
4. In the bottom right of the editor, next to where it says 'Python' click on the version number that's displayed and choose the environment that you actually want (it will try and do this for you...)
    <figure markdown>
    ![select interpreter](static/python/select_interpreter.png)
    </figure markdown>

    <figure markdown>
    ![select interpreter](static/python/find_interpreter.png)
    </figure markdown>

    <figure markdown>
    ![select interpreter](static/python/findpython.png)
    </figure markdown>


### Editing a .ipynb (Jupyter notebook) file

1. Once you have made a .py file and chosen the correct interpreter (with Jupyter installed in the environment), make a new file with the '.ipynb' extension.
2. Click 'Select Kernel' in the top right of the editor. 
3. Choose 'Python Environments'
4. Choose the same environment that we chose for the .py file. 