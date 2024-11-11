/*

Conception d'un Système de Gestion de Fichiers (FileSystem) en TypeScript

Dans cet exercice, vous serez amené à concevoir un système de gestion de fichiers (FileSystem) simulé en utilisant TypeScript.
Un système de gestion de fichiers est une structure de données hiérarchique utilisée pour organiser, stocker et 
manipuler des fichiers sur un support de stockage.


L'objectif de cet exercice est de créer une simulation d'un système de gestion de fichiers qui permettra 
d'ajouter, supprimer, et lister les fichiers et répertoires, ainsi que de se déplacer dans le système de fichiers.



Implémentation des Classes SimFileSystemElement, SimFile et SimDirectory :

- Créez une classe SimFileSystemElement qui servira de modèle de base pour les fichiers et les répertoires.
- Implémentez une classe SimFile qui représente un fichier dans le système de fichiers.
- Implémentez une classe SimDirectory qui représente un répertoire dans le système de fichiers. 
    Ce répertoire devrait être capable de contenir d'autres fichiers et répertoires.
- Implémentation de la Classe SimFileSystem :

Créez une classe SimFileSystem qui représente le système de fichiers lui-même.
La classe SimFileSystem devrait avoir des méthodes :

- mkdir : pour créer des répertoires
- touch : pour créer des fichiers
- rm : pour supprimer des éléments
- ls : pour lister le contenu du répertoire courant. Si le boolean "recursive" est à true, 
        on souhaite également explorer les sous-dossier.
- cd : permet de descendre dans un sous répertoire si le nom est valide. 
- cd / : permet de retourner à la racine
(On oublie le "cd ..", pas de retour en arrière)

*/

class SimFileSystem {

    constructor() {
    }

    mkdir(directoryName: string): void {
    }

    touch(fileName: string): void {
    }

    rm(elementName: string): void {
    }

    ls(recursive:boolean): string {
        let res : string = "";
        return res;
    }

    cd(elementName: string):void{

    }
}

// Exemple d'utilisation :
const fileSystem = new SimFileSystem();

fileSystem.mkdir('documents');
fileSystem.mkdir('pictures');

fileSystem.cd('documents');
fileSystem.touch('document1.txt');
fileSystem.touch('document2.txt');


fileSystem.cd('/');
fileSystem.cd('pictures');
fileSystem.touch('picture1.png');


fileSystem.cd('/');
console.log(fileSystem.ls(true));
// Output:
// Contents of directory root:
// documents
// pictures
// Contents of directory documents:
// document1.txt
// document2.txt
// Contents of directory pictures:
// picture1.png

fileSystem.cd('documents');
fileSystem.rm('document1.txt');

fileSystem.cd('/');
console.log(fileSystem.ls(true));
// Output:
// Contents of directory root:
// documents
// pictures
// Contents of directory documents:
// document2.txt
// Contents of directory pictures:
// picture1.png
