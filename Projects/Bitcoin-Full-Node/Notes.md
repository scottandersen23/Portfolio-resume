# What Bitcoin & Raspberry Pi taught me about computers. 

When I decided that I was going to setup a Bitcoin node, I didn't really know what to expect, but I knew going in, that I would learn something during the process. It excited me that I was going to actually build a computer from the chip for the first time. 

It took around two weeks to do the research and find the right components from Micro Center and Amazon, and flash the OS and do the installation. 

Then another two weeks waiting for the sync to complete, monitoring and running queries to check the status completion. 

Working along side ChatGPT, I was able to run the initial download commands, remotely mount an external storage to the blockchain, and securely encrypt my network connection with Tor to prevent unwanted traffic. Like most technology projects I've worked on, because technology concepts are so vast, once you start one thing, quickly you realize hundreds of other subtopics and concepts that you want to explore and something need as a dependancy to continue. This is where AI dramatically helps the learning curve. Asking those one off questions that pop into your head and getting immediate context allows you move through problems rapidly. In my case, it started with blockchain, and evolved into types of storage, to network security, remote access then linux commandline. 

#### Shopping List:

1. Raspberry Pi 4 8GB = $82
2. Clear case w/ fan and power supply = $27
3. HDMI to Micro-HDMI cord = $12
4. Cat6 Ethernet cord = $5
5. SD card reader adapter for Mac = $8
6. Samsung Evo Select SD 128GB = $13
7. Samsung T7 SSD 2TB External Storage = $140
- Total Cost = $295 

#### Steps to Complete:
1. Prepare the Pi from your Mac terminal (flash OS, configure SSH)
2. Mount storage device
3. Install and configure Bitcoin Core
4. Setup Tor for privacy
5. Wait for blockchain to sync
6. Monitor and keep software updated

#### Working through Setup
At the beginning of preparation it is important to have a notepad or sheet of paper with you to write down login information and paths to important directories to reference. This will save time and help avoid starting over in the future. The ssh configuration part is important because that is how you will connect to your Raspberry Pi remotely from another laptop, think of it like your security badge to get into the Pi. 

It is considered a best practice to keep your everyday computer and Bitcoin full-node server separate for security and performance purposes. When you flash an OS, what you are really doing is downloading a copy of the Raspberry Pi OS onto the micro SD card, then transfering it onto your Raspberry Pi and installing the image file. 

* Note: It is helpful to plug into a monitor and connect a mouse to the Raspberry Pi during this step for piece of mind and visually confirm everything is working correctly. 

Next, you will have to install a few dependencies, clone the bitcoin core code from Github and mount our external SSD. When I did this the first time, I wanted to do it headlessly in the terminal, and messed up the mount and partitioned the wrong size and for a MacOS. Therefore, my Raspberry Pi could not recognize my storage device, forcing my to reconfigure and overwrite the settings on the SSD for Arch Linux. Keep in mind you are using a linus OS and interacting from a Mac terminal which can get confusing which file type to allow when you flash the OS. Make sure the SSD is readable on linux not mac. 

As you may know, running the node can take days to complete. At the time of writing this article, the sync completed in 14 days for the inital download. If the percentage dramatically slows down after the first 3 days, it is normal. 

While the bitcoin blockchain runs in the background, working to validate transactions and confirm the full history on the ledger, I began reading about keeping your internet secure with Tor and WiFi traffic privacy.

Going throught this process has created so much excitement around building something with technology and has motivated me to continue exloring new concepts.
