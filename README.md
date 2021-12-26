#Features
<table>
<thead><tr><th>Feature</th><th>Desc</th></tr></thead>
<tbody>
<tr><td>Development, test, production environment</td><td></td></tr>
<tr><td>JWT Auth</td><td>  </td></tr>
<tr><td>RESTFul & API protocol</td><td></td></tr>
<tr><td>Mysql Sequelize</td><td></td></tr>
<tr><td>MongoDB Mongoose</td><td></td></tr>
<tr><td>Redis</td><td></td></tr>
<tr><td>Mailer</td><td></td></tr>
<tr><td>Push Notification</td><td></td></tr>
<tr><td>Https localhost Self Signed Certification</td><td></td></tr>
</tbody>
</table>

# Architecture principles

## Separation of Concern

## Feature Encapsulation

This means that we group the files related to a single feature together. This has helped me to reuse my codebase across projects. Let's face it we do not write everything again and again but rather copy-paste the code once perfected to all the required places. If all the things are clubbed together then it's super easy to achieve this safely. This also helps in building a logical structure in mind to find a particular file while writing code that needs it as a dependency.

## Better Error Handling
This is very important for the application to be consistent with errors and the corresponding API responses. So, adopting the separation of concern principle and also the uniformity in the API responses.
## Better Response Handling
The same reason as provided in the above error handling example is also valid for the response handling. 
## Better Promise Management
The callback is replaced by Promises and now the Promise chain is replaced by the async/await. This greatly enhances the coding experience. One problem with this implementation is to write the ugly try/catch block.
<!--## Robust Unit Tests
The primary purpose of Unit-test is not to detect incorrect grammar but to validate behaviors of logics.-->

<!--## Simple Deployability
Dockerfile and docker-compose.yml to simplify the deployment of the application. It is also possible to manually deploy the application.-->


#Development

##Dev HTTPS
[This is a good guide to read](https://deliciousbrains.com/ssl-certificate-authority-for-local-https-development)

If you want to mock a dev https deployment environment
```sh
sudo yarn certs:dev
```
Issuer information need you enter,every field just use default value,only <Common Name>,you have to enter,recommend <Issuer Dev>


Every time need you enter <pass phrase>,enter the same,recommend <1234> makes easy.This will let you enter 4 times.


Then modify the protocol value to true which located in the src/config file


###Custom dev domain
If you want to change the domain,just locate to domain-ext.conf -> DNS.* ,you can add your domain or just modify DNS.4

###Install root CA certificate
On iOS simulator,just drag certs-dev/bunny.devCA.pem to iOS simulator.

On Android emulator,drag certs-dev/bunny.devCA.pem to Android emulator.
Open settings
Go to 'Security'
Go to 'Encryption & Credentials'
Go to 'Install from storage'
Select 'CA Certificate' from the list of types available
Accept a large scary warning
Browse to the certificate file on the device and open it
Confirm the certificate install

###Hosts
On iOS simulator,Apple has bridged the simulator's network to the development,no need to modify the hosts anymore


On android emulator,you may use Charles APP or modify the emulator hosts by yourself.


On real devices,you may use Charles APP or modify the devices hosts by yourself.


```shell script
ssh-keygen -t rsa -b 4096 -m PEM -f bunny-private.key
openssl rsa -in private.key -pubout -outform PEM -out bunny-public.pem
```

