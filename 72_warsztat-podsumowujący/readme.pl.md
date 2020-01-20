# Warsztat

Na dzisiejszym warsztacie wykonacie ponownie aplikację **ToDo**, ale tym razem w oparciu React-a.

W katalogu macie już przygotowaną konfigurację oraz szkielety komponentów do stworzenia aplikacji.

Przygotowanie
---
- utwórzcie repozytorium publiczne "ToDo React APP"
- wrzućcie pliki z Codio do repozytoriom
- sklonujcie repozytorim do siebie na komputer
- zadania wykonujcie na komputerze i na bieżąco wrzucajcie na repozytorium



Podstawowa funkcjonalność
---
- dodawanie zadań do wykonania
- ustawianie statusu zadania ***open / closed***
- zliczanie czasu spędzonego nad zadaniem

Dodatkowa funkcjonalność - dla chętnych
---
- dodawanie operacji do zadania
- rejestracja czasu operacji - wtedy czas dla zadania jest sumą czasów operacji

Przechowywanie danych
---
Do zapisywania danych wykorzystacie już znany Wam **json-server**, który uruchamia serwer REST-owy, dlatego do komunkacji z nim wykorzystacie ***fetch-a***.
 Dane startowe macie zapisane w katalogu **data** w pliku **db.json**, tam też możecie zobaczyć podstawową strukturę pojedynczego zadania.

Po zainstalowaniu pakietów aby uruchomić json-server wpiszcie w terminalu:
```node_modules/.bin/json-server 72_warsztat-podsumowujący/js/data/db.json```

