# Oblig 7 - Movies 
## UIN

## Oppgave
* 

    * Få / lag en API nøkkel fra OmdbApi Lenker til en ekstern side eller liknende
    * Lag en Search komponent med search og setSearch props
    * Lag en Movies komponent med en movies prop
    * Lag en Movie komponent med en movie prop. Movie skal brukes av Movies. Tenk at Movies holder på listen og Movie er selve listeelementet.
    *  Style Movies slik at du får en 3x3 Grid med gap 24px.
    * Lag en Main komponent som bruker Search og Movies komponentene det er her alt skal skje
    * Sett alt sammen i Main slik at det er mulig å søke i API og skrive ut resultatet.
        * Ting du nå trenger å sette opp i main er:
            * search og setSearch verdien i Main som skal holde på søkeordet tenk useState
           *  movies i Main som skal holde på alle filmene vi får tilbake etter søket tenk useState
            håndtere submit
    * Gjør at Movies by default viser 5 filmer med søkeordet starwars via useEffect

#### Du kan starte med å skrive alt i App.js hvis ønskelig og deretter flytte alt over til komponenter