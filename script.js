console.log('DEBUG TEST')


let hundSearchCount = 0;

let popularSearchTerms = [];

function search() {

     // start variabler les gooooo :)
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultContainer = document.getElementById('output');

    // nettsider
    const websites = [
        { title: "Random Chat", url: "https://frensy12.github.io/chat" },
        { title: "Hacker Typer", url: "https://hackertyper.com" },
        { title: "Weird or Confusing", url: "https://weirdorconfusing.com/" },
        { title: "Hei :D", url: "heinettsiden.html" },
        { title: "Footy Tic Tac Toe", url: "https://footytictactoe.com/"},
        { title: "Puslespill", url: "https://www.jigsawplanet.com/" },
        { title: "Design nettside idk", url: "https://www.canva.com/" },
        { title: "Matte hvis du er nerd", url: "https://www.khanacademy.org/math" },
        { title: "DETTE ER FAKTISK SÅ KULT se verden lol", url: "https://www.airpano.com/" },
        { title: "Skriving?", url: "https://writingexercises.co.uk/" },
        { title: "Nerdy vitenskap", url: "https://www.sciencebuddies.org/" },
        { title: "Farge spill??", url: "https://color.method.ac/" },
        { title: "Holmen Skole Nettsiden (kinda)", url: "https://frensy12.github.io/holmenskole/"},
        { title: "AliWeb", url: "http://www.aliweb.com/"},
        { title: "The Useless Web", url: "https://theuselessweb.com/"},
        { title: "Cursor Effects", url: "https://cursoreffects.com/"},
        { title: "Muse effects? Rar setning", url: "https://cursoreffects.com/"},
        { title: "Heeeeeeeeeeeeeyyyy", url: "https://heeeeeeeey.com/"},
        { title: "Hoooooooooooooooooo", url: "https://hooooooooo.com/"},
        { title: "Slå en mann med en fisk", url: "https://eelslap.com/"},
        { title: "Rar nettside (ikke gå på den hvis du har eplepsi... Sånn faktisk)", url: "http://www.staggeringbeauty.com/"},
        { title: "Pug in a rug", url: "https://puginarug.com/"},
        { title: "En Hund", url: "https://puginarug.com/" },
        { title: "Tegning", url: "https://jacksonpollock.org/"},
        { title: "Drawing Garden", url: "https://drawing.garden/"},
        { title: "Hage tegning", url: "https://drawing.garden/"},
        { title: "Endless Horse", url: "http://endless.horse/"},
        { title: "Hest som aldri slutter", url: "http://endless.horse/"},
        { title: "Finger Simulator", url: "https://thatsthefinger.com/"},
        { title: "Vis fingern?", url: "https://thatsthefinger.com/"},
        {title: "Oppdag Verdensrommet", url: "https://www.spaceexploration.com"},
        {title: "Gourmet Matoppskrifter", url: "https://www.deliciouscuisine.com"},
        {title: "Fotograferingstips og Triks", url: "https://www.shuttermastery.com"},
        {title: "Hjemmeøvelser for Trening", url: "https://www.homefitnesshub.com"},
        {title: "Kunstgalleri med Abstrakte Verk", url: "https://www.abstractartgallery.com"},
        {title: "Reiseeventyr i Sør-Amerika", url: "https://www.southamericanadventures.com"},
        {title: "Siste Teknologinyheter", url: "https://www.techinnovationhub.com"},
        {title: "Hagearbeid for Nybegynnere", url: "https://www.gardeningnovice.com"},
        {title: "Musikk", url: "https://www.musicproductioninsider.com"},
        {title: "Vitenskapelige Oppdagelser Blogg", url: "https://www.scientificbreakthroughs.com"},
        eple = {title: "Eple Fakta", url: "https://minnetonkaorchards.com/apple-facts/"},
        {title: "Skibidi Toilet laget av BiNg BoNg", url: "bingbong.html"},
        {title: "Oscar Tar Over Verden Simulator", url: "oscartaroververden.html"},
        {title: "Snake Spill", url: "snake.html"},
        {title: "Ostify (Spotify uten og logge inn!)", url: "spotify.html"},
        {title: "Lag din egen nettside!", url: "websitemaker.html"},
        {title: "Lag din egen AVANSERTE nettside!", url: "advancedwebsitemaker.html"},

    ];

     

    resultContainer.innerHTML = '';


    if (searchTerm.trim() === 'rompe' || searchTerm.trim() === 'tiss') {
        resultContainer.innerHTML = 'Ha ha kjempemorsomt'
    }

    // Sjekk om søkefeltet er tomt
    if (searchTerm.trim() === '') {
        resultContainer.innerHTML = 'Virkelig? Søk på noe :)';
        return;
    }

    if (searchTerm.trim() === 'porno' || searchTerm.trim() === 'porn') {
        resultContainer.innerHTML = 'Nuh Uh, trodde du virkelig?';
        console.log('Ikke greit nuh uh :-(')
        return;
    }

    if (searchTerm.trim() === 'spillespill') {
        resultContainer.innerHTML = 'Jeg har ikke spille spill akuratt nå, men jeg har andre spill nettsider!! :D'
    }

    if (searchTerm.trim() === 'youtube') {
        resultContainer.innerHTML = 'Ikke enda bro'
        console.log('Noen søkte på youtube')
        console.error('FÅ INN YOUTUBE SNART BRO')
    }

    if (searchTerm.trim() === 'hacking') {
        resultContainer.innerHTML = 'Ayooo???'
        console.log('noen søkte på hacking   DEBUG');
        console.log('Noen søkte på hacking lol')
    }

    
        
        websites.forEach((site) => {
        const lowercaseTitle = site.title.toLowerCase();
        const lowercaseUrl = site.url.toLowerCase();
        const searchWords = searchTerm.split(' ');

        // Sjekk hvis vilketsomhelst ord er i søkefeltet les gooooooo
        const matchFound = searchWords.some(word => lowercaseTitle.includes(word) || lowercaseUrl.includes(word));

        if (matchFound) {
            const titleElement = document.createElement('strong');
            titleElement.textContent = site.title;

            const link = document.createElement('a');
            link.href = site.url;
            link.textContent = site.url

            // fil ikke nettside :)
            if (site.url.startsWith('file:')) {
                link.addEventListener('click', () => openLocalFile(site.url));
            }

            resultContainer.appendChild(titleElement);
            resultContainer.appendChild(document.createElement('br'));
            resultContainer.appendChild(link);
            resultContainer.appendChild(document.createElement('br'));
        }
    });


    if (resultContainer.textContent.trim() === '') {
        resultContainer.innerHTML = 'Ingen resultater :-(    Her er de andre nettsidene       ';
    }

    if (searchTerm === 'eple') {
        console.log('eple søk les gooo');
        console.log('La oss gå :) Jeg kjeder meg kinda lol')
    }


    if (searchTerm === 'hund') {
    
        hundSearchCount++;

        
        if (hundSearchCount > 25) {
            resultContainer.innerHTML = 'Hvorfor har du søkt på hunder så mange ganger?'
            
        }
    }

    // algoritme populære søk 1 :) :-D
    if (popularSearchTerms.includes(searchTerm)) {
        const index = popularSearchTerms.indexOf(searchTerm);
        if (index !== -1) {
            popularSearchTerms[index].count++;
        }
    } else {
        popularSearchTerms.push({ term: searchTerm, count: 1 });
    }

    // Sjekk om et søkeord har blitt søkt på mye
    const popularTerms = popularSearchTerms.filter(term => term.count > 45).map(term => term.term);

    // Oppdater nettsidene ved å legge til populære søk
    const updatedWebsites = websites.map(site => ({
        ...site,
        popular: popularTerms.includes(site.title.toLowerCase()),
    }));

    updatedWebsites.forEach((site) => {
        const titleElement = document.createElement('strong');
        titleElement.textContent = site.title;

        const link = document.createElement('a');
        link.href = site.url;
        link.textContent = site.url;

        // Fil ikke nettside :)
        if (site.url.startsWith('file:')) {
            link.addEventListener('click', () => openLocalFile(site.url));
        }

        resultContainer.appendChild(titleElement);
        resultContainer.appendChild(document.createElement('br'));
        resultContainer.appendChild(link);
        resultContainer.appendChild(document.createElement('br'));
    });

    if (resultContainer.textContent.trim() === '') {
        resultContainer.innerHTML = 'Ingen resultater :-(';
    }



}  