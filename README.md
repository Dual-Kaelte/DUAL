# DUAL – statische Website

Die Website besteht aus direkt auslieferbarem HTML, einem gemeinsamen Stylesheet und einem kleinen JavaScript-Modul. Es gibt keine Frontend-Abhängigkeiten, keinen erforderlichen Build, keine externen Schriftarten und keine eingebetteten Drittanbieter-Dienste.

## Lokal ansehen

`index.html` im Browser öffnen. Alternativ diesen Ordner über einen lokalen HTTP-Server bereitstellen, zum Beispiel mit `python -m http.server 8000`.

## Dateien und Pflege

- `index.html`: Startseite mit Leistungen, Produktübersicht und Fragen.
- `leistungen.html`: Kälte-, Klima- und Servicethemen.
- `klimaanlagen-traun-linz.html`: Planung, Montage, Nachrüstung, Kostenfaktoren und Wartung von Klimaanlagen für Traun und den Raum Linz.
- `produkte.html`: ESKPA/ESKP, manuelle Galerien und vollständige technische Tabellen.
- `ueber-uns.html`: Unternehmensdarstellung.
- `termin.html`: Kontakt und die bestehende Einschränkung der Terminvereinbarung.
- `impressum.html`: Unternehmens- und Gewerbedaten.
- `datenschutz.html`: Hosting, Kontaktverarbeitung, Anbieter und Datenschutzrechte.
- `css/style.css`: Farben, Komponenten, responsive Regeln, reduzierte Bewegung und Druckdarstellung.
- `css/style.min.css`: komprimierte, tatsächlich ausgelieferte Version des Stylesheets.
- `js/site.js`: Mobilnavigation, Tastaturbedienung der Galerien und dezente Einblendungen.
- `assets/`: optimierte Bestandsbilder mit responsive Varianten.
- `robots.txt`, `sitemap.xml`, `404.html`: Suchmaschinen- und Fehlerseiten-Grundlage.

Header und Footer sind auf jeder Seite vorhanden. Bei Änderungen an gemeinsamen Links und Kontaktdaten alle acht Inhaltsseiten und die 404-Seite aktualisieren; ebenso die JSON-LD-Unternehmensdaten in den Seitenköpfen. Farben und Abstandssystem werden zentral in CSS gepflegt.

Die SEO-Optimierung vom 13. Oktober 2026 erhält CSS, JavaScript und die bestehende Gestaltung. Die neue Klimaanlagen-Seite ist von Startseite, Leistungen und Kontakt aus erreichbar. Alte Seitenadressen und Sprungziele bleiben bestehen. Die Sitemap enthält acht eindeutige Inhaltsadressen. Details, Keyword-Zuordnung, Messwerte und externe Schritte stehen in `SEO-REPORT.md`.

Nach CSS-Änderungen optional einmal `npm install` und dann `npm run build` ausführen, um `style.min.css` zu erneuern. Dafür ist ausschließlich der kostenlose Entwicklungs-Minifier `clean-css` erforderlich. Das Hosting benötigt weder Node.js noch npm. Für Bearbeitung ohne dieses Werkzeug können die Stylesheet-Links vorübergehend auf `css/style.css` zeigen.

## Hosting

Die bestehenden `.html`-Adressen und `CNAME` (`dual-kaelte.at`) bleiben erhalten. Alle Seiten und Ordner gemeinsam in das statische Veröffentlichungsverzeichnis kopieren. `.nojekyll` erlaubt die direkte Auslieferung auf GitHub Pages. Für GitHub Pages muss der Veröffentlichungsordner separat im Repository eingestellt sein; dieser lokale Projektordner enthält kein Git-Repository und keine Deployment-Workflow-Datei.

Die Domain wird bei GoDaddy verwaltet; die Website liegt auf GitHub Pages. Die vorhandenen DNS-Einträge bestätigen diese Trennung. E-Mail läuft technisch über Microsoft/Exchange Online, nach bisheriger Angabe über GoDaddy bezogen. Die tatsächlichen E-Mail-Vertragsdaten bitte vor Veröffentlichung mit Abschnitt 5 der Datenschutzerklärung abgleichen.

Es wurden keine Änderungen veröffentlicht oder kostenpflichtigen Dienste eingerichtet. GitHub Pages ist mit GitHub Free für öffentliche Repositories verfügbar. Bestehende Domain- und E-Mail-Gebühren bei GoDaddy laufen nach dem vorhandenen Vertrag weiter; deren Höhe wurde nicht eingesehen. Eigene HTTP-Cache- oder Sicherheitsheader sowie 301-Weiterleitungen können bei GitHub Pages nicht aus diesen HTML-Dateien konfiguriert werden. `/index.html` und `/` werden über die gemeinsame Canonical-URL zusammengeführt; die Sitemap führt ausschließlich `/` auf.

[GitHub-Pages-Bedingungen und Grenzen](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) beachten: Der Dienst schränkt insbesondere Websites ein, die überwiegend kommerzielle Transaktionen oder kommerzielles SaaS ermöglichen. Die vorbereitete Seite ist eine Unternehmens- und Produktinformation mit Telefon-/E-Mail-Kontakt und ohne Online-Verkauf oder aktive Online-Buchung. Dies ersetzt keine verbindliche Freigabe der konkreten Nutzung durch GitHub.

## Terminvereinbarung

Die Online-Buchung bleibt geschlossen. Der 1. Februar 2027 ist der übernommene geplante Verfügbarkeitsbeginn. Es gibt weder ein künstliches Buchungsformular noch eine automatische Freigabe. Zum tatsächlichen Neustart müssen Kapazität, Buchungsweg und Texte ausdrücklich aktualisiert werden. Telefon- und E-Mail-Links bleiben nutzbar.

## Vor Veröffentlichung prüfen

Das Impressum verwendet die öffentlich belegten Gewerbedaten: GISA 39042705, Bezirkshauptmannschaft Linz-Land, WKO Oberösterreich und Ahmad Omar. Ungeprüfte Meisterprüfungsbehauptungen und historische Rechtsverweise wurden entfernt. Die Produktdaten wurden aus dem Bestand übernommen; aktuelle Lieferbarkeit und Kältemittelausführung sind vor einem Auftrag zu klären.

Der Inhaber muss die öffentliche Nutzung aller Fotos, Herstellerbilder und des Logos erlauben können. Diese Rechte wurden bisher nicht bestätigt. Außerdem müssen die tatsächlich eingesetzten E-Mail-Dienste, erforderliche Auftragsverarbeitungsverträge und Löschregeln im Betrieb zur Datenschutzerklärung passen. Diese organisatorischen Angaben lassen sich nicht allein aus Website-Code oder DNS prüfen. Bei späterem Einbau von Formularen, Statistik, Karten oder Videos die Datenschutzinformationen und gegebenenfalls Einwilligungslösung aktualisieren.

Nach einem späteren Deployment Live-HTTPS, den HTTP-Status der 404-Seite, Canonical-Erreichbarkeit und Googles Rich Results Test prüfen. Die technischen Prüfungen und die verbliebenen Bestätigungen stehen in `Veroeffentlichung.md` außerhalb dieses Website-Ordners.
