### Zadanie 
Stwórzcie komponent o nazwie `CardGenerator`. Do `props` przekazuje mu się:
- imię
- nazwisko 
- stanowisko
- email
- numer telefonu.

Każda z danych ma być osobnym subkomponentem (np. CardName, CardJobTitle itp).

Powinien on wyświetlać w widoku wizytówki (sam ustal strukturę i style) wszystkie podane dane.   

E-mail powinien być klikalny - `<a href="mailto:test@example.com">test@example.com</a>`. 

Nr telefonu powinien być klikalny - `<a href="tel:123456789">123456789</a>`.

Wyrenderujcie swój komponent na stronie podając w atrybutach do props przykładowe dane.

Zadanie wykonajcie w dwóch wersjach:
- jako komponent w wersji funkcyjnej
- jako komponent w wersji zbudowanej z klasy ES6
