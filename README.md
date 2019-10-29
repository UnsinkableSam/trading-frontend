[![Build Status](https://travis-ci.org/UnsinkableSam/trading-frontend.svg?branch=master)](https://travis-ci.org/UnsinkableSam/trading-frontend)



### Krav 2: Frontend.
Jag valde att jobba med react för jag har jobbat med det under kursen. Mitt val var enkelt för jag har jobbat tidigare med angular och känner jag redan är duktig på det, vilket skulle göra att jag inte lär mig lika mycket. Vue är inte något jag direkt är intresserad av i tillfället men kanske i framtiden. 
I hela projektet jobbar jag med react hooks och liknande istället för objekt orienterat för att det var mycket mer intressentant, än objekt orienterat. Hooks är nytt och kul! 

Min graph är [recharts](http://recharts.org/en-US/) för jag tyckte det fanns mycket snyggare grafer och det var väldigt enkelt att implementera.  




### Krav 3: Realtid. 
Jag använder socket enbart i min graph sida och försöker göra just att man hämtar graf datan genom emit. Det finns inte direkt mycket att säga här utan att jag försöker köra den i realtid. Jag kör med rätt kort interval för att jag tänker de flesta som jobbar med grafer vill kunna se med litet mellan rum. 



### Krav 5: Tester frontend.

Jag skapade några tester men det var svårt eftersom man inte kommer åt allt för många sidor utan databasen / apiet. 


#### test 1 Check index page.
Vi bara kollar länken till index sidan med browser.get. 
Vi kollar även url igen bara att försäkra oss vi är på rätt sida när vi gör testet. 

#### Check elements on index.
Kollar om element h1 med rätt text finns på index sidan. 

####  Login. 

Jag letar upp h2 taggen "LOGIN" för att kolla jag verkligen har fått upp login formet. 
Kollar sedan om det är rätt url. 


#### Login input 
Tittar om de olika fälten login / password är tomma på login sidan. 


#### Login test. 
Testar funktionaliteten bakom login utan databas och ser om det letar sig efter kontakt till apiet. 
Detta är inte tänkte att de ska kolla koppling mellan apiet endast till för att kolla så att formet skickas. 


#### navigate to home by navbar. 
Navigera till home via navbar. Vi klickar på home och sedan checkar mot url att vi har kommit rätt.



#### navigate to login by navbar.
Navigera till login via navbar. Vi klickar på login och checkar sedan url.



#### navigate to register by navbar. 
Navigera till register via login sida och vi kollar sedan url stämmer med Register. 