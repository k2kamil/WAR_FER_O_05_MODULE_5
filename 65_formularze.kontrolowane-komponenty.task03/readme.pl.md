### Zadanie

twórzcie komponent **SelectOrType**.  
Przez props ma przyjmować tablicę items.

Ma renderować form, a w nim select. 

Stwórzcie elementy option w select:
- takie jakie zostały przekazane w props w items,
- oraz dodatkową, ostatnią pozycję "Inne".

Jeżeli użytkownik wybierze ostatnią pozycję - wyświetl pod elementem select elementy input type="text" oraz button (w praktyce one będą tam cały czas, tylko ukryte domyślnie).

Po wpisaniu dowolnej treści i zatwierdzeniu przyciskiem zmieńcie ostatnią pozycję “Inne” na to co wpisał użytkownik, zaznaczcie tę pozycję i zamknijcie menu.

Po ponownym wybraniu jakiejś innej pozycji i powrocie do ostatniej - cały czas powinno działać wyświetlanie i zmiana.

Wyrenderujcie z items ustawionym na ['BMW’, 'Jaguar’, ‘Porsche’] i przetestujcie swój komponent.