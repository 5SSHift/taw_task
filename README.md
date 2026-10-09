# Web Quality Lab

Proiect pentru lucrarea practică despre utilizarea Prettier și ESLint.

## Instalare

```bash
npm install
```

## Comenzi

Verificare formatare:

```bash
npm run format:check
```

Formatare automată:

```bash
npm run format
```

Analiză ESLint:

```bash
npm run lint
```

Corectare automată ESLint:

```bash
npm run lint:fix
```

## Scop

Proiectul conține intenționat:

- formatare neuniformă;
- variabile neutilizate;
- utilizarea `==` în loc de `===`;
- variabile ce pot folosi `const`;
- apeluri `console.log()`.

Elevii trebuie să analizeze rezultatele Prettier și ESLint, să corecteze problemele și să compare rolul celor două instrumente.
