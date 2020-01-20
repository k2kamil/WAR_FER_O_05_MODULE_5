### Zadanie 

Stwórzcie komponent o nazwie `RandomNumbers`.  
Do props przyjmuje wartości `min`, `max` i `count`.

Następnie generuje do tablicy tyle liczb pseudolosowych z zakresu min i max ile podano w count.

Komponent powinien wyświetlać w elemencie `div` najpierw informację o zadanym minimum, maksimum i ilości liczb (subkomponent `RandomNumbersInfo`).  

Następnie wyświetlić za pomocą `map()` wylosowane liczby (subkomponent `RandomNumbersList`) w formacie listy nieuporządkowanej `ul`.

Wyrenderujcie swój komponent na stronie podając w atrybutach do props przykładowe dane.

Zadanie wykonajcie w dwóch wersjach:
- jako komponent w wersji funkcyjnej
- jako komponent w wersji zbudowanej z klasy ES6
