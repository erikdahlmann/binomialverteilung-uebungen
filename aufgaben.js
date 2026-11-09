// Anwendungsaufgaben zur Binomialverteilung. Alle Werte mit Python nachgerechnet (auf 4 Stellen gerundet).
// stufe: 1 = Einstieg (genau k), 2 = kumuliert (F), 3 = Abiturniveau.
// diagramm: {n, p, regler?: "n"|"p", min, max, schritt} → Histogramm zur Aufgabe.
// zeige: {von, bis, n?, p?} → markiert das Ereignis im Diagramm (bis: Infinity = bis n).
// erg: Ergebnisprüfung; tol: erlaubte Abweichung (Standard 0,0006); ganzzahl: exakte ganze Zahl.
const t = String.raw;
const ALLE = Infinity;

export const AUFGABEN = [
  // ───────────── Stufe 1: genau k ─────────────
  {
    nr: 1,
    stufe: 1,
    titel: "Das Glücksrad am Schulfest",
    bild: "01-gluecksrad",
    text: t`Das Glücksrad hat vier gleich große Felder. Eines ist orange, bei Orange gibt es einen Preis. Jonas dreht das Rad achtmal.`,
    diagramm: { n: 8, p: 0.25 },
    teile: [
      {
        frage: t`Begründe, dass die Anzahl \(X\) der orangen Felder binomialverteilt ist. Gib \(n\) und \(p\) an.`,
        loesung: [
          t`p:Jede Drehung hat zwei Ausgänge, die uns interessieren: Orange (Treffer) oder nicht Orange.`,
          t`p:Die Wahrscheinlichkeit für Orange ist bei jeder Drehung gleich, und die Drehungen beeinflussen sich nicht.`,
          t`p:Also ist \(X\) binomialverteilt mit \(n = 8\) und \(p = \tfrac14 = 0{,}25\).`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit landet das Rad genau zweimal auf Orange?`,
        erg: 0.3115,
        zeige: { von: 2, bis: 2 },
        loesung: [t`P(X=2) = \binom{8}{2}\cdot 0{,}25^2\cdot 0{,}75^6 = 28\cdot 0{,}0625\cdot 0{,}17798 \approx 0{,}3115`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit gewinnt Jonas nie?`,
        erg: 0.1001,
        zeige: { von: 0, bis: 0 },
        loesung: [t`P(X=0) = 0{,}75^8 \approx 0{,}1001`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit gewinnt er mindestens einmal?`,
        erg: 0.8999,
        zeige: { von: 1, bis: ALLE },
        tipp: t`„Mindestens einmal“ ist das Gegenteil von „nie“.`,
        loesung: [
          t`p:Das Gegenereignis von „mindestens einmal“ ist „keinmal“.`,
          t`P(X\ge 1) = 1 - P(X=0) = 1 - 0{,}75^8 \approx 0{,}8999`,
        ],
      },
    ],
  },
  {
    nr: 2,
    stufe: 1,
    titel: "Rot an der Ampel",
    bild: "02-ampel",
    text: t`Wenn Elif morgens an die Fußgängerampel kommt, zeigt sie in 40 % der Fälle Rot. Wir betrachten 10 Schultage.`,
    diagramm: { n: 10, p: 0.4 },
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit muss Elif an genau 4 Tagen warten?`,
        erg: 0.2508,
        zeige: { von: 4, bis: 4 },
        loesung: [
          t`X:\ \text{Anzahl der Tage mit Rot},\quad n = 10,\ p = 0{,}4`,
          t`P(X=4) = \binom{10}{4}\cdot 0{,}4^4\cdot 0{,}6^6 = 210\cdot 0{,}0256\cdot 0{,}046656 \approx 0{,}2508`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit hat sie an allen 10 Tagen Grün?`,
        erg: 0.006,
        zeige: { von: 0, bis: 0 },
        loesung: [t`P(X=0) = 0{,}6^{10} \approx 0{,}0060`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit muss sie höchstens zweimal warten?`,
        erg: 0.1673,
        zeige: { von: 0, bis: 2 },
        tipp: t`„Höchstens zweimal“ heißt 0, 1 oder 2 Mal. Addiere drei Werte.`,
        loesung: [
          t`P(X\le 2) = P(X=0) + P(X=1) + P(X=2)`,
          t`= 0{,}6^{10} + 10\cdot 0{,}4\cdot 0{,}6^9 + 45\cdot 0{,}4^2\cdot 0{,}6^8`,
          t`\approx 0{,}0060 + 0{,}0403 + 0{,}1209 = 0{,}1673`,
        ],
      },
      {
        frage: t`Warum ist das Modell nur eine Näherung? Nenne einen Grund.`,
        loesung: [
          t`p:Elif kommt jeden Tag etwa zur gleichen Zeit. Die Ampelschaltung ist fest. Dann hängen die Tage zusammen: Wer gestern bei Rot ankam, kommt heute vielleicht wieder bei Rot an.`,
          t`p:Die Bedingung „unabhängig mit gleichem \(p\)“ gilt also nur ungefähr.`,
        ],
      },
    ],
  },
  {
    nr: 3,
    stufe: 1,
    titel: "Linkshänder in der Klasse",
    bild: "03-linkshaender",
    text: t`Etwa 12 % aller Menschen schreiben mit links. In einer Klasse sind 25 Schülerinnen und Schüler. Wir tun so, als wären sie zufällig ausgewählt.`,
    diagramm: { n: 25, p: 0.12 },
    teile: [
      {
        frage: t`Wie viele Linkshänder erwartest du in der Klasse?`,
        erg: 3,
        tol: 0.01,
        loesung: [t`E(X) = n\cdot p = 25\cdot 0{,}12 = 3`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind es genau 3?`,
        erg: 0.2387,
        zeige: { von: 3, bis: 3 },
        loesung: [
          t`P(X=3) = \binom{25}{3}\cdot 0{,}12^3\cdot 0{,}88^{22} = 2300\cdot 0{,}001728\cdot 0{,}06006 \approx 0{,}2387`,
          t`p:Der Erwartungswert ist also nicht „sicher“. Er tritt nur in knapp einem Viertel der Klassen genau ein.`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit gibt es keinen einzigen Linkshänder?`,
        erg: 0.0409,
        zeige: { von: 0, bis: 0 },
        loesung: [t`P(X=0) = 0{,}88^{25} \approx 0{,}0409`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind es mindestens zwei?`,
        erg: 0.8195,
        zeige: { von: 2, bis: ALLE },
        tipp: t`Gegenereignis: 0 oder 1 Linkshänder.`,
        loesung: [
          t`P(X\ge 2) = 1 - P(X=0) - P(X=1)`,
          t`= 1 - 0{,}88^{25} - 25\cdot 0{,}12\cdot 0{,}88^{24} \approx 1 - 0{,}0409 - 0{,}1395 = 0{,}8195`,
        ],
      },
    ],
  },
  {
    nr: 4,
    stufe: 1,
    titel: "Rücksendungen im Onlineshop",
    bild: "04-ruecksendung",
    text: t`Ein Onlineshop für Kleidung weiß: 30 % der Pakete kommen zurück. An einem Vormittag verschickt er 15 Pakete.`,
    diagramm: { n: 15, p: 0.3 },
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit kommen genau 5 Pakete zurück?`,
        erg: 0.2061,
        zeige: { von: 5, bis: 5 },
        loesung: [t`P(X=5) = \binom{15}{5}\cdot 0{,}3^5\cdot 0{,}7^{10} = 3003\cdot 0{,}00243\cdot 0{,}02825 \approx 0{,}2061`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit kommt höchstens ein Paket zurück?`,
        erg: 0.0353,
        zeige: { von: 0, bis: 1 },
        loesung: [
          t`P(X\le 1) = 0{,}7^{15} + 15\cdot 0{,}3\cdot 0{,}7^{14} \approx 0{,}0047 + 0{,}0305 = 0{,}0353`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit kommen mindestens zwei Pakete zurück?`,
        erg: 0.9647,
        zeige: { von: 2, bis: ALLE },
        loesung: [t`P(X\ge 2) = 1 - P(X\le 1) \approx 1 - 0{,}0353 = 0{,}9647`],
      },
      {
        frage: t`Welche Anzahl an Rücksendungen ist am wahrscheinlichsten? Schau ins Diagramm und prüfe mit dem Rechner.`,
        erg: 4,
        ganzzahl: true,
        zeige: { von: 4, bis: 4 },
        loesung: [
          t`p:Der höchste Balken liegt bei \(k = 4\).`,
          t`P(X=4) \approx 0{,}2186 > P(X=5) \approx 0{,}2061 > P(X=3) \approx 0{,}1700`,
          t`p:Er liegt nahe beim Erwartungswert \(E(X) = 15\cdot 0{,}3 = 4{,}5\).`,
        ],
      },
    ],
  },

  // ───────────── Stufe 2: kumuliert ─────────────
  {
    nr: 5,
    stufe: 2,
    titel: "Fehlerhafte Displays",
    bild: "05-displays",
    text: t`Bei der Herstellung von Smartphone-Displays sind 5 % fehlerhaft. Die Qualitätskontrolle nimmt 50 Displays heraus. Ab hier hilft die kumulierte Wahrscheinlichkeit \(F_{n;p}(k) = P(X\le k)\).`,
    diagramm: { n: 50, p: 0.05 },
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind höchstens 2 Displays fehlerhaft?`,
        erg: 0.5405,
        zeige: { von: 0, bis: 2 },
        loesung: [
          t`X:\ \text{Anzahl fehlerhafter Displays},\quad n = 50,\ p = 0{,}05`,
          t`P(X\le 2) = F_{50;\,0{,}05}(2) \approx 0{,}5405`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind mindestens 3 fehlerhaft?`,
        erg: 0.4595,
        zeige: { von: 3, bis: ALLE },
        loesung: [t`P(X\ge 3) = 1 - P(X\le 2) = 1 - F_{50;\,0{,}05}(2) \approx 1 - 0{,}5405 = 0{,}4595`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind mehr als 4 fehlerhaft?`,
        erg: 0.1036,
        zeige: { von: 5, bis: ALLE },
        tipp: t`„Mehr als 4“ heißt „mindestens 5“. Das Gegenereignis ist „höchstens 4“.`,
        loesung: [t`P(X > 4) = P(X\ge 5) = 1 - F_{50;\,0{,}05}(4) \approx 1 - 0{,}8964 = 0{,}1036`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind mindestens 2 und höchstens 4 fehlerhaft?`,
        erg: 0.617,
        zeige: { von: 2, bis: 4 },
        tipp: t`Nimm alles bis 4 und zieh alles bis 1 ab. Schau dir die markierten Balken an.`,
        loesung: [
          t`P(2\le X\le 4) = F_{50;\,0{,}05}(4) - F_{50;\,0{,}05}(1) \approx 0{,}8964 - 0{,}2794 = 0{,}6170`,
          t`p:Achtung: Man zieht \(F(1)\) ab, nicht \(F(2)\). Sonst fehlt der Balken bei 2.`,
        ],
      },
    ],
  },
  {
    nr: 6,
    stufe: 2,
    titel: "Der Schulbus kommt zu spät",
    bild: "06-bus",
    text: t`Der Schulbus kommt an 20 % der Tage zu spät. Ein Monat hat 20 Schultage. Die Tage sollen unabhängig sein.`,
    diagramm: { n: 20, p: 0.2 },
    teile: [
      {
        frage: t`An wie vielen Tagen ist der Bus im Mittel zu spät?`,
        erg: 4,
        tol: 0.01,
        loesung: [t`E(X) = 20\cdot 0{,}2 = 4`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit ist er an höchstens 5 Tagen zu spät?`,
        erg: 0.8042,
        zeige: { von: 0, bis: 5 },
        loesung: [t`P(X\le 5) = F_{20;\,0{,}2}(5) \approx 0{,}8042`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit ist er an weniger als 4 Tagen zu spät?`,
        erg: 0.4114,
        zeige: { von: 0, bis: 3 },
        tipp: t`„Weniger als 4“ heißt „höchstens 3“.`,
        loesung: [t`P(X < 4) = P(X\le 3) = F_{20;\,0{,}2}(3) \approx 0{,}4114`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit ist er an mehr als 5 Tagen zu spät?`,
        erg: 0.1958,
        zeige: { von: 6, bis: ALLE },
        loesung: [t`P(X > 5) = 1 - F_{20;\,0{,}2}(5) \approx 1 - 0{,}8042 = 0{,}1958`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit ist er an mindestens 3 und höchstens 7 Tagen zu spät?`,
        erg: 0.7618,
        zeige: { von: 3, bis: 7 },
        loesung: [t`P(3\le X\le 7) = F_{20;\,0{,}2}(7) - F_{20;\,0{,}2}(2) \approx 0{,}9679 - 0{,}2061 = 0{,}7618`],
      },
    ],
  },
  {
    nr: 7,
    stufe: 2,
    titel: "Kontrolle in der Straßenbahn",
    bild: "07-kontrolle",
    text: t`In der Straßenbahn fahren 4 % der Fahrgäste ohne gültiges Ticket. Ein Kontrolleur prüft an einem Morgen 100 Fahrgäste.`,
    diagramm: { n: 100, p: 0.04 },
    teile: [
      {
        frage: t`Wie viele Fahrgäste ohne Ticket erwartet der Kontrolleur?`,
        erg: 4,
        tol: 0.01,
        loesung: [t`E(X) = 100\cdot 0{,}04 = 4`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit erwischt er höchstens 3?`,
        erg: 0.4295,
        zeige: { von: 0, bis: 3 },
        loesung: [t`P(X\le 3) = F_{100;\,0{,}04}(3) \approx 0{,}4295`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit erwischt er mindestens 5?`,
        erg: 0.3711,
        zeige: { von: 5, bis: ALLE },
        loesung: [t`P(X\ge 5) = 1 - F_{100;\,0{,}04}(4) \approx 1 - 0{,}6289 = 0{,}3711`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind es zwischen 2 und 6 (beide eingeschlossen)?`,
        erg: 0.8064,
        zeige: { von: 2, bis: 6 },
        loesung: [t`P(2\le X\le 6) = F_{100;\,0{,}04}(6) - F_{100;\,0{,}04}(1) \approx 0{,}8936 - 0{,}0872 = 0{,}8064`],
      },
    ],
  },
  {
    nr: 8,
    stufe: 2,
    titel: "Der erste Aufschlag",
    bild: "08-tennis",
    text: t`Eine Tennisspielerin bringt 65 % ihrer ersten Aufschläge ins Feld. In einem Match schlägt sie 50-mal zum ersten Mal auf.`,
    diagramm: { n: 50, p: 0.65 },
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind genau 33 erste Aufschläge gut?`,
        erg: 0.1171,
        zeige: { von: 33, bis: 33 },
        loesung: [t`P(X=33) = \binom{50}{33}\cdot 0{,}65^{33}\cdot 0{,}35^{17} \approx 0{,}1171`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind mindestens 30 gut?`,
        erg: 0.8139,
        zeige: { von: 30, bis: ALLE },
        loesung: [t`P(X\ge 30) = 1 - F_{50;\,0{,}65}(29) \approx 1 - 0{,}1861 = 0{,}8139`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind mindestens 28 und höchstens 36 gut?`,
        erg: 0.8127,
        zeige: { von: 28, bis: 36 },
        loesung: [t`P(28\le X\le 36) = F_{50;\,0{,}65}(36) - F_{50;\,0{,}65}(27) \approx 0{,}8837 - 0{,}0710 = 0{,}8127`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit sind mehr als 36 gut?`,
        erg: 0.1163,
        zeige: { von: 37, bis: ALLE },
        loesung: [t`P(X > 36) = 1 - F_{50;\,0{,}65}(36) \approx 1 - 0{,}8837 = 0{,}1163`],
      },
    ],
  },
  {
    nr: 9,
    stufe: 2,
    titel: "Umfrage zum Streaming",
    bild: "09-streaming",
    text: t`35 % der Jugendlichen nutzen einen bestimmten Streamingdienst. Für eine Umfrage werden 80 Jugendliche zufällig ausgewählt.`,
    diagramm: { n: 80, p: 0.35 },
    teile: [
      {
        frage: t`Berechne den Erwartungswert \(\mu\).`,
        erg: 28,
        tol: 0.01,
        loesung: [t`\mu = n\cdot p = 80\cdot 0{,}35 = 28`],
      },
      {
        frage: t`Berechne die Standardabweichung \(\sigma\) (zwei Nachkommastellen reichen).`,
        erg: 4.2661,
        tol: 0.006,
        loesung: [t`\sigma = \sqrt{n\cdot p\cdot (1-p)} = \sqrt{80\cdot 0{,}35\cdot 0{,}65} = \sqrt{18{,}2} \approx 4{,}27`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit nutzen mindestens 20 und höchstens 30 der Befragten den Dienst?`,
        erg: 0.7027,
        zeige: { von: 20, bis: 30 },
        loesung: [t`P(20\le X\le 30) = F_{80;\,0{,}35}(30) - F_{80;\,0{,}35}(19) \approx 0{,}7235 - 0{,}0208 = 0{,}7027`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit liegt \(X\) im Intervall \([\mu-\sigma;\ \mu+\sigma]\)?`,
        erg: 0.7087,
        zeige: { von: 24, bis: 32 },
        tipp: t`Rechne die Grenzen aus. Welche ganzen Zahlen liegen dazwischen?`,
        loesung: [
          t`[\mu-\sigma;\ \mu+\sigma] \approx [23{,}73;\ 32{,}27]`,
          t`p:Darin liegen die ganzen Zahlen 24 bis 32.`,
          t`P(24\le X\le 32) = F_{80;\,0{,}35}(32) - F_{80;\,0{,}35}(23) \approx 0{,}8540 - 0{,}1454 = 0{,}7086`,
          t`p:Mit genauen Werten ergibt sich 0,7087. Faustregel: Etwa 68 % liegen in der \(\sigma\)-Umgebung, bei ganzen Zahlen oft etwas mehr.`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit nutzen mehr als 35 den Dienst?`,
        erg: 0.0411,
        zeige: { von: 36, bis: ALLE },
        loesung: [t`P(X > 35) = 1 - F_{80;\,0{,}35}(35) \approx 1 - 0{,}9589 = 0{,}0411`],
      },
    ],
  },

  // ───────────── Stufe 3: Abiturniveau ─────────────
  {
    nr: 10,
    stufe: 3,
    titel: "Das ausgebuchte Restaurant",
    bild: "10-restaurant",
    text: t`Ein Restaurant hat 50 Plätze. Erfahrungsgemäß erscheinen nur 90 % der Gäste mit Reservierung. Deshalb nimmt das Restaurant 54 Reservierungen an (je eine Person).`,
    diagramm: { n: 54, p: 0.9, regler: "n", min: 50, max: 60, schritt: 1 },
    teile: [
      {
        frage: t`Wie viele Gäste erscheinen im Mittel?`,
        erg: 48.6,
        tol: 0.01,
        loesung: [t`Y:\ \text{Anzahl erscheinender Gäste},\quad E(Y) = 54\cdot 0{,}9 = 48{,}6`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit bekommen alle erscheinenden Gäste einen Platz?`,
        erg: 0.8015,
        zeige: { von: 0, bis: 50, n: 54 },
        loesung: [
          t`p:Alle bekommen einen Platz, wenn höchstens 50 Gäste kommen.`,
          t`P(Y\le 50) = F_{54;\,0{,}9}(50) \approx 0{,}8015`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit bleibt mindestens ein Platz frei?`,
        erg: 0.6386,
        zeige: { von: 0, bis: 49, n: 54 },
        loesung: [t`P(Y\le 49) = F_{54;\,0{,}9}(49) \approx 0{,}6386`],
      },
      {
        frage: t`Wie viele Reservierungen darf das Restaurant höchstens annehmen, damit mit mindestens 90 % alle einen Platz bekommen? Nutze den Regler am Diagramm oder den Rechner.`,
        erg: 53,
        ganzzahl: true,
        zeige: { von: 0, bis: 50, n: 53 },
        tipp: t`Gesucht ist das größte \(n\) mit \(F_{n;\,0{,}9}(50)\ge 0{,}9\). Probiere \(n = 52, 53, 54\).`,
        loesung: [
          t`F_{52;\,0{,}9}(50) \approx 0{,}9717 \qquad F_{53;\,0{,}9}(50) \approx 0{,}9102 \qquad F_{54;\,0{,}9}(50) \approx 0{,}8015`,
          t`p:Bei 53 Reservierungen klappt es noch mit gut 91 %, bei 54 nicht mehr. Also höchstens 53 Reservierungen.`,
        ],
      },
    ],
  },
  {
    nr: 11,
    stufe: 3,
    titel: "Gewinncodes im Müsli",
    bild: "11-muesli",
    text: t`In 8 % der Müslipackungen steckt ein Gewinncode. Die Packungen sind zufällig verteilt.`,
    diagramm: { n: 36, p: 0.08, regler: "n", min: 5, max: 80, schritt: 1 },
    teile: [
      {
        frage: t`Lisa kauft 10 Packungen. Mit welcher Wahrscheinlichkeit findet sie mindestens einen Code?`,
        erg: 0.5656,
        zeige: { von: 1, bis: ALLE, n: 10 },
        loesung: [t`P(X\ge 1) = 1 - 0{,}92^{10} \approx 0{,}5656`],
      },
      {
        frage: t`Wie viele Packungen muss man mindestens kaufen, um mit mindestens 95 % Wahrscheinlichkeit mindestens einen Code zu finden?`,
        erg: 36,
        ganzzahl: true,
        zeige: { von: 1, bis: ALLE, n: 36 },
        tipp: t`Stelle die Ungleichung \(1 - 0{,}92^n \ge 0{,}95\) auf und löse sie mit dem Logarithmus.`,
        loesung: [
          t`1 - 0{,}92^n \ge 0{,}95 \iff 0{,}92^n \le 0{,}05`,
          t`\iff n \ge \frac{\ln 0{,}05}{\ln 0{,}92} \approx 35{,}93`,
          t`p:Das Ungleichheitszeichen dreht sich, weil \(\ln 0{,}92 < 0\) ist. Also mindestens \(n = 36\) Packungen.`,
          t`p:Probe: \(1 - 0{,}92^{35} \approx 0{,}9460\) ist zu wenig, \(1 - 0{,}92^{36} \approx 0{,}9503\) reicht.`,
        ],
      },
      {
        frage: t`Wie viele Packungen braucht man, um mit mindestens 90 % mindestens zwei Codes zu finden?`,
        erg: 48,
        ganzzahl: true,
        zeige: { von: 2, bis: ALLE, n: 48 },
        tipp: t`Hier hilft kein Logarithmus. Gesucht ist das kleinste \(n\) mit \(1 - F_{n;\,0{,}08}(1)\ge 0{,}9\). Probiere mit dem Rechner.`,
        loesung: [
          t`P(X\ge 2) = 1 - F_{n;\,0{,}08}(1)`,
          t`n = 47:\ 1 - 0{,}1010 = 0{,}8990 \qquad n = 48:\ 1 - 0{,}0945 = 0{,}9055`,
          t`p:Man braucht mindestens 48 Packungen.`,
        ],
      },
    ],
  },
  {
    nr: 12,
    stufe: 3,
    titel: "Treffer in die Mitte",
    bild: "12-bogenschiessen",
    text: t`Ein Bogenschütze trifft die gelbe Mitte der Scheibe mit der Wahrscheinlichkeit \(p\). Er schießt 10 Pfeile. Hier ist \(p\) die Unbekannte.`,
    diagramm: { n: 10, p: 0.3, regler: "p", min: 0.05, max: 0.95, schritt: 0.01 },
    teile: [
      {
        frage: t`Sei \(p = 0{,}3\). Mit welcher Wahrscheinlichkeit trifft er mindestens dreimal die Mitte?`,
        erg: 0.6172,
        zeige: { von: 3, bis: ALLE, p: 0.3 },
        loesung: [t`P(X\ge 3) = 1 - F_{10;\,0{,}3}(2) \approx 1 - 0{,}3828 = 0{,}6172`],
      },
      {
        frage: t`Wie groß muss \(p\) mindestens sein, damit er mit mindestens 90 % Wahrscheinlichkeit wenigstens einmal die Mitte trifft?`,
        erg: 0.2057,
        zeige: { von: 1, bis: ALLE, p: 0.21 },
        tipp: t`\(P(X\ge 1) = 1-(1-p)^{10}\). Löse nach \(p\) auf.`,
        loesung: [
          t`1 - (1-p)^{10} \ge 0{,}9 \iff (1-p)^{10} \le 0{,}1`,
          t`\iff 1 - p \le \sqrt[10]{0{,}1} \approx 0{,}7943 \iff p \ge 0{,}2057`,
          t`p:Er muss also in mindestens etwa 20,6 % der Schüsse die Mitte treffen.`,
        ],
      },
      {
        frage: t`Wie groß muss \(p\) mindestens sein, damit er mit mindestens 85 % mindestens dreimal trifft? Gib \(p\) auf ganze Prozent an. Nutze den Regler.`,
        erg: 0.42,
        tol: 0.0049,
        zeige: { von: 3, bis: ALLE, p: 0.42 },
        tipp: t`Gesucht ist das kleinste \(p\) mit \(1 - F_{10;\,p}(2)\ge 0{,}85\). Das geht nur durch Probieren.`,
        loesung: [
          t`p = 0{,}41:\ 1 - F_{10;\,0{,}41}(2) \approx 1 - 0{,}1517 = 0{,}8483 \quad (\text{zu wenig})`,
          t`p = 0{,}42:\ 1 - F_{10;\,0{,}42}(2) \approx 1 - 0{,}1372 = 0{,}8628 \quad (\text{reicht})`,
          t`p:Er braucht eine Trefferquote von mindestens 42 %.`,
        ],
      },
    ],
  },
  {
    nr: 13,
    stufe: 3,
    titel: "Kartons voller Chips",
    bild: "13-chipfabrik",
    text: t`5 % der Mikrochips einer Fabrik sind defekt. Die Chips kommen in Kartons zu je 20 Stück. Ein Kunde prüft jeden Karton ganz. Er nimmt ihn an, wenn höchstens ein Chip defekt ist.`,
    diagramm: { n: 20, p: 0.05 },
    teile: [
      {
        frage: t`Mit welcher Wahrscheinlichkeit wird ein Karton angenommen?`,
        erg: 0.7358,
        zeige: { von: 0, bis: 1, n: 20, p: 0.05 },
        loesung: [
          t`X:\ \text{defekte Chips im Karton},\quad n = 20,\ p = 0{,}05`,
          t`P(X\le 1) = 0{,}95^{20} + 20\cdot 0{,}05\cdot 0{,}95^{19} \approx 0{,}3585 + 0{,}3774 = 0{,}7358`,
        ],
      },
      {
        frage: t`Eine Lieferung hat 10 Kartons. \(Y\) ist die Anzahl angenommener Kartons. Begründe, dass \(Y\) binomialverteilt ist. Gib \(n\) und \(p\) an.`,
        loesung: [
          t`p:Jeder Karton wird angenommen oder nicht. Die Kartons sind unabhängig, und jeder wird mit derselben Wahrscheinlichkeit angenommen.`,
          t`p:Also ist \(Y\) binomialverteilt mit \(n = 10\) und \(p \approx 0{,}7358\), dem Ergebnis aus a).`,
          t`p:Das ist eine zweistufige Aufgabe: Die erste Binomialverteilung liefert das \(p\) der zweiten.`,
        ],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit werden mindestens 8 der 10 Kartons angenommen?`,
        erg: 0.4835,
        zeige: { von: 8, bis: ALLE, n: 10, p: 0.73584 },
        loesung: [t`P(Y\ge 8) = 1 - F_{10;\,0{,}7358}(7) \approx 1 - 0{,}5165 = 0{,}4835`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit werden alle 10 Kartons angenommen?`,
        erg: 0.0465,
        zeige: { von: 10, bis: 10, n: 10, p: 0.73584 },
        loesung: [
          t`P(Y=10) = 0{,}7358^{10} \approx 0{,}0465`,
          t`p:Obwohl 95 % der Chips gut sind, ist eine ganz fehlerfreie Abnahme sehr selten.`,
        ],
      },
      {
        frage: t`Wie viele Kartons werden im Mittel angenommen?`,
        erg: 7.358,
        tol: 0.01,
        loesung: [t`E(Y) = 10\cdot 0{,}7358 \approx 7{,}36`],
      },
    ],
  },
  {
    nr: 14,
    stufe: 3,
    titel: "Der Cola-Test",
    bild: "14-colatest",
    text: t`Tim behauptet, er schmeckt seine Lieblingscola heraus. Er macht 20 Blindproben. Bei jeder Probe stehen zwei Becher vor ihm, nur einer enthält seine Marke. Wenn Tim nur rät, liegt er jedes Mal mit \(p = 0{,}5\) richtig.`,
    diagramm: { n: 20, p: 0.5, regler: "p", min: 0.3, max: 0.95, schritt: 0.05 },
    teile: [
      {
        frage: t`Angenommen, Tim rät nur. Mit welcher Wahrscheinlichkeit hat er trotzdem mindestens 15 Treffer?`,
        erg: 0.0207,
        zeige: { von: 15, bis: ALLE, p: 0.5 },
        loesung: [t`P(X\ge 15) = 1 - F_{20;\,0{,}5}(14) \approx 1 - 0{,}9793 = 0{,}0207`],
      },
      {
        frage: t`Ab wie vielen Treffern \(k\) glauben wir Tim? Die Wahrscheinlichkeit, mit Raten mindestens \(k\) Treffer zu schaffen, soll höchstens 5 % sein.`,
        erg: 15,
        ganzzahl: true,
        zeige: { von: 15, bis: ALLE, p: 0.5 },
        tipp: t`Gesucht ist das kleinste \(k\) mit \(1 - F_{20;\,0{,}5}(k-1)\le 0{,}05\).`,
        loesung: [
          t`k = 14:\ 1 - F_{20;\,0{,}5}(13) \approx 1 - 0{,}9423 = 0{,}0577 \quad (\text{zu groß})`,
          t`k = 15:\ 1 - F_{20;\,0{,}5}(14) \approx 1 - 0{,}9793 = 0{,}0207 \quad (\text{passt})`,
          t`p:Ab 15 Treffern glauben wir ihm. So denkt man auch beim Hypothesentest.`,
        ],
      },
      {
        frage: t`Tim erkennt seine Cola wirklich, und zwar mit 80 %. Mit welcher Wahrscheinlichkeit besteht er den Test (mindestens 15 Treffer)?`,
        erg: 0.8042,
        zeige: { von: 15, bis: ALLE, p: 0.8 },
        loesung: [t`P(X\ge 15) = 1 - F_{20;\,0{,}8}(14) \approx 1 - 0{,}1958 = 0{,}8042`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit fällt Tim durch, obwohl er es kann?`,
        erg: 0.1958,
        zeige: { von: 0, bis: 14, p: 0.8 },
        loesung: [
          t`P(X\le 14) = F_{20;\,0{,}8}(14) \approx 0{,}1958`,
          t`p:Fast jedes fünfte Mal fällt ein echter Kenner durch. Eine strengere Regel macht das noch schlimmer.`,
        ],
      },
    ],
  },
  {
    nr: 15,
    stufe: 3,
    titel: "Die Fähre zur Insel",
    bild: "15-faehre",
    text: t`Die Fähre zur Insel fällt an jedem Tag mit 3 % Wahrscheinlichkeit wegen Sturm aus. Wir betrachten ein Jahr mit 365 Tagen und nehmen an, dass die Tage unabhängig sind.`,
    diagramm: { n: 365, p: 0.03, regler: "p", min: 0.01, max: 0.06, schritt: 0.001 },
    teile: [
      {
        frage: t`Berechne den Erwartungswert \(\mu\) der Ausfalltage.`,
        erg: 10.95,
        tol: 0.01,
        loesung: [t`\mu = 365\cdot 0{,}03 = 10{,}95`],
      },
      {
        frage: t`Berechne die Standardabweichung \(\sigma\) (zwei Nachkommastellen).`,
        erg: 3.2591,
        tol: 0.006,
        loesung: [t`\sigma = \sqrt{365\cdot 0{,}03\cdot 0{,}97} = \sqrt{10{,}6215} \approx 3{,}26`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit fällt die Fähre an höchstens 10 Tagen aus?`,
        erg: 0.4641,
        zeige: { von: 0, bis: 10, p: 0.03 },
        loesung: [t`P(X\le 10) = F_{365;\,0{,}03}(10) \approx 0{,}4641`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit fällt sie an mehr als 15 Tagen aus?`,
        erg: 0.0867,
        zeige: { von: 16, bis: ALLE, p: 0.03 },
        loesung: [t`P(X > 15) = 1 - F_{365;\,0{,}03}(15) \approx 1 - 0{,}9133 = 0{,}0867`],
      },
      {
        frage: t`Mit welcher Wahrscheinlichkeit liegt die Zahl der Ausfalltage in der \(\sigma\)-Umgebung \([\mu-\sigma;\ \mu+\sigma]\)?`,
        erg: 0.7185,
        zeige: { von: 8, bis: 14, p: 0.03 },
        loesung: [
          t`[\mu-\sigma;\ \mu+\sigma] \approx [7{,}69;\ 14{,}21] \ \Rightarrow\ 8\le X\le 14`,
          t`P(8\le X\le 14) = F_{365;\,0{,}03}(14) - F_{365;\,0{,}03}(7) \approx 0{,}8610 - 0{,}1425 = 0{,}7185`,
        ],
      },
      {
        frage: t`Die Reederei verspricht: „Mit mindestens 95 % fallen höchstens 15 Fahrten im Jahr aus.“ Wie groß darf die Ausfallwahrscheinlichkeit \(p\) höchstens sein? Gib \(p\) auf 0,1 % genau an. Nutze den Regler.`,
        erg: 0.027,
        tol: 0.0004,
        zeige: { von: 0, bis: 15, p: 0.027 },
        tipp: t`Gesucht ist das größte \(p\) mit \(F_{365;\,p}(15)\ge 0{,}95\). Bei \(p = 0{,}03\) sind es nur 0,9133.`,
        loesung: [
          t`F_{365;\,0{,}027}(15) \approx 0{,}9584 \qquad F_{365;\,0{,}028}(15) \approx 0{,}9458`,
          t`p:Die Ausfallwahrscheinlichkeit darf höchstens 2,7 % sein. Bei 3 % hält die Reederei ihr Versprechen nicht.`,
        ],
      },
      {
        frage: t`Ist die Annahme „die Tage sind unabhängig“ hier sinnvoll? Begründe kurz.`,
        loesung: [
          t`p:Eher nicht. Stürme dauern oft mehrere Tage, und im Winter gibt es mehr Stürme als im Sommer.`,
          t`p:Ausfalltage kommen also gehäuft vor, und \(p\) ist nicht an jedem Tag gleich. Das Modell ist nur eine grobe Näherung.`,
        ],
      },
    ],
  },
];
