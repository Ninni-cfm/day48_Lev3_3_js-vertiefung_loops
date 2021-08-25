//****************************************************************************
// CodeFlow Übung lev2_2: loop with input
// Wir haben in unserem HTML ein Inputfeld, in dem der User eine Zahl eingeben
// soll. Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort 
// “Loop” ausgibst. Die Anzahl der Buchstaben “o” variiert durch die Eingabe 
// des Users.
//----------------------------------------------------------------------------
// Wir verfeinern unseren “Loooooop” aus Aufgabe 2_2
// Jetzt wollen wir eine Fehlermeldung ausgeben, wenn der User 0 eingibt
// Zusätzlich überprüfen wir, ob der User eine gerade Zahl eingegeben hat
// wenn das der Fall ist werden wir nur die Buchstaben“o” in unsere Ausgabe
// schreiben
// Bsp: // input: 4 output: Loooop
// wenn die Zahl ungerade ist
// möchten wir, dass sich die Buchstaben “o” und die Zahlen “0” in der Ausgabe
// abwechseln
// Bsp: // input: 5 output: Lo0o0op

let result = document.getElementById("result");
function loopMe() {

    let num = Number(document.getElementById("numLoops").value);

    // at least a number greater than 0...
    if (num == 0) {
        result.style.color = "red";
        result.innerHTML = "Number must be greater as 0!"
        return;
    }
    let str = "lp".split("");
    for (let i = 0; i < num; i++) {
        str.splice(1, 0, i % 2 == 0 ? 'o' : '0');
    }
    result.style.color = "green";
    result.innerHTML = str.join("");
}


