---
title: "Riskanalys och hantering av hälsan hos öppna programvaruprojekt"
seo_title: "Riskanalys och hantering av hälsan hos öppna programvaruprojekt"
excerpt: ""
date: 2025-12-26T01:00:00-04:00
categories:
  - blog
Tags:
  - open-source-software
  - ospo
  - health
header:
  teaser: "/assets/images/2025-11-26-halsa-som-risk/teaser.png"
---


<div class="thumbnail-container">
<img src="/assets/images/025-11-26-halsa-som-risk/teaser.png" alt=""></div>

Jag kommer att prata temat var säkerhet. Säkerhet kan man prata från många perspektiv i inom köttgårdarna, djupvarutveckling eller sånt under en generellt. Jag kommer ta det utifrån. Det jag kallar hälso aspekterna, hälsa, hållbarhet, hur man kan se det eller hur man behöver se det som en form av säkerhetsrisk. Och då inte är bara en negativ bemärkelse, utan det är en risk och den måste man hantera. Det är oftast någonting som man man köper sig bort via stängda väggar, men man kan också köpa sig den här hanteringen via leverantör via det öppna öppna öppna.

Så jag kommer prata om om hälsa och det här är också applicerbart inifrån från ett inresursperspektiv. Om det är inifrån ett företag eller en myndighet eller offentlig sektor som inresurs, vad man väljer att kalla. Principerna är mycket detsamma, men.

## Vad menas med hälsa?
Vad menar jag med hälsa? I grund och botten ett uppresa oss projekts förmåga att förbli välunderhållet, att att hålla sig vid liv och liksom hålla sig till en hög kvalitet, hantera eventuella mot motverka, förebygga eventuella sårbarhet och så vidare. Han kunde hantera sårbarheten när de dyker upp.

Man kan också prata om pulsen. Finns det en aktivitet, finns det liv i projektet och är skeden under utveckling? Hur är den här utvecklingen fördelad? Är det på ett eller ett fåtal individer, ett enskilt företag? Eller är det flera som faktiskt är med här och bidrar och utvecklar det här? Och det kan vi också överföra internt. Är det bara en person som sitter och utvecklar den här plattformen och sen går han eller hon väck? Då står man där liksom.

När jag var på utveckling på Kea, där var det Den den sista personen som var kvar var Jörg som hade varit tjugo år på IKEA. Det var han var den enda som kunde möbel, varhus, systemet byggt i Pascal utan och innan han var den näst. 1 1 tusan man inte var mer värdbetalad än dåvarande IT-chefen på IT.
Öppenhet och möjlighet att bidra

Öppenhet, projektens förmåga eller liksom öppenhet att ta emot bidrag och inflytande från från omvärlden också. Finns det möjlighet att du faktiskt kan gå in och liksom? bidra till att förbättra hälsan och bidra till underhållet och göra produkten säkrare och bättre.

Och det här kan man ju då kondensera ner till. Jag vet inte hur många här som kanske känner till Linus Thorvalls, en kär, väldigt pragmatisk, entusiastisk kvinna som skapat Linux som ett grund som kör många av våra datorer och burkar och datacenter idag. Han hade han och han har sagt många saker, vissa bättre än andra. En sak han har sagt som liksom lyfts ofta är han han så kallade lag som säger att givet att tillräckligt många ögon faktiskt når koden så kommer alla buggar att vara ytliga nog.

Det finns ju en logik i det, men det hänger faktiskt på att tillräckligt många ögon faktiskt når koden. Att det faktiskt är många människor som som studerar koden. Som är möjligt, men med öppna licenser. Dels det, men sedan också att tillräckligt många gör gör någonting åt det man hittar, alltså inte bara. Han har varit så där, men det är det. Det löser någon annan, utan att faktiskt någon som gör någonting åt det.

Här är fri riding som man kan kalla svårt att hitta på hitta det svenska begreppet. Men fri riding, det både positivt och negativt. Alla behöver inte vara med, men det måste vara tillräckligt många fall som bidrar till underhållet, för annars Ja, så står man med byxorna nere när när det kommer på nyheten att det är en ny sårbarhet som håller på att harja.

## Utvecklarnas tid som kritisk resurs
Och mycket av det här kan vi som kondensera ner till att man kan göra det här väl nu blir akademiskt, men liksom det här med att man kan se utveckla. Många pratar om upp en källkod som är som en typ av allmänning. Men det som är ännu mer kritiskt att beakta det är utvecklarnas tid som faktiskt går in här. För många projekt som underhålls av en enskild person. Den personen har begränsad tid. Den personen har familj, har jobb, fritidsintressen, kanske unga som har fritidsintressen som tar upp 90 procent av ens fritid som möjligt.

Den kan ta slut. Den kan liksom försvinna permanent. De bränner ut. De förändrar familjehållande förhållanden. Nya jobb. Företag ändrar sig också. Man refaktoriserar. Man bör faktorisera om ett annat. Titt som tätt kommer nya produkter förändra affärsmodeller. Men man måste svara på hur marknaden förändrar sig och kommer nya kunder och utvecklingar. Det händer saker och utvecklarnas tid, den tiden som faktiskt går in i att underhålla de här komponenterna som vi är bedömda av. Den kan ta slut och vi måste säkerställa att det finns nog med tid, nog med resurser som går in i det här. Och liksom, ja.

## Konsekvenser: sårbarheter och beroenden
Vad händer om inte? Jo, men vi har en verklighet där vi har en otroligt massa sårbarheter som finns och som fortsätter att finnas och som ökar, fortsätter att öka dramatiskt. De här tillväxtkurvorna man ser, de olika undersökningarna är ju läskiga. Och ännu läskigare är att de livslängder på de här, de hålls öppna länge. Och trots att det kommer lösningar, så är det ändå många som liksom lever kvar i en verklighet. Ja, men det är väl någon uppströms som som har uppdaterat oss. Många av de här förbli faktiskt oadresserade, liksom i verkligheten.

Här har vi ett antal exempel som kommit igenom tiden. Mer illsinta, men också fall där enskilda kodförvaltare eller maintainers har dragit tillbaka sina projekt eller bara tröttnat på att underhålla dem. Och det är små, små, små projekt. Kanske bara one liners eller elva rader som i det här fallet som liksom utgör en grunden i de här beroendeträden. Säga att du lyfter på på på redan och ser det här Lego pyramiden eller harket, liksom där har hundratio antal lager, liksom med med beroende några och det har ett högst upp som någon bara tar bort. Och sen har det hela korthuset där.

## Analogin med vårdcentralen
Då låter den här analogin. Jag vet inte. Fint haspel av hur många som känner till det. Några några tappar med god smak. Det är att man kan göra liknelsen vid att jag, men likväl som som vi går till vårdcentralen för för flunsa eller svinkåpare, husblåsare, barn och ungarna har. Så de undersöker måste identifiera symptom, diagnoser och bestämmer behandling. Likväl så måste vi som utvecklare också ta oss an den lita rollen. Vi måste titta på de här beroendena som vi tar på oss.

Varje beroende är en risk som vi måste hantera och varje beroende kan komma med symtom, antingen vid in när ni tar in det eller befintlig, liksom när ni tar in. Ta in ett beroende så liksom tar ni in. ett nytt barn i familjen, liksom som de måste liksom hålla koll på. Och här gäller att. Här finns det kanske inte någon. Någon vårdcentral går till, utan här måste man själv göra den bedömningen och ta verktyg och sånt i beaktning och liksom komma fram till en lösning.

## Offentlig sektor och två perspektiv
Här kan man se det från om man tittar från offentlig sektor. Speciellt kan man ta från två. Två sätt. Det ena är det här med kontinuera utvecklingen där man som tar in beroenden dagen dagligen. Vad som ett exempel. Ett större svenskt bolag. Förra året de tog in 60 tusen nya beroenden och pensionsbaserade inklusive de nya versionen. Det säger en del och det var det de tog in. Sedan är vad de har i produktion en.

Nu var det här ett intervall med ett internationellt bolag, men ändå. Jag misstänker givet Hannes presentation att det finns en hel del beroende på Trafikverket också. Det här kräver kontinuerlig granskning. Man kan inte bara blunda och ha tagit in, och nu är säkert hejo. Vi har något junitest någonstans som fixar det. Och det kostar. Det kan inte få kosta hur mycket som helst.

Sedan har vi anskaffnings perspektivet när vi upphandlar och tar in större system när vi Förhoppningsvis ändå börja beakta att det finns öppna alternativ där ute, men då gäller det att faktiskt kan utvärdera dem både i förhållande sig i förhållande till sig själva, men också mot mot de proprietära alternativen där vi kan faktiskt ha. Ta bemöta de här fördomarna som säger att jag men uppenstås där det mest.

## Myter om säkerhet i öppen källkod
Det finns två lägen, liksom på aspekter finns fri software som säger att man open source och det här är det bästa som finns. Alla ögon på koden är som du. Vi ser ju allting. Sedan har vi ju säk, it-säk och cybersäker borta, liksom som suttit på sina kontor i 20 år och som säger att koden är öppen. Det är alltså vem som helst. Ska vi bara skicka in en sårbarhet så står vi med brallorna nere, liksom.

Inte riktigt något av det. Vi måste kunna göra en pragmatisk bedömning, liksom från case to case. Och liksom när vi ska göra en anskattning av av något större så måste vi kunna titta på det aktuella systemet och se. Det är i sitt fall liksom. Men hur ser underhållet ut? Vad är riskerna? Hur kan vi hantera riskerna och sedan göra kostnader samlades på det kontra andra andra alternativ?

## Forskningsprojektet med Scania
Mycket av det jag pratar idag är baserat på ett forskningsprojekt jag hade tillsammans med Scania, det byggde Adalott för ett par år sedan, där vi just tittade på det här. Hur kan vi hantera säkerhet som en risk, eller hälsa? Hur kan vi förebygga det och göra proaktiva beslut? Vi tittade på en himla massa litteratur som sa att hälsa inte är ett nummer. Det är inte grönt och rött.

De studierna vi tittat på sa att man kan säga att det var 107 olika symptom eller diagnoser. Vi pratade med experter som sa motsvarande sak, men också höjde det här att vi kan inte jämföra äpplen och päron. Alltså, projekt ser olika ut precis som människor. Det måste vi också ha i beaktning, för projekt underhålls av människor. Människor är som sagt olika.

## Dimensioner av projektens hälsa
Och där finns jättemånga sätt att titta på det här. På en hög nivå så kan man titta utifrån ett open source-projekt med produktivitet, stabilitet, styrning, koordinering, utvecklingsprocessen och leveranser. Det finns, som sagt, väldigt mycket här att ta hänsyn till.

Det finns många befintliga resurser. Chaos, Community Health Analytics of Open Source Software. Det är ett community som funnits sedan 2017, tror jag. som utvecklat en himla massa indikatorer och sätt och processer att titta på hälsa. Secure Foundation har också tagit fram en hel del som deras Scorecard-initiativ där de förenklar ner till några nummer som ger en bild. Det är inte en hel bild, men det ger en bild.

Bara för att ge ett exempel. Frankrikes, franska statens, deras. De är väldigt framåt och mogna kring öppet källkåd och de har själv tagit fram kriterier för att börja analysera här utifrån sin målstrategi. Och det är ju det i grunden baserat på just Kajas, som liksom bevisar faktiskt att även folk inom det offentliga taget har till sådär.

## Projekt i olika livsfaser
Och det här med att man nu ska jämföra Eppelholm och Pärholm. Bara för att ge ett exempel då. Projekt, precis som människor, kan befinna sig i olika stadier. När de föds, när de växer till, när de blir större och mogna och när det blir dags för pension och åka till Gran Canaria och så vidare. Projektens komplexitet varierar också. Vissa är stora, vissa är små. Vissa är lite mer tekniskt komplexa än andra.

Styrningen kan vara koncentrerad, kanske till ett enskilt företag eller en enskild individ, eller kanske är lite mer demokratiska. Det påverkar också och sedan särskilt också när man när man ska bedöma vad vad är hälsosamt, vad inte var ett välunderhållet projekt. Man kanske olika krav, dels beroende på hur. Hur styrningen ser ut men också hur viktigt projektet är för just din organisation. Så det är viktigt att ha mer beaktning. Det går inte bara att ta tre, fyra olika indikatorer och sen bara köra dem rakt över. Man måste titta på vilken typ av projekt vi tittar på.

## Upphandlingsexemplet med e-arkiv
Och lite från anskattnings perspektivet. Jag tror det här cirkeln kanske vissa känner gärna kanske med lite mer bemoder fasa upphandling cykeln. Det här är baserat på ett försök hos en svensk myndighet som jag tänker jag kan säga är Arbetsförmedlingen. Maria får bli supermänniska där vi just När det var när jag var följeforskare för ett par år sedan så tittar vi just på E-arkivlösningar. Och där fanns det två, tre olika som utvärderare. ESS Arc och Roda bland annat.

Och där gjorde vi just ett försök där vi satt upp en workshop. Jag tog fram ett antal indikatorer från Chaos och vi liksom gick igenom, vi diskuterade om att utvärdera i förhand. Vi hade diskussioner. Så gjorde vi en analys och började jämföra. Och det finns som dokumenterat i en rapport man kan ta del av. Men jag tänkte bara bara för att bara för att lite snabbt visa att det här man kan göra här relativt enkelt. Men det kräver lite att man tar ett helhetsgrepp och lite sätter sig in och förstår.

## Exemplet Roda
Så det här är nu. Tänker bara göra en snabb analys på vår roda som då är en ny akutlösning utvecklat av en portugisisk leverantör som inte kris. Och det här är olika indikatorer som vi filtrerar ut i vår fallstyrd med Scania. Det här är ett fåtal av dem från en checklista som vi tog fram för dem internt, just för att deras utvecklare ska kunna analysera projekt snabbt vid intag. Så nu applicerar de här omkvällen på Roda.

Och det som vi tittar på, bidragsaktivitet och utvecklingsrelaterad aktivitet ska vi se just på GitHub som är en utvecklingsplattform där många öppna köpkostprojekt finns. Där finns det funktioner som GitHub Insights där vi kan se grafer över hur Folk bidrar över tid. Vi kan också se hur responsiva de är i de här olika typer av pulser. Hur snabbt man svarar på pull requests. Hur snabbt saker stängs och merjas in och så vidare.

Vi kan granska kvalitén i hur folk svarar och hur snabbt genom att gå in och läsa narration. Man kan snabbt bilda sig en bild. Man kan se hur man hur ser användningen ut. Sådana här stjärnor och vart kör så och gafflar. Det kan man ju. Det finns ju både positivt och negativt att titta på. Det är väldigt förenklat om man är mycket snävat, men det kan ändå ge en bild.

I det här fallet i och med att det här var ett ett. Ett projekt som ligger runt för produkter kan vi gå in på Rodas eller på Kiel leverantörs hemsida och se referenser. Vad var det du var som ni som använder här och ska slimma runt i munnen? Och man kan också se i en början av snabba googlingar att det finns någonting som heter Svenska Roda nätverket. Det finns otroligt mycket, så det verkar vara väldigt väl använt.

## Licenser, styrning och säkerhet
Tittar vi på licenshantering och så vidare så kan man ju, om man ska vara riktigt noga, så kan man gå ner i en S-form och köra den genom någon form av verktyg. Oftast så kanske det ger en bild som kanske inte helt stämmer överens med den faktiska licensen läskigt nog. Men det är ändå att visa att man kan gå in och göra den kontrollen om man har behov för det. Och man kan också se här att det finns tydliga ställningstagande i hur interdektörerättigheter hanteras.

styrningsstrukturer. Man kan se här att det finns någon form av korrekt kontakt. Man kan gå in och se. Men vad är det för människor som faktiskt gör majoriteten av bildagen här? Här kan man förmodligen då säga att majoriteten har tillhör dåliga leverantörer. Så det är ju någonting man ska ha med i beaktning, men det bekräftar den bilden. Man ger lite snabb googling så hittar man leverantören igen och man ser att de har en enterprise produkt baserad på det. Man kan tydligen se i olika typer av dokumentationer att all form av mejl går till leverantören. Så det säger en del om styrningen.

Tittar man på säkerhet så kan man genom lite snabb sökning se att det var inga kända CVR på eller svårigheter rapporterar på den här produkten. Och de har någon form av process kring kring där man kan rapportera och hanteras. Väldigt grov analys, men det är bara för att visa visa idén att det är det här vi måste. Det är väldigt enkelt i grunden, men det här vi måste få in. Men vi kan inte göra det här för 60.000 beroende. då det blir det.

## Behov av skalbara processer
Det här är någonting vi måste börja hantera i skala. Och det är här vi tog fram den här förslaget till en mer uppskalad process hos Scania med nyckelkrav att den måste vara decentraliserad och liksom inte lägga på massa friktion utan möjliggöra och stärka utvecklarna i det här. snarare än att ta mer tid från det. Samtidigt som man ändå kan ha en känsla av att man faktiskt hanterar risken till nån nivå.

Den här fallstudien fick vi med i To Do Goods OSPI-bok som nyligen släpptes, som jag kan rekommendera för övrigt. Jag tror de har någonting kring nu så. Så det är vi föreslogande än en mångfald. Man ser alltid mer automatiserade processer där det kommer in någon form av komponent. Man granskade enligt tidigare exempel på någon nivå. Sedan kommer man till ett beslut, antingen tar vi in den och allting ser bra ut eller som tar vi in den. Men vi måste göra någonting åt det. Det finns väldigt mycket bra här, men det är någonting vi måste göra för att adressera de risker som vi ser. Eller så avfärdar vi en ny någonting nytt.

## Databas, ägarskap och flaggor
Väljer vi att ta in det så ska det hamna i någon form av databas där vi har översikt över vad vi använder. Vi kan inte bara liksom sitta med skyddlampor på. Och här ingår det också det som vi väljer att aktivt behandla. Och här, det här är någonting som, väljer man att ta in någonting när man ser riskerna så ska man ha en tydlig strategi kring det. Det är inte bara att göra en kommitté och sända det där, utan det ska finnas något form av egenskap av den risken.

Och sen måste det finnas något som man sa 60 tusen komponenter. Det kan man inte bakåt. Varje person kollade en gång i månaden. Det måste finnas någon form av automatisering här. Väldigt förenklat, men i alla fall på den nivån att man kan sätta ut orangea eller röda flaggor och det som är orange och röda flaggor. Det är det som tar med det som termometern visar att man har upp 38 grader svever och har en 40 grad svev. Så det som. Så får vi skicka tillbaka till en tre timade den. Den individ som har äganskapet var det här beroendet.

## Automatisering och verktyg
Man som sagt stora mängder beroenden man bör in involvera i någon form i CRC i eller bygg byggflödet, men också det ska köras med jämna regler regelbund. Och som sagt, flagga för de projekt som kallar manuell granskning. Det finns verktyg att ta in och anpassa. I IKEA finns det två exempel, ett som heter Grimoire Lab och ett som heter Agur.

Det jag vill slå ett litet slag för är Grimoire Lab, som är open source, men det finns en leverantör bakom det, spansk. Här kan du få fram, här behöver du inte hålla på och gräva på samma sätt där, fast du kan behöva göra det också i de manuella inspektionerna. Men här kan du få fram pie charts, en massa vackra färger, så du enklare kan se hur det ser ut. De manuella inspektionerna var lite det som jag pratade om.

## Egna checklistor och riskbilder
Och det är det måste man som tar fram alla alla organisationer och ha sin sig egna risker sig egna nytta och olika förmågor och så vidare som de här listorna med vad man ska titta efter. Mycket kan vara gemensamt, men mycket måste man än fortfarande. Man måste göra läxan själva. Visst, man kan ta. Man kan ta någon bara en lista befintligt och köra, men man måste fatta vad en lista betyder. Då måste man också fatta sin egen verksamhet och vad man ser på risker.

Så mycket är att ja. gör läxan på från början och ta inspiration. Kajas och den lund om man tyckte vi skrivit er olika typer av smörgåsbord som man som man kan. Man kan ta ifrån, men sedan måste man också fatta utifrån sin egen organisation vad som ger mening. Man måste hålla det enkelt med så här analys. Man kan inte ha så. En biblioteket kan ta mer än 5-10-15 minuter i anspråk. Om det börjar bli en timme att man ska skriva uppsatser och så vidare, då kommer man in i vart.

## Erfarenheter från Scania
Vad ska man kolla efter? Det var lite det jag var inne på. Det finns mycket förväg. På Scania gjorde vi baserat på intervjuerna vi gjorde både hos dem och externt så hade vi satt upp en intern fokusgrupp där vi tog fram ett underlag som sedan utvärderade i olika använda observationer som sedan renderar i den här listan.

Och någonting som oftast glöms bort i all form av metodik och så vidare är så klart det. Retrospekt av som reflekterande och lärdomar, men alltså. Ska man komma någonstans här så så är det som måste man ta det i beräkning. Alla utvecklare har olika mycket erfarenhet av en speciell kod. Man har olika ekosystem. Man har erfarenhet av olika system och ekosystem, olika kommuner, olika projekt, olika arbetsgivare.

## Bygga gemenskap och kunskap
Här måste man liksom bygga upp en gemensam kommun och praktiskt inom inom organisationen. Här måste det som de seniora och de juniora, alltså i många fall kan de juniora ha mer erfarenhet här än de seniora. Tvärtom är det som man måste, liksom tillåta sig att lära av varandra och liksom hur ska jag tolka det här? Hur tolkar du det här och så vidare? M.

Det här måste byggas in och det kommer att vara en investering i början. Men det är så värt det, för sen kommer det att ta med sig många mer fördelar. Bara i att förstå hur öppna källkålsprojekt funkar, hur man utvecklar, hur man samverkar kulturen i det. Det kommer att förenkla innehållsarbetet. Det kommer att ha väldigt många grulligare fördelar.

## Behandling, riskhantering och engagemang
Och sen är det också det här med behandling och att adressera det man ser. Går i, går in och kolla. Ja, men är det här är det här projektet kritiskt eller beroende av det? Men om en natt det finns brister, då måste vi gå in och engagera oss och faktiskt börja bidra. För att hantera att hantera de här riskerna.

Det kräver investeringar. Likadant om ni vill ha inflytande och kontroll i ett projekt. Det kräver investeringar. Det kräver att man bidrar. Det kräver att man är där och att man deltar. Och man kan delta på många sätt. Det är inte bara att göra progress på gård. Det är också att bidra i kravhanteringen. Det är att bidra finansiellt genom att hosta CSID-körningar. Genom att bidra till dokumentationen, men också kvalitetssäkring och så vidare. Och det är också att tänka på internt när vi pratar inresurser. 