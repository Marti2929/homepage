{
    const welcome = () => console.log("Hello!");

    welcome();

    const defining = () => {
        let liczba1 = 5;
        let liczba2 = 10;
        let suma = liczba1 + liczba2;
        let iloczyn = liczba1 * liczba2;
        let iloraz = liczba1 / liczba2;
        let x = (liczba1 + liczba2 * liczba2) / iloczyn;
        let powitanie = "Dzień dobry!";
    }

    defining();

    const displaying = () => {
        console.log("iloczyn");
        console.log("iloraz");
        console.log("x");
        console.log("powitanie");
    }

    displaying();

    const headerPlaying = () => {
        let naglowek = document.querySelector(".naglowek");
        naglowek.classList.add("nowaKlasa");
        naglowek.classList.toggle("nowaKlasa");
        naglowek.innerText = "START"
        naglowek.innerHTML = "Pierwszy <span> znacznik </span>"

        let przycisk = document.querySelector(".przycisk");

        przycisk.addEventListener("click", () => {
            naglowek.remove();
        });
    }

    headerPlaying();
}