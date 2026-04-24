// Počkáme, až se celá stránka načte
window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Aplikace je připravena!");

    const btn = document.getElementById('testButton');
    const inputField = document.getElementById('userInput');
    const resultDiv = document.getElementById('result');

    if (btn) {
        btn.addEventListener('click', function() {
            const text = inputField.value.toLowerCase().trim();
            
            if (text === "") {
                resultDiv.innerHTML = "<p style='color:red;'>Napiš nejdřív nějaký úkol!</p>";
                return;
            }

            let doporuceni = "";

            // Rozhodovací logika
            if (text.includes("test") || text.includes("písemka") || text.includes("zkoušení")) {
                doporuceni = `
                    <h3>🎯 Strategie pro učení:</h3>
                    <ul>
                        <li><strong>Metoda 25/5:</strong> Uč se 25 minut, 5 minut pauza.</li>
                        <li><strong>Aktivní recall:</strong> Zakryj si sešit a zkus to říct nahlas.</li>
                        <li><strong>Priority:</strong> Nauč se nejdřív to, co ti nejde.</li>
                    </ul>`;
            } else if (text.includes("referát") || text.includes("projekt")) {
                doporuceni = `
                    <h3>✍️ Jak na projekt:</h3>
                    <ul>
                        <li>Udělej si nejdřív osnovu (úvod, tělo, závěr).</li>
                        <li>Najdi si 3 hlavní zdroje informací.</li>
                        <li>Slib si, že u toho vydržíš aspoň 10 minut bez mobilu.</li>
                    </ul>`;
            } else {
                doporuceni = `
                    <h3>💡 Obecná rada:</h3>
                    <p>Rozděl si úkoly od nejtěžšího po nejlehčí. Začni hned, neodkládej to!</p>`;
            }

            // Výpis výsledku
            resultDiv.innerHTML = doporuceni;
            console.log("Plán vygenerován pro text: " + text);
        });
    } else {
        console.error("Tlačítko testButton nebylo nalezeno!");
    }
});
