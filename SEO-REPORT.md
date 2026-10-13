# SEO-REPORT – DUAL Klimaanlagen in Traun und Linz

Stand: **13. Oktober 2026**. Projekt: `C:\Users\wwaer\Desktop\DUAL-main`. Domain: `https://dual-kaelte.at/`. Die Domain wird bei GoDaddy verwaltet; die Website liegt auf GitHub Pages. Die SEO-Fassung ist lokal umgesetzt, geprüft und in den Projektordner übernommen. Vor der Übernahme wurden 120 Bestandsdateien mit der Sicherung verglichen; anschließend stimmten alle 89 übernommenen Dateien per SHA-256 mit der vorbereiteten Fassung überein. Es werden weder externe Konten noch DNS oder die öffentliche Website verändert.

## Ergebnis und Umfang

Die bestehende Gestaltung bleibt erhalten. CSS-Quelle, ausgeliefertes CSS und JavaScript stimmen bytegenau mit dem Stand vor dieser SEO-Arbeit überein. Header, Footer und Hauptnavigation behalten ihre Gestaltung und Linkstruktur. Bestehende Bilder, Produkt-Tabellen und rechtliche Unternehmenszeilen bleiben erhalten; Bildbeschreibungen wurden teilweise präzisiert. Sichtbare Überschriften und Texte wurden auf die Suchintention abgestimmt. Ein vorhandener HTML-Fehler in der Reihenfolge des Bilduntertitels auf der Startseite wurde ohne Designänderung berichtigt.

Neu ist **`klimaanlagen-traun-linz.html`**: eine ausführliche Leistungs- und Informationsseite zur Planung, Montage, Nachrüstung, Systemwahl, Kostenfaktoren, Wartung und Kontaktaufnahme. Es gibt sechs Fragen mit aufklappbaren Antworten. Der Inhalt wird vollständig als HTML ausgeliefert und funktioniert auch ohne JavaScript. Der Firmensitz bleibt Traun; Linz ist das bereits im Bestand genannte Servicegebiet. Ein zusätzlicher Standort oder Schauraum wird nicht behauptet.

Die Seite ist direkt von der Startseite und außerdem aus Leistungen und Kontakt erreichbar. Sie ergänzt die bisherige allgemeine Leistungsübersicht. Zwei nahezu identische Seiten nur für unterschiedliche Ortsnamen würden hier keinen eigenständigen Nutzen bieten; deshalb entstand eine gemeinsame fachliche Seite für das tatsächliche Servicegebiet.

## Ausgangslage: lokale Fassung und öffentliche Website

Das Projekt verwendet **statisches HTML** ohne Framework, clientseitiges Routing oder Backend. Vor dieser Arbeit gab es sieben Inhaltsseiten und eine 404-Seite. Die lokale Fassung enthielt bereits eindeutige Canonicals, eine korrigierte Sitemap, JSON-LD, `lang="de-AT"`, lokale Schriften, WebP-Bilder, responsive Bildgrößen und Lazy Loading. Diese Verbesserungen stammen aus dem vorherigen Redesign; sie werden hier nicht als neu erledigte SEO-Arbeit ausgegeben.

| Befund | Bedeutung | Maßnahme |
|---|---|---|
| Allgemeine Werbeüberschriften auf Start- und Leistungsseite | Angebot und Standort werden erst im weiteren Text deutlich | Hauptüberschriften und Einstieg auf Leistung und Region abgestimmt |
| Keine ausführliche Seite zur Klimaanlagen-Installation | Fragen zu Systemen, Montage, Nachrüstung, Kosten und Betrieb bleiben verstreut oder unbeantwortet | Eine eigene fachliche Klimaanlagen-Seite ergänzt |
| Klimathema überwiegend als Unterabschnitt der breiten Leistungsübersicht | Suchintention der Installation erhält wenig eigenständige Tiefe | Neue Seite direkt verlinkt und von der Übersicht getrennt beschrieben |
| Teilweise kurze Bildbeschreibungen | Bildinhalt lässt sich weniger genau erkennen | Beschreibungen ohne künstliche Orts- oder Keyword-Wiederholung präzisiert |
| Region fehlt im strukturierten Adressfeld | Der tatsächliche Standort kann genauer bezeichnet werden | `addressRegion: Oberösterreich` ergänzt |
| Vorhandene Schema-Seiten und Breadcrumbs nicht miteinander referenziert | Die Beziehungen können deutlicher beschrieben werden | Konsistente IDs, WebPage-Breadcrumb-Bezug und Publisher-Bezug ergänzt |
| Startseiten-Figur enthält ein Element hinter `figcaption` | HTML-Reihenfolge entspricht nicht der geprüften Inhaltsregel | Dekoratives Element vor den Bilduntertitel gesetzt |

Die öffentliche Website wurde am 13. Oktober 2026 separat per HTTP geprüft und zeigt noch die ältere Fassung:

- HTTP-Startseite leitet mit **301** auf HTTPS um; HTTPS liefert **200**.
- `www.dual-kaelte.at` leitet mit **301** auf `dual-kaelte.at` um.
- Die öffentliche `robots.txt` liefert derzeit **404**.
- Die öffentliche Sitemap liefert **200**, enthält aber sowohl `/` als auch `/index.html` und noch nicht die vorbereitete Datenschutz-/Klimaanlagen-Seite.
- Eine unbekannte öffentliche Adresse liefert tatsächlich **404**, derzeit mit der Standardseite von GitHub Pages.
- Öffentlich gemessener HTML-Cache: `max-age=600`.

Die lokal vorhandenen Korrekturen werden erst nach einem Deployment öffentlich wirksam. Das Fehlen einer `robots.txt` wurde nicht als Nachweis einer Indexierungssperre interpretiert. Die tatsächlich von Google indexierten URLs wurden mangels Search-Console-Zugriff nicht überprüft. Messprotokoll: `seo-live-before.json`.

## Recherche zu Wettbewerbern und Suchintention

Es wurde eine aktuelle Websuche zu „Klimaanlage Traun Montage Klimaanlagen“ und „Klimaanlage installieren Linz Fachbetrieb“ durchgeführt. Anschließend wurden drei relevante Anbieter-Websites direkt gelesen. Dies ist eine qualitative Recherche anhand der verfügbaren Suchergebnisse, **keine Messung von Google-Rangpositionen, Suchvolumen oder Marktanteilen**. Personalisierung, tatsächlicher Suchstandort und die Google-Ergebnisreihenfolge wurden nicht kontrolliert.

| Anbieter / gelesene Seite | Beobachtete Inhalte | Nutzen für die DUAL-Inhaltsplanung |
|---|---|---|
| [Lorenz Klimatechnik](https://www.lorenz-gmbh.at/) | Unterscheidung von Privat- und Gewerbekunden; Eigenheim, Nachrüstung sowie Wartung | Zielgruppen und Systemanforderungen verständlich auseinanderhalten |
| [Pirker Kühlung – Klimaanlagen](https://www.pirkerkuehlung.at/klimaanlagen) | Eigene Klimaanlagen-Seite; Bedarf, Geräteposition, Leitungen und Weg von der Anfrage zur Installation | Montagebedingungen und Planung als zusammenhängendes Thema beantworten |
| [Die Hitze Befreier](https://www.hitzebefreier.at/) | Split-/Multi-Split-Angebot; viele Fragen zu Aufstellung, Stromverbrauch und Wartung | Entscheidungsfragen vor einer Kontaktaufnahme aufgreifen |

DUAL übernimmt keine Preise, Garantien, Herstellerpartnerschaften, Bewertungen oder Referenzen dieser Anbieter. Die neuen Inhalte beruhen auf dem bestehenden DUAL-Angebot und eigenständig formulierten technischen Grundlagen. Zusätzlich wurden Herstellerinformationen zu [Multi-Split](https://www.daikin.at/de_at/privatkunden/produkte-und-beratung/produktkategorien/klimaanlagen/multisplit.html), [Montage- und Kostenfaktoren](https://www.daikin.at/de_at/privatkunden/inspiration/ratgeber/klimaanlagen-ratgeber/preise-und-kosten-einer-klimaanlage.html), [Wartung](https://www.daikin.at/de_at/privatkunden/inspiration/ratgeber/klimaanlagen-ratgeber/klimaanlage-warten.html) und [Klimageräten](https://www.daikin.at/de_at/privatkunden/produkte-und-beratung/produktkategorien/klimaanlagen.html) sowie das [EU-Energielabel](https://energy-efficient-products.ec.europa.eu/product-list/air-conditioners-and-comfort-fans_en) und die [Linzer Informationen zu Bauverfahren](https://www.linz.at/serviceguide/viewchapter.php?chapter_id=123455) herangezogen. Der Hinweis zu baulichen Voraussetzungen enthält keine pauschale Bewilligungszusage.

## Keyword-Zuordnung und URLs

| Seite / kanonische Adresse | Schwerpunkt und Suchintention |
|---|---|
| `/` | „Klimaanlage Traun“, „Klimaanlage Linz“: Überblick über DUAL und die angebotenen Leistungen |
| `/klimaanlagen-traun-linz.html` **neu** | „Klimaanlage installieren Traun/Linz“, „Klimaanlagen Montage Traun/Linz“; Systemwahl, Wohnung/Haus, Split und Multi-Split, Nachrüstung, Kostenfaktoren und Wartung |
| `/leistungen.html` | Kälte- und Klimatechnik in Traun und im Raum Linz; Kühlsysteme, VRF, Kaltwassersätze und Serviceübersicht |
| `/produkte.html` | Einschiebekühlpulte ESKPA/ESKP; technische Daten und Ausstattung für Gastronomie |
| `/ueber-uns.html` | Fachbetrieb in Traun; tatsächlicher Ansprechpartner und Gewerbeinformationen |
| `/termin.html` | Kontakt, Störungsservice und tatsächliche Terminverfügbarkeit |
| `/impressum.html`, `/datenschutz.html` | Unternehmens- und Datenschutzinformationen; keine künstliche Ausrichtung auf Montage-Suchbegriffe |

Sekundäre Themen wie „Klimaanlage für Wohnung“, „Klimaanlage für Haus“, „Klimaanlage nachrüsten“ und „Klimaanlagen Wartung“ werden in passenden Abschnitten beantwortet. „Kaufen“ wird nicht durch einen erfundenen Online-Shop abgedeckt: Die Seite erklärt Geräteauswahl und Angebotsumfang. Oberösterreich erscheint als Standortregion; ein flächendeckender Service für das gesamte Bundesland wurde nicht neu versprochen.

Bestehende `.html`-Adressen und Sprungziele bleiben bestehen. Die neue Seite nutzt dasselbe statische Dateiformat. Es werden keine zusätzlichen Alias-Adressen oder clientseitigen Weiterleitungen erzeugt. `/index.html` verweist kanonisch auf `/`; die Sitemap enthält nur die bevorzugte Startseiten-Adresse.

## Umgesetzte On-Page- und technische Maßnahmen

- Individuelle Titles und Beschreibungen für die kommerziell relevanten Seiten; dieselben Aussagen in Open Graph, Twitter und den WebPage-Daten.
- Klare H1 je Seite, nachvollziehbare H2-/H3-Hierarchie und sichtbarer Bezug zu den jeweiligen Leistungen.
- Neue Klimaanlagen-Seite mit eigenem Canonical, passender Social-Vorschau, Breadcrumbs und einer eindeutigen Leistungsbeschreibung.
- Acht eindeutige HTTPS-Adressen in der XML-Sitemap. Keine 404-Adresse, kein doppelter Startseiten-Eintrag, keine erfundenen Aktualisierungsintervalle.
- Vorhandene `robots.txt` lässt Crawling zu und verweist auf die Sitemap. CSS, Bilder und Skripte werden nicht gesperrt.
- 404 bleibt mit `noindex` versehen und ohne irreführendes Canonical. Eine unbekannte Adresse liefert im lokalen Prüfserver 404.
- Interne Links nutzen echte HTML-Links; wichtige Seiten sind von der Startseite in einem Klick erreichbar. Inhalt und FAQ benötigen kein JavaScript zum Rendern.
- WebP, feste Bildmaße, responsive Varianten, Lazy Loading für nachgelagerte Bilder und hohe Priorität für das jeweilige Hero-Bild bleiben erhalten.
- Keine neuen Frontend-Bibliotheken, Tracker oder externen Fonts. Der HTML-Prüfer ist ausschließlich ein lokales Entwicklungswerkzeug außerhalb des Website-Pakets.

Die Umsetzung folgt dem [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) und den Hinweisen zu [kanonischen Sitemap-Adressen](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). Eine gute technische Prüfung garantiert keine Indexierung und kein bestimmtes Ranking.

## Strukturierte Daten

- `HVACBusiness` beschreibt das bestehende Unternehmen als passenden LocalBusiness-/Organization-Untertyp, mit tatsächlicher Adresse, Telefonnummer, E-Mail, Logo, normalen Geschäftszeiten und dem vorhandenen Servicegebiet Traun/Linz. Keine erfundenen Koordinaten oder Filialen.
- `WebSite` verweist auf den Unternehmens-Publisher.
- `WebPage` stimmt mit den Metadaten und der kanonischen Adresse überein; Unterseiten verweisen auf ihre Breadcrumbs.
- `BreadcrumbList` bildet die jeweilige Navigationshierarchie ab. Die neue Klimaanlagen-Seite liegt inhaltlich unter den Leistungen.
- `Service` beschreibt Kältetechnik, Klimatechnik und Wartung sowie die neue Klimaanlagen-Leistung mit Anbieter und Servicegebiet.

JSON-Syntax, IDs, Referenzen, Metadatenkonsistenz, Pflichtdaten der verwendeten lokalen Unternehmensbeschreibung und die Übereinstimmung mit sichtbaren Aussagen wurden lokal geprüft. Grundlagen: [Schema.org HVACBusiness](https://schema.org/HVACBusiness) und [Google zu LocalBusiness-Daten](https://developers.google.com/search/docs/appearance/structured-data/local-business). Eine echte Freigabe durch Googles Rich Results Test beziehungsweise eine tatsächliche Anzeige besonderer Suchergebnisse wurde **nicht** behauptet.

Es wurden keine Ratings, Reviews, Produktpreise oder Zertifizierungen ergänzt. Die FAQ bleiben hilfreicher sichtbarer Inhalt. FAQ-Rich-Results werden von Google seit 7. Mai 2026 nicht mehr angezeigt; deswegen wird keine entsprechende Suchdarstellung versprochen. [Google-Dokumentationsänderungen](https://developers.google.com/search/updates#may-2026).

## Performance-Messung

Lighthouse **13.5.0**, lokal über Chromium/Edge, simuliertes mobiles Profil für alle acht Inhaltsseiten sowie Desktop-Profil für die Startseite. Achtung: Diese Werte beziehen sich auf den lokalen Prüfserver mit einer Cache-Laufzeit von einer Stunde, nicht auf die derzeit öffentlich ausgelieferte Website.

| Seite / Profil | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|
| datenschutz.html / mobile | 100 | 100 | 100 | 100 | 1.35 s | 0.000 | 0 ms |
| impressum.html / mobile | 100 | 100 | 100 | 100 | 1.35 s | 0.000 | 0 ms |
| index.html / desktop | 100 | 100 | 100 | 100 | 0.44 s | 0.000 | 0 ms |
| index.html / mobile | 99 | 100 | 100 | 100 | 2.03 s | 0.000 | 30 ms |
| klimaanlagen-traun-linz.html / mobile | 100 | 100 | 100 | 100 | 1.50 s | 0.000 | 0 ms |
| leistungen.html / mobile | 100 | 100 | 100 | 100 | 1.58 s | 0.000 | 0 ms |
| produkte.html / mobile | 100 | 100 | 100 | 100 | 1.73 s | 0.000 | 0 ms |
| termin.html / mobile | 100 | 100 | 100 | 100 | 1.20 s | 0.000 | 0 ms |
| ueber-uns.html / mobile | 100 | 100 | 100 | 100 | 1.35 s | 0.000 | 0 ms |

Unmittelbar vor den Änderungen wurden Startseite und Leistungsübersicht mit demselben mobilen Prüfaufbau gemessen:

| Seite | Performance vor → nach | LCP vor → nach | CLS vor → nach |
|---|---:|---:|---:|
| index.html | 99 → 99 | 2.03 s → 2.03 s | 0.000 → 0.000 |
| leistungen.html | 100 → 100 | 1.65 s → 1.58 s | 0.000 → 0.000 |

Die vorhandene schnelle Auslieferung wurde erhalten. Die Unterschiede einzelner Laufzeiten sind Labormessungen und kein Nachweis einer dauerhaften Beschleunigung. Für die neue Seite existiert keine Vorher-Messung. Alle gemessenen LCP-Werte liegen unter 2,5 Sekunden und alle CLS-Werte bei 0. TBT ist ein Labormesswert und ersetzt **INP nicht**. INP und reale Nutzer-Felddaten wurden **nicht gemessen**.

Die gemeinsame CSS-Datei bleibt unverändert: **37.899 Bytes Quelle**, **29.708 Bytes komprimiert**. Die erneute Kompilierung erzeugt dieselbe Auslieferungsdatei. Lighthouse nennt weiterhin je nach Seite unbenutzte CSS-Anteile, weitere mögliche Bildverkleinerungen und Cache-Themen. Es wurde keine neue Komplexität durch seitenweise CSS-Aufteilung, zusätzliche Formate oder Frontend-Abhängigkeiten eingeführt. Die Zielwerte werden im gemessenen Prüfaufbau erreicht; öffentliche Cache- und Netzwerkbedingungen können andere Ergebnisse liefern.


## Qualitätssicherung

- CSS-Build mit dem vorhandenen `clean-css` tatsächlich ausgeführt; Ergebnis bytegleich mit der vorherigen Fassung.
- Alle **neun HTML-Dateien** mit **html-validate 11.16.2**, Preset `html-validate:standard` und passender Void-Element-Schreibweise geprüft: **0 Fehler**. JavaScript und Buildskript zusätzlich mit `node --check` auf Syntax geprüft. Ein separates ESLint-Projekt ist nicht vorhanden.
- Statische Prüfung von Titles, Beschreibungen, Open Graph, Twitter, `lang`, H1 und Überschriftenhierarchie, Canonicals, Meta-Robots, JSON-LD, Referenzen, Sitemap, internen Links, Sprungzielen, Bildmaßen und `srcset`: **0 Fehler**.
- **54 Layoutprüfungen** der finalen Seitenstände: neun Seiten bei 320, 360, 390, 768, 1024 und 1440 Pixeln. Kein horizontaler Seitenüberlauf, keine sichtbaren defekten Bilder und keine fehlenden Ressourcen.
- **18 axe-core-Prüfungen**: neun Seiten bei 390 und 1440 Pixeln; keine gemeldeten Verstöße in den ausgeführten WCAG-/Best-Practice-Regeln. Einzelne manuelle Prüfungen bleiben erforderlich; dies ist keine vollständige Barrierefreiheitszertifizierung.
- Mobilnavigation, Escape, Seitennavigation, Produktgalerien per Klick und Pfeiltaste, vorhandene und neue FAQ, neuer Startseiten-Link und die Kosten-Sprungmarke geprüft. Navigation und neue Seite samt FAQ funktionieren ohne JavaScript.
- Nach der visuellen Textkorrektur wurden Startseite und neue Klimaanlagen-Seite gezielt erneut bei allen sechs Breiten, mit axe und Lighthouse geprüft. Die aktuellen Protokolle kombinieren diese Nachprüfung mit den unverändert gebliebenen Seiten des vollständigen Laufs.
- Alle neun Dateien liefern im lokalen Server 200, eine unbekannte URL liefert 404. Der direkte Abruf von `404.html` mit 200 ist dabei von einer tatsächlichen unbekannten Adresse mit HTTP 404 zu unterscheiden.
- Abschließender Browser-Smoke-Test: **0 Konsolenfehler**, **0 externe Netzwerk-Anfragen**, **0 Cookies**, **0 Local-/Session-Storage-Einträge**. Scroll-Einblendung mit normaler Bewegungseinstellung funktioniert.
- Produkt-Tabellenzellen und rechtliche Unternehmenszeilen mit der Sicherung vor SEO verglichen: **unverändert**. CSS und JavaScript bytegenau verglichen: **unverändert**. Mobil- und Desktopansichten von Start- und Klimaanlagen-Seite visuell kontrolliert.


## Offene Punkte und externe Schritte

**Deployment:** Die öffentliche Website zeigt noch den älteren Stand. Das fertige Paket muss separat in das tatsächlich veröffentlichende GitHub-Pages-Repository übernommen werden. `.nojekyll`, `CNAME`, CSS, Bilder, JavaScript, alle HTML-Seiten, `robots.txt` und `sitemap.xml` gemeinsam ausliefern. Danach HTTPS, Weiterleitungen, neue URLs, Datenschutzlinks, robots.txt, Sitemap und unbekannte URLs erneut live prüfen. Am Hosting wurden keine Änderungen vorgenommen.

**Search Console:** Für die bestehende Domain eine passende Property verwenden oder durch den Inhaber verifizieren. Nach dem Deployment `https://dual-kaelte.at/sitemap.xml` einreichen. Startseite und neue Klimaanlagen-Seite mit der URL-Prüfung einschließlich Live-Test kontrollieren; Google-Canonical, Indexierungsstatus und gemeldete Probleme prüfen. Die Indexierung relevanter neuer Inhalte anschließend anstoßen. Klicks und Impressionen nach Suchanfrage, Seite und Zeitraum auswerten. Ein eingereichter Sitemap-Eintrag ist keine Indexierungsgarantie. [Google-Anleitung zur Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start).

**Google Unternehmensprofil:** Vorhandenen Eintrag durch den Inhaber prüfen und gegebenenfalls übernehmen, statt einen zweiten Eintrag zu erzeugen. Tatsächlichen Namen, Trauner Adresse, Telefonnummer, Website und Geschäftszeiten einheitlich führen. Die am besten passende verfügbare Hauptkategorie nach der wirklichen Tätigkeit wählen; zusätzliche Kategorien nur für tatsächlich angebotene Leistungen. Servicegebiet Traun/Raum Linz und Leistungen für Installation, Wartung und Kältetechnik vollständig beschreiben. Störungsservice und normale Geschäftszeiten unterscheiden. Keine erfundene Linzer Filiale eintragen. Echte Fotos und freiwillige Kundenbewertungen ergänzen, sofern die Rechte vorliegen. Das Profil und die Kategorien wurden nicht eingesehen oder geändert. [Google zu lokaler Sichtbarkeit](https://support.google.com/business/answer/7091?hl=en).

**Lokale Nachweise und Inhalte:** Unternehmensdaten im WKO-Eintrag und relevanten echten Branchenverzeichnissen abgleichen. Mit Erlaubnis dokumentierte Projekte mit Ausgangslage, technischer Lösung und Bildern ergänzen. Erst wenn dafür eigenständige örtliche Inhalte vorliegen, zusätzliche Standortseiten erwägen. Keine automatisierte Masse an nahezu identischen Ortsseiten veröffentlichen.

**Messung:** Search Console genügt zunächst für Suchleistungsdaten. Google Analytics ist für SEO keine Voraussetzung und wurde nicht eingebaut. Falls zusätzliche Besucherstatistik gewünscht wird, sind die konkrete Lösung und die erforderlichen Datenschutz-/Einwilligungsmaßnahmen vorher festzulegen. INP, echte Core-Web-Vitals-Felddaten, tatsächliche Google-Rangpositionen, Suchvolumen, Search-Console-Berichte und das Unternehmensprofil wurden nicht gemessen. Browserprüfungen nutzten Chromium/Edge; Safari/iOS, Firefox und echte Screenreader wurden nicht getestet.

**Hosting-Grenzen:** Eigene Cache-/Sicherheitsheader und frei definierbare serverseitige 301-Regeln lassen sich auf GitHub Pages nicht durch diese HTML-Dateien einrichten. Die vorhandenen öffentlich geprüften HTTPS-/www-Weiterleitungen funktionieren bereits. GitHub-Pages-Nutzungsbedingungen für geschäftliche Angebote bleiben zu beachten; keine neue Verkaufs- oder Buchungsabwicklung wurde eingebaut.

**Bestehende Freigabepunkte:** Die zuvor noch nicht bestätigten Bild-/Logorechte und die tatsächlichen E-Mail-Vertragsdaten bleiben in `Veroeffentlichung.md` dokumentiert. Diese SEO-Arbeit bestätigt keine unbekannten Nutzungsrechte oder betrieblichen Datenschutzvereinbarungen. Die Online-Terminvereinbarung bleibt geschlossen; der 1. Februar 2027 ist eine übernommene Planung, keine automatische Freigabe.

## Übergabedateien

- `SEO-REPORT.md`: dieser vollständige Bericht, auch im Projektordner vorhanden.
- `DUAL-SEO.zip`: vollständige aktuelle Website mit neuer Klimaanlagen-Seite, CNAME und `.nojekyll`.
- `DUAL-Redesign.zip`: ebenfalls auf dieselbe aktuelle Website-Fassung gebracht.
- `DUAL-Vor-SEO.zip`: vollständige Sicherung des Desktop-Projekts unmittelbar vor dieser Arbeit, einschließlich vorhandener Originalbilder.
- `seo-before-audit.json`, `seo-static-tests.json`, `seo-html-validation.json`: Analyse und lokale Prüfungen.
- `seo-live-before.json`: tatsächliche HTTP-Prüfung der öffentlichen älteren Fassung.
- `seo-lighthouse-before.json`, `seo-lighthouse-before-*.json`: unmittelbare Vergleichsmessung vor SEO.
- `seo-qa/browser-tests.json`, `seo-qa/lighthouse-summary.json`, `seo-qa/lighthouse-*.html`/`.json`: aktuelle Browserprüfungen und Performance-Berichte.
- `seo-console-smoke-tests.json`: Funktions-, Netzwerk-, Cookie- und lokale Statusprüfung.
- `seo-transfer-verification.json`: Dateivergleich und SHA-256-Nachweis der Übernahme in den Desktop-Projektordner.
- `seo-qa/Startseite-Vorschau-390.png`, `seo-qa/Klimaanlagen-Vorschau-1440.png`: kompakte Vorschauen.

