# schwimmbad-application

## Git/Github für Mac:

Für Mac können die git Befehle genau so (wie folgend für windows beschrieben) ausgeführt werden. Entweder über das terminal: Hierfür müssen wir zu dem erstellten test-Ordner navigieren können (keine Ahnung ...) oder (je nach Entwicklerumgebung: hier visual studio code) in dem integriertem Terminal

![image](https://github.com/techlabsms/ms-st-20-00-schwimmbadkalender/src/miscellaneous/screenshots/terminal.PNG) 

## Git/Github aus der Windows Console/Eingabeforderung:

* Erstellen des Ordners in dem das git repository initialisiert werden soll (hier als Beispiel **C:/test**)
* Wechseln zum Ordner **C:/test** (innerhalb der Eingabeforderung - sieht aus wie MS Dos)
* Initialisieren des git repositories mit folgendem Befehl in Eingabeforderung
```
  git init
```
Daraufhin wurde ein versteckter .git-Ordner erstellt: **C:/test/.git**. Hier werden alle Änderung, welche lokal an dem Repository vorgenommen werden gespeichert
* Erstellt eine Datei in dem test-Ordner (Bspw. **C:/test/testDatei.txt**) und speichert diese ab
* Wenn ihr 
```
git status
```
eingebt, so seht ihr die Änderungen (in rot), welche seit dem letzten Commit/Init des git repositories vorgenommen wurden
* Mit Eingabe von
```
git add .
```
fügt ihr alle Modifizierungen (Änderungen, Erstellung und Löschen von Dateien), welche ihr für das Commit als wichtig erachtet hinzu. 
* Jetzt können die Änderungen commited werden ("Hinter dem Vorhang stellen vor dem folgendem Fotoschuss")
```
git commit -m "initial commit"
```
**-m** steht für message, die in Gänsefüsschen gesetzte Message sollte aussagekräftig sein, da es den Grund für euren Commit knackig erläutern soll. 
* Das commit wollt ihr jetzt zu eurem lokalen git repository **pushen**, sodass ihr diesen festgehaltenden Speicher-"Augenblick" jederzeit wieder herstellen (**pull**) könnt
```
git push
```

* Als nächstes müsst ihr das test repository auf github erstellen

![image](https://github.com/techlabsms/ms-st-20-00-schwimmbadkalender/src/miscellaneous/screenshots/new-repository.PNG) 
![image](https://github.com/techlabsms/ms-st-20-00-schwimmbadkalender/src/miscellaneous/screenshots/create-repository.PNG) 

* Folgenden Befehl (auf euer github angepasste repository url)  müsst ihr zum Verbinden des lokalen git repositories mit dem online github repository noch eingeben:
```
git remote add origin git@github.com:ThomasDroege/test.git
```
(siehe screenshot)

![image](https://github.com/techlabsms/ms-st-20-00-schwimmbadkalender/src/miscellaneous/screenshots/created-repository.PNG) 

* Pushen des lokalen git reps zum online github rep:
```
git push -u origin master
```