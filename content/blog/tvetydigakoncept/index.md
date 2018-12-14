---
title: 'Tvetydiga koncept i en kravspecifikation'
subtitle: 'Mobile First And Responsive Design'
date: '2015-07-28T22:40:32.169Z'
image: 'tve.png'
---

<p class="label-2">Case</p>

Denna essä skrev jag till masterkurs på Karlstad universitet. Den berör koncepten Mobile First och Responsiv design vilka båda är svåra begrepp att förstå för en novis person inom it. Jag reder ut vad de båda begreppen som författarna Luke Wroblewski och Ethan Marcotte beskriver i respektive böcker samt kommer med inspel på vad som saknas och hur koncepten kan förbättras. Den blev väldigt uppskattad och används nu i undervisningen på universitet.

<p class="label-2">Tvetydiga koncept</p>

## Introduktion

Eftersom webbdesign är relativt nytt område lånas begrepp från det närbesläktade området grafisk design. Browserfönstret kallas till exempel för “canvas” och begreppet “whitespace” används för att beskriva tomma ytor på canvasen (Marcotte, 2011, 2). Samtidigt som IT-branschen utvecklas snabbt, uppstår nya begrepp och koncept för att beskriva lösningar på problem. Exempel på koncept är “Responsive Design” och “Mobile First”. Jag ställer mig frågande i vilka konsekvenser detta får ur ett användarperspektiv när nya och kanske tvetydiga begrepp inkluderas i en kravspecifikation. Eftersom att dessa två koncept är framtagna för att skapa mer användbara användargränssnitt kommer jag att titta närmare på hur de båda författarna som introducerade dessa båda begreppen – Marcotte (2011) resp. Wroblewski (2011) – anser att man ska verifiera användbarheten när koncepten applicerats. Vidare kommer jag att komma med inspel och förbättringsförslag där jag anser att författarnas verifieringsmetoder brister ur ett användarperspektiv.

### Lösningen på ett nytt problem

Före Iphonenen gjorde intåg på marknaden för mobiltelefoner skedde surfandet på webben nästan enbart genom datorer. Datorer karaktäriseras av att dem har ett tangentbord, en stor skärm och en mus. Miljön dem används i är förhållandevis statisk. Mobiltelefoner används till skillnad mot datorer i en varierande miljö som till exempel utomhus där störande element som solen, bilar, medmänniskor och dålig uppkoppling påverkar användarvänligheten. Förutom dessa karaktärsdrag är skärmytan på en mobiltelefon mindre, vilket skapar andra förutsättningar jämfört med tidigare användning av stora skärmar på datorer (Wroblewski, 2011, 28).

Således uppstod ett problem för it-designers. Hur skulle innehållet som tidigare fick plats på en webbsida anpassad till en datorskärm nu få plats på en betydligt mindre mobilskärm? Lösningen har varit att utveckla koncept som Mobile First och Responsive Design för att uppnå god användbarhet även på enheter med mindre skärmar. Grundfilosofin bakom dessa beskrivs i korthet nedan.

### Mobile First

Mobile First innebär att man som it-designer startar utformningen av gränssnittet på webben med en liten skärm som utgångspunkt och fortsätter vanligen vidare till större skärmstorlekar till och med fullstor TV-skärm (Wroblewski, 2011, 116). Konceptet fokuserar inte på kod utan det handlar om designmönster för användargränssnitt och “best practices” som enligt Wroblewski (2011, 1) kanske kan göra användarupplevelsen bättre.

### Responsive design

Responsive design tar sin utgångspunkt i ett mer tekniskt perspektiv och fokus ligger på att skapa “flexible, grid-based layout, flexible images and media, and media queries” (Marcotte, 2011, 9). Det handlar alltså om att serverar webbläsaren med ett och samma HTML-dokument oavsett vilket typ av enhet som användare surfar på. När en Responsive Design är applicerad ska alltså innehållet kunna anpassa sig beroende på vilken skärmstorlek användaren surfar på och således leda till en bättre användarupplevelse (Marcotte, 2011, 107).

### Görs kravbilden mer komplex än nödvändigt?

Min mening är att IT-leverantörer motarbetar sig själva genom att å ena sida förespråka tydlighet i form av explicita krav (Molin & Pettersson, 2003, 69). Men å andra sidan försöka kapitalisera på nya koncept, som Mobile First eller Responsive Design. Jag menar att dessa två motsatser skapar problem bland mindre kunniga beställare och äventyrar den gemensamma synen om vad som faktiskt ska utvecklas, vilket enligt Bödker, Kensing och Simonsen (2004, 54) är en viktig del i kontraktet mellan leverantör och kund. Jag tror att det kan resultera i tvetydiga krav när beställaren tror sig få något annat än vad som slutligen levereras och således kan detta få oerhörda konsekvenser och till och med vara frågan om vinst eller förlust för ett företaget som ska införa ett nytt system (Gulliksen & Göransson, 2002, 58).

För att illustrera ett exempel presenterar jag nedan ett dagsaktuellt exempel på hur en svensk webbyrå använder Responsive Design som försäljningsargument, de listar också en rad punkter för att övertyga läsaren ytterligare:

> _“Responsivitet är den nya standarden för alla hemsidor. Det är en teknik som är anpassad för våra kunder som surfar på olika platser, vid olika tider och med olika devicer.”_

- Cross-device
- Ett och samma CMS
- Rekommenderat av google
- Nöjdare kunder
- Enkelt framtida underhåll

_Lista med punkter om varför RD är ett måste enligt webbyrån (Invise, 2017)._

När beställarna av system använder ord som Responsive Design och Mobile First menar Marcotte (2011) att det kunderna egentligen försöker uttrycka är att webbplatsen ska vara användarvänlig, i såväl mobil- som desktopversion. Tidigare har användarna uttryckt liknande krav i andra termer som exempelvis ”en Iphone sida” (Marcotte, 2010). För beställarna är det alltså bara ord för att beskriva vad de vill ha och inte konceptspecifikt. Precis som Gulliksen och Göransson (2002, 58) beskriver att begreppet user experience design har blivit urvattnat och misstolkat tror jag att Mobile first och Responsive design löper samma risk om man behandlar dem som i exemplet ovan, det vill säga som en slagkraftig försäljningsfras. För allas bästa, inte minst för beställare av produkter, borde således argumenten till försäljning förflyttas och i stället tala om en användarcentrerad design.

### Användarnas bästa

Tyvärr saknar författarna utförliga beskrivningar på hur man, ur ett användarcentrerat perspektiv, verifiera när och om man lyckats med Mobile First eller Responsive design. Enligt min mening uppnås inte god användbarhet bara för att en produkt är utvecklad enligt Mobile first eller Responsive design.

Wroblewski (2011, kap 2, 4, 5) tar exempelvis upp viktiga aspekter som de begränsningar mobila enheter står inför, strukturering av innehåll för att det ska kunna anpassa sig till olika skärmstorlekar och konkreta tips som hur man bäst designar för touchscreen. Dock nämner Wroblewski (2011, 120) endast som hastigast i några slutgiltiga punkter att designen ska testas vidare att prototyper ska utvecklas för att sedan testas, “as soon as they get in your hand, the faster you will now if it works in the real world”. Det Wroblewski menar med detta handlar snarare om hur väl prototyperna fungerar ur ett tekniskt perspektiv än ur ett användarperspektiv. Verifieringsmetoderna nämnda av Wroblewski lämnar mycket att önska i form av användardeltagande.

Om nu Wroblewski menar att prototyper ska utvecklas och dessutom testas varför inte applicera några konkreta metoder som inkluderar användarna, exempelvis användartester på prototyperna som utvecklats. Eftersom mobila enheter har begränsningar skulle testarna kunna genomföras i en utomhusmiljö för att upptäcka svagheter, genom så kallade kontextuella användartester. Dessa tester lämnar en klar bild av användarna, deras arbetsuppgifter och arbetsmiljö (Gulliksen & Göransson, 2002, 199). När användarna utlämnas på detta viset från utvecklingen blir deras verkliga mål och behov svåra att nå. Gulliksen och Göransson (2002, 109) menar att det är en mycket central del i en systemdesign att inklundera användarna och är dessutom en av nyckel principerna till ett lyckat projekt.

Marcottes exempel på hur man lyckas med Responsive Design (2011, kap 5) innehåller som bekant tekniska tips för att utveckla en bättre användarupplevelse. Vad gäller tips ur ett användarperspektiv lämnar författaren ett knapphändigt exempel på hur man designar för att uppnå användarens mål (Marcotte, 2011, 109). Marcotte (2011, s.118) beskriver att i utvecklingen av en webbplats ska en design review genomföras, som består av ett team av utvecklare och designers testar och diskuterar prototypen i fråga. Kritik som lämnas under denna typ av sessioner har dock ofta stort fokus på pixelkvalitet och utelämnar användaren helt. Min fråga blir då, Vad gör man när man når ett vägskäl i diskussionen, och vad eller vem avgör vad som är rätt eller fel? Molin & Pettersson (2003, 84) menar att verifikations metoden som ska användas för att verifiera ett användargränssnitt ska vara anpassad utifrån kravet. Därav föreslår jag att i stället för att spendera dyrbar tid på sessioner vars argumentationer handlar om teknik borde fokus flytta till användarna. Till exempel skulle en testpanel kunna inkludera riktiga användare och låta dem diskutera webbplatsen, exempelvis enligt punkterna i System Usability Scale, menar jag att insikter av högre värde skulle uppnås (usability.gov, 2017). Faktum är att liknande sessioner som Marcotte (2011, 114) beskriver skulle kunna användas, dock med ett helt annat perspektiv än vad författaren föreslår. Så kallade expertutvärdering kan vara till hjälp om en person med stor kunskap om användarnas arbetsdomän och MDI-kunskap genomför utvärderingen (Gulliksen & Göransson, 2002, 306). Ännu ett exempel på att användardeltagande saknas är slående Marcotte (2011, 114) föreslår att ett IT-projekt inkluderar en design i fyra faser: en planeringsfas, en designfas, en utvecklingsfas och till sist en leveransfas av den färdiga produkten. Verifieringar mot användarna sker alltså aldrig enligt Marcotte, utan produkten lämnas helt enkelt över till kund när projektet är klart.

För att summera detta så är både Mobile First och Responsiv Design bra hjälpmedel till att utveckla bättre användarupplevelser för olika enheter. Dock missar författarna att belysa några av dem mest fundamentala bitar i ett lyckad systemutveckling, nämligen en användarcentrerad design. En Kravspecifikation fungerar vanligen som en bas för ett kontrakt mellan en leverantör och kund (Molin & Petterson 2003 s.70). Om den godkänns, signeras av kund och innehåller punkter som Responsive Design eller Mobile First, utan vidare specificering av koncepten, ingås ett kontrakt som kan få oönskade effekter för kunden (Gulliksen & Göransson, 2002 s.53). Molin & Pettersson (2003, s.84) menar att användargränssnitt vanligtvis innehåller egenskaper som är svåra att uttryck i explicita termer. Därför anser jag är det väldigt onödigt och i det närmaste oansvarigt av en leverantör, likt Invise (Invise, 2017), att vara med och bidra med ytterligare komplexitet till en annars så komplex kravbild. En webbplats kan vara en total katastrof ur ett användarperspektiv trots att kraven om Responsive Design om Mobile First är uppfyllda. Koncepten ska således inte tas för givna som motsvarigheter till ett användarvänligt gränssnitt.

### Källor

Molin, L & Pettersson, JS, (2004). 5, How Should Interactive Media Be Discussed For Successful Requirements Engineering? In Perspectives on multimedia: communication, media and technology, eds. Brunström & al. John Wiley & Sons, Ltd, 69, 70, 84.

Gulliksen, J & B. Göransson (2002) Användarcentrerad systemdesign. Lund: Studentlitteratur.
Marcotte, E. (2011). Responsive web design. New York: A Book Apart.

Wroblewski, L (2011). Mobile First. New York: A Book Apart.

Bödker, K, Kensing, F, Simonsen, J (2004) Participatory IT Design: Designing For Business And Workplaces Realities. Massachusetts: Institute of Technology.

Marcotte, Ethan. (2010) Responsive Web Design. A List A Part. https://alistapart.com/article/responsive-web-design

Cooper, A. (1999) The Inmates Are Running The Asylum: Why High Tech Product Driver Us Crazy And How To Restore The Sanity. SAMS, Indianapolis.

usability.gov. Artikelnamn: System Usability Scale (SUS)
https://www.usability.gov/how-to-and-tools/methods/system-usability-scale.html
(Hämtad 2017-02-23)

Invise.se. http://invise.se/webb/ (Hämtad 2017-02-23).
