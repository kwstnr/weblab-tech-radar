# Fazit & Reflexion

## Reflexion über das Projekt

Der Tech-Radar hat mir eine gute Möglichkeit geboten, mich mit bekannten Technologien in neuen Sprachen auszuprobieren. In meinem beruflichen Alltag arbeite ich viel mit dem HotChocolate .NET GraphQL-Framework, um GraphQL-APIs zu entwickeln. Dieses Projekt bot mir die Gelegenheit, eine andere Anwendung der GraphQL-Spezifikation auszuprobieren.

Ich habe mich bewusst für einen Node.js Apollo Server entschieden, um den Server von Grund auf selbst aufzubauen und dabei auf möglichst viel Abstraktion durch Frameworks wie Nest.js zu verzichten. Dadurch konnte ich besser verstehen, welche Aufgaben solche Frameworks den Entwicklern abnehmen und welchen Aufwand es bedeutet, diese selbst umzusetzen.

Einige der grundlegenden Funktionen, die in Frameworks oft selbstverständlich sind – wie ein Dependency-Injection-Container, die automatische GraphQL-Schema-Generierung oder abstrahierte MongoDB-Repositories – existierten in meiner Umgebung nicht. 

Das dynamische Typing von TypeScript und die funktionale, immutable Programmierung mit RxJS haben mir wieder richtig Spaß gemacht. Solche Themen habe ich sehr vermisst, seit ich mich vermehrt in der .NET/C#-Welt bewege.

## Technische Umsetzung

Ich konnte das GraphQL-Context-Objekt nutzen, um Services zu instanzieren und an die Resolver-Funktionen zu übergeben. Damit habe ich eine eigene Art von Dependency-Injection-Container aufgebaut. Auf eine automatische Schema-Generierung habe ich bewusst verzichtet, allerdings nicht, ohne mir einige Gedanken dazu zu machen. Hätte ich mehr Zeit zur Verfügung gehabt, hätte ich möglicherweise sogar einen Parser entwickelt, der zur Laufzeit das Schema aus den Resolvern und Typen generiert.

Für die Datenbankanbindung und die Repository-Struktur habe ich mich von .NET EFCore DBContext inspirieren lassen und ein ähnliches Konstrukt für meinen Server erstellt.

Die Authentifizierung und Autorisierung habe ich nach bekannten Best Practices implementiert. In einer produktiven Umgebung sollte man solche Sicherheitsaspekte nicht selbst umsetzen, aber genau für solche Experimente eignet sich die Lernumgebung der Hochschule.

## Optimierungspotenzial

Rückblickend würde ich in einem weiteren Schulprojekt einige meiner Implementierungsansätze optimieren. Ein Beispiel dafür ist, dass aktuell alle Services im Context-Objekt immer erzeugt werden, auch wenn sie nicht verwendet werden. Dies könnte verbessert werden, indem Service-Factory-Funktionen in den Context injiziert werden, sodass die Resolver die benötigten Services erst bei Bedarf instanzieren.

## Herausforderungen im Frontend

Da ich bereits berufliche Erfahrung mit Angular habe, wollte ich mich in diesem Projekt stärker mit der visuellen Darstellung des Tech-Radars befassen. Leider blieb mir aufgrund des hohen Zeitaufwands für das Backend nur noch begrenzt Zeit, um die Frontend-Darstellung weiterzuentwickeln.

Mein ursprünglicher Plan war es, die Kategorien als eine Grafik darzustellen und die Technologien in einer zweiten Grafik darüber zu legen. Dazu hätte ich die Positionen der einzelnen Technologien dynamisch berechnen müssen. Da Kategorien und Technologien in diesem Ansatz als zwei separate Ebenen visualisiert worden wären, hätte dies eine komplexe Logik zur Platzierung erfordert.

Leider konnte ich diese Idee nicht vollständig umsetzen und musste mich auf eine einfachere Darstellung beschränken. In einem zukünftigen Projekt würde ich meine Zeit besser zwischen Backend- und Frontend-Experimenten aufteilen, um beide Bereiche gleichermaßen zu vertiefen.
