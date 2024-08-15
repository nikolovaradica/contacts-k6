# K6 Framework
This K6 framework is used to test the following [API](https://documenter.getpostman.com/view/4012288/TzK2bEa8#c2fbd380-e1c9-468b-a617-394ce0089d72). The API has endpoints for register, log in, log out, CRUD operations for users and CRUD operations for contacts.

## Installation
Make sure you have K6 installed.  
### Linux
#### Debian/Ubuntu
```
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```
#### Fedora/CentOS
Using dnf: 
```
sudo dnf install https://dl.k6.io/rpm/repo.rpm
sudo dnf install k6
```
### MacOS
Using [Homebrew](https://brew.sh/):
```
brew install k6
```
### Windows
Using [Chocolatey](https://chocolatey.org/):
```
choco install k6
```
or using [Windows Package Manager](https://github.com/microsoft/winget-cli):
```
winget install k6 --source winget
```
Check the following [link](https://grafana.com/docs/k6/latest/set-up/install-k6/) from the K6 documentation for more information.

## Usage
Once you are located in the project's folder, run the test script with
```
k6 run tests/contactsTest.js
```