# Lokales Setup

## Umgebungsvariablen einrichten
Erstelle eine `.env`-Datei im Stammverzeichnis des Repositories.
Füge der `.env`-Datei Variablen für die Datenbank-Zugangsdaten hinzu, z. B.:

```
MONGODB_USERNAME=root
MONGODB_PASSWORD=password
```

## Datenbank starten
`docker compose up -d`

## Abhängigkeiten installieren
Führe diese beiden Befehle vom Stammverzeichnis des Repositories aus:

`cd src/server && yarn`
`cd src/app && yarn`

## Server starten
Der Server benötigt ebenfalls eine Reihe von Umgebungsvariablen.
Erstelle eine `.env`-Datei im Verzeichnis `src/server` und füge die Datenbank-Verbindungszeichenfolge, das Test-Benutzerpasswort und das JWT-Geheimnis hinzu, z. B.:

```
DATABASE_URI=mongodb://root:password@localhost:27017/tech-radar
TEST_PASSWORD=TEST_123
JWT_SECRET=jwt_secret
```

Führe dann diesen Befehl vom Stammverzeichnis des Repositories aus:

`cd src/server && npm start`

## Anwendung starten
Führe diesen Befehl vom Stammverzeichnis des Repositories aus:

`cd src/app && ng serve`

## Anmeldung
Zwei Benutzer werden mit dem angegebenen `TEST_PASSWORD` aus den Umgebungsvariablen erstellt. Entwickler können sich mit diesen Anmeldedaten im Tech-Radar anmelden.

Die beiden Benutzer haben folgende Anmeldedaten und Rollen:

| Rolle | E-Mail | Passwort |
| ----- | ----- | -------- |
| ADMINISTRATOR | administrator@company.com | Wert von `TEST_PASSWORD` |
| MITARBEITER | mitarbeiter@company.com | Wert von `TEST_PASSWORD` |
