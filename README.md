# Evaluation_TMA

Application TypeScript simple de gestion de tâches (Todo List), avec tests unitaires via Jest.

## Prérequis

- Node.js (version 18+ recommandée)
- npm

## Installation

```bash
npm install
```

## Lancer l'application

Le projet ne contient pas de script `start` dans `package.json`.
Pour exécuter le fichier principal (`src/index.ts`) :

```bash
npx ts-node src/index.ts
```

## Exécuter les tests

```bash
npm test
```

ou :

```bash
npm run test
```

## Structure du projet

```text
Evaluation_TMA/
├── src/
│   ├── index.ts         # Point d'entrée / démonstration
│   ├── TodoItem.ts      # Modèle d'une tâche
│   └── TodoList.ts      # Logique de gestion des tâches
├── test/
│   ├── add.test.ts      # Tests d'ajout de tâches
│   ├── display.test.ts  # Tests d'affichage
│   └── toggle.test.ts   # Tests de changement d'état
├── jest.config.js       # Configuration Jest + ts-jest
├── tsconfig.json        # Configuration TypeScript (app)
├── tsconfig.test.json   # Configuration TypeScript (tests)
├── package.json         # Dépendances et scripts npm
└── README.md
```

## Script disponible

- `npm test` : lance tous les tests Jest.
