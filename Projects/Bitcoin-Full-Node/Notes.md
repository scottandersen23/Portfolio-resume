# What running a full-node on Raspberry Pi taught me about computers. 

When I decided that I was going to setup a Bitcoin node, I didn't really know what I would be doing but I knew that I would learn something during the process. It excited me that I was getting to also physically build something after buying the parts to a Raspberry Pi on Amazon. 

Working with chatgpt, I was able to research commands to use, steps to building the connection and security risks associated with setup. Like most topics in technology you start with one thing and quickly realize there are hundreds of other subtopics and concepts that you need to grasp in order to do the one thing. 

In my case, it started with blockchain, and evolved into SSD storage, network security, ssh keys and remote access to then linux commandline and so on... the best part about AI has been you can directly cut through the clutter and the clicking and youtube videos to dive in and build. When people say vibe code, they should replace it will real-time development. 

My Shopping List:
1. Raspberry Pi 4 8GB = $82
2. Clear case w/ fan and power supply = $27
3. HDMI to Micro HDMI cord = $12
4. Cat6 Ethernet cord = $5
5. SD card reader adapter for Mac = $8
6. Samsung Evo Select SD 128GB = $13
7. Samsung T7 SSD 2TB External Storage = $140
- Total Cost = $295 


Initial Steps to Complete:
1. Prepare the Pi from your Mac terminal (flash OS, configure SSH)
2. Secure the OS
3. Install and configure Bitcoin Core
4. Setup Tor for privacy
5. Wait for blockchain to sync
6. Monitor and keep software updated


At the beginning of preparation it is important to have a notepad or sheet of paper with you to write down login information and paths to important directories to reference. This will save time and help avoid starting over in the future. The ssh configuration part is important because that is how you will connect to your Raspberry Pi remotely from another laptop, think of it like your security badge to get into the Pi. 

It is considered a best practice to keep your everyday computer and Bitcoin full-node server separate for security and performance purposes. When you flash an OS, what you are really doing is downloading a copy of the Raspberry Pi OS onto the micro SD card, then transfering it onto your Raspberry Pi and installing the image file. 

* Note: It is helpful to have a monitor and mouse plugged into the Raspberry Pi during this step to test and confirm everything is working correctly. 

Next, you will have to install a few dependencies, clone the bitcoin core code from Github and mount our external SSD. When I did this the first time, I wanted to do it headlessly in the terminal, and messed up the mount and partitioned the wrong size and for a MacOS. Therefore, my Raspberry Pi could not recognize my storage device, forcing my to reconfigure and overwrite the settings on the SSD for Arch Linux. Keep in mind you are using a linus OS and interacting from a Mac terminal which can get confusing which file type to allow when you flash the OS. Make sure the SSD is readable on linux not mac. 

As you may know, running the node can take days to complete. At the time of writing this article, the sync completed in 14 days for the inital download. If the percentage dramatically slows down after the first 3 days, it is normal. 

While the bitcoin blockchain runs in the background, working to validate transactions and confirm the full history on the ledger, I began reading about keeping your internet secure with Tor and WiFi traffic privacy.

Going throught this process has created so much excitement around building something real with technology and has motivated me to continue exloring new topics. 