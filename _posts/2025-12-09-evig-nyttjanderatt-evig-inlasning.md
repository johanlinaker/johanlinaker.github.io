---
title: "Evig nyttjanderätt = evig inlåsning"
seo_title: "Evig nyttjanderätt = evig inlåsning"
excerpt: "Att offentlig sektor lider av leverantörssinlåsningar är ingen löpsedelsnyhet. Dock börjar det bli dags att vi tar tag i detta grundläggande problem när vissa av våra beroenden helt plötsligt har börjat utvecklas till brickor i ett geopolitiskt spel."
date: 2025-12-08T01:00:00-04:00
categories:
  - blog
Tags:
  - open-source-software
  - public-sector
header:
  teaser: "/assets/images/2025-12-09-evig-nyttjanderatt-medfor-evig-inlasning/teaser.jpg"
---


<div class="thumbnail-container">
<img src="/assets/images/2025-12-09-evig-nyttjanderatt-medfor-evig-inlasning/teaser.jpg" alt=""></div>

Att offentlig sektor lider av leverantörssinlåsningar kommer inte som någon löpsedel. Dock börjar det bli dags att vi tar tag i detta grundläggande problem allt eftersom licenskostnader fortsätter att <a href="https://computersweden.se/article/4102244/m365-kunder-bor-undersoka-alternativ-och-planera-for-att-diskutera-nar-prishojningar-hotar-analytiker.html">skjuta iväg</a> och vissa av våra beroenden helt plötsligt har börjat utvecklas till brickor i ett geopolitiskt spel. 


#### Icke exklusiv och i tiden obegränsad licens
Ett problem (av flera) som leder till långvariga inlåsningar är när en leverantör lyckas sälja in en obegränsad nyttjanderätt till källkod och system. Ett scenario är att kunden betalar utvecklingen men sen ej behöver stå för några licenskostnader (vilket kan framstå om attraktivt långsiktigt). Om ägarskapet till källkoden dock förblir stängd hos leverantören har man som kund i princip låst sig fast till att köpa utveckling och underhållstjänster med obestämd horisont (vilket i princip motsvarar de licenskostnader man trodde sig ha undkommit)

Denna problematik reflekteras i ett exempel som jag nyligen <a href="https://www.sverigesradio.se/artikel/goteborgs-stad-efter-kritiserade-it-upphandlingen-moment-22">kommenterade</a> kring hällande hur Göteborgs Stad 2008 anskaffade ett socialtjänstsystem med *"en icke exklusiv och i tiden obegränsad licens till systemet [och dess källkod]"*. 

Dokumenten Ekot fått tillgång till visar hur ev. nya leverantörer som vill svara på upphandling kring fortsatt utveckling och underhåll av plattformen behöver begära tillgång till källkoden från den befintliga leverantören (något den senare ej är pigg på eller skyldig att tillgodose). Staden skriver i sitt svar till Konkurrensverket (Socialförvaltningen Nordost, Upplysning i ärende dnr 846/2025):

*"Samtidigt vill Staden vara ärlig och tydlig med att det är förenat med svåra överväganden och utmaningar att genomföra en offentlig upphandling av support och underhåll till ett IT-system vars systemleverantören äger källkoden, är licensgivare och naturligtvis har helt unika insikter och kunskaper om sin egen programvara"*

Som Göteborgs Stad <a href="https://www.sverigesradio.se/artikel/goteborgs-stad-efter-kritiserade-it-upphandlingen-moment-22">själva nämner</a> hamnar de i ett sorts moment 22. De har under en lång tid investerat i ett verksamhetskritiskt system med en stor användarbas där ett avbrott eller störning i drift och säkerhet hade fått stora negativa konsekvenser. De lyfter själva sina tre huvudsakliga alternativ:

*"1) genomföra en ny upphandling av support och underhåll till Treserva, 2) påbörja en helt ny upphandling av leverans, införande, driftsättning, licensgivning samt support och underhåll till ett nytt välfärdssystem eller 3) nyttja befintligt ramavtal avseende IT-stöd."*

Alternativ 1 och 2 avskrivs för att istället anlita den befintliga leverantören som underleverantör via ett befintligt ramavtal för IT-stöd.

*"Vad gäller alternativ 1) kunde inte Staden se på vilket sätt inte samma problematik avseende källkoden skulle föreligga även i en ny upphandling av support och underhåll till Treserva. Detta eftersom [Leverantören] inte vill ge sina konkurrenter tillgång till källkoden. Beträffande 2) är detta alltjämt ett aktuellt alternativ, men att genomföra en upphandling av ett införande av ett nytt IT-system tar flera år i anspråk, och är alltså ingen omedelbar lösning på Stadens behov av support och underhåll till Treserva"*

#### Hur kan inlåsningar förebyggas?
Som framgår ovan hade ett mer långsiktigt perspektiv från start kunnat förebygga men även varit med till att hantera situationen. Alternativ 2 hade inte varit ett orealistiskt alternativ om det beslutats om vid ett tidigare skede.

Flera lärdomar kan dras. Först och främst måste organisationer börja se över vilka systemberoenden man har och vilka konsekvenser de kan få. Dvs. handla proaktivt och inte reaktivt. Exit-strategier, dvs. planer för hur, inte när, ett systembyte ska gå till måste bestämmas från start. 

Budget för sådan förändring måste likaså (av)sättas därefter. Ägarskap, tillgång och öppet format av informationsmängderna och datan måste säkerställas så de enkelt kan föras över till ett nytt system. Gränssnitt mot andra system måste vara öppna så att en legobit enkelt kan bytas mot en annan. Storlek och komplexitet på legobitarna bör hållas modulära och fokuserade för att återigen möjliggöra utbyte av en bit mot en annan i bygget.

Sedan, om ägarskap till källkoden kravställs och exempelvis tillgängliggörs som öppen källkod från start kan man mycket väl ha samma system i 20 år och samtidigt byta leverantörer, eller använda flera löpande. Därtill behöver offentlig sektor bara köpa systemet en gång, och inte 290 gånger om .

#### Kostsamt att sitta i knät på leverantören

Beroenden likt det rapporterade försvårar förnyad konkurrensutsättning och medför att man indirekt hamnar i knät på leverantören. Priser kan enklare bestämmas av den enskilde leverantören, innovation och nyutveckling kan begränsas, och likaså kan stöd och support riskera att begränsas då incitamenten minskar för leverantören som vet att den sitter säkert. Därtill följer de geopolitiska aspekterna som beroenden kan medföra.

#### Gamla mönster svåra att bryta

Som kan observeras från fallet ovan finns det en kultur inom det offentliga, särskilt på kommunal nivå kring att inte ändra vad som funkar. Det finns riskrädsla och komfortkänsla som underbygger konservativa upphandlingsmönster där man föredrar eller håller sig till etablerade leverantörer. 

Sen är det ett kompetensgap i hur programvara upphandlas, det skiljer sig markant från anskaffande av engångsartiklar eller råvaror till skola, vård och omsorg som man annars är van vid. Situationer likt dessa resulterar ofta i att man hamnar i inlåsningar som är svåra och dyra att ta sig ur.
