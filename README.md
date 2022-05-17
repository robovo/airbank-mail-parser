# Parsovátko na maily z AirBank

## Nastavení

1. Nastavte si v internetovém bankovnictví AirBank posílání e-mailů o změnách na účtu
2. Vytvořtěe si filtr na zprávyv Gmailu tak, aby vám padaly do jednoho štítku
3. Napište název štítku do pole ve skriptu

## Obsah mailů
Z necelého tisíce mailů, které mi zatím od AirBank přišly jsem identifikoval tyto typy transakcí:

* Příchozí úhrada z účtu <Název> číslo <Číslo účtu>
* Odchozí úhrada na účet <Název> číslo <Číslo účtu>
* Karetní transakce od <Název Obchodníka>
* Platba kartou (nezaúčtováno) v <Název Obchodníka>
* Výběr hotovosti (nezaúčtováno) <Kde>
* Snížení částky blokace, <Název Obchodníka>
* Platba kartou (stornováno) v <Název Obchodníka>
* Karetní transakce v <Název Obchodníka>


* Poplatek za Vedení všech dalších běžných účtů
* Kreditní úrok od Air Bank
* Obchodní úrok kontokorentu

* Při platbách v zahraničí občas nelze položku zařadit

## Technikálie
Čísla řádků jsou pro parsování nastavena natvrdo. Je to tím, že jsem líný. Možná to někdy napíšu chytřeji.
Zatím je to myšleno je n na účty v českých korunách.