# Exercice pour créer un jeu Puissance 4
## Description
Dans cet exercice, vous êtes chargé de concevoir un jeu de Puissance 4, un jeu de société classique dans lequel deux joueurs s’affrontent en plaçant des pions (jaunes ou rouges) dans une grille verticale de taille 7x6. La gravité faisant que les pions tombent forcément dans la case libre la plus basse de la colonne où ils sont joués. Le but du jeu est d’aligner quatre pions de sa propre couleur horizontalement, verticalement ou en diagonale.

Votre tâche consiste à concevoir la structure du jeu en implémentant les classes suivantes :
- Classe Grid : Représente la grille de jeu, compos ́ee de cases (array à deux dimensions) dans lesquelles les pions peuvent être placés. Méthode pour jouer un pion en indiquant la couleur et la colonne. Méthode pour afficher la grille.
- Classe Token : Représente les pions utilisés par les joueurs. Attribut pour la couleur du pion (jaune ou rouge).
- Classe Game : Gère le déroulement du jeu.


Votre conception devra permettre l’affichage de la grille dans la console, avec les pions des joueurs représentés par des caractères différents (par exemple, ”O” pour les pions jaunes et ”X” pour les pions rouges).
