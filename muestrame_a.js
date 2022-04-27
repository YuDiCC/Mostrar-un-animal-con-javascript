var menu = "MENU \n";
menu+="1.Pollito\n";
menu+="2.Perro\n";
menu+="3.Pez\n";
menu+="4.Alce\n";
menu+="5.Salir\n";
menu+="Ingrese una opcion\n\n"

var cod =0;

do{
    var cod=parseInt(prompt(menu));
    switch(cod){
        case 1:
            document.write(`
            ¡ELEGISTE A UN POLLITO!
            >o)
            (_>
            `)
            
        break;

        case 2:
            document.write(`
            ¡ELEGISTE A UN PERRO!
            ,-.___,-.
            |__   __|
              )O_O(
             { (_) }
              *-^-* 
              `)
        break;

        case 3:
            document.write(`    
            ¡ELEGISTE A UN PEZ! 
                _
              ><_> 
              `)
        break;

        case 4:
            document.write(` 
            ¡ELEGISTE A UN ALCE!
             ___            ___
            /   )          /   |
            |_   |        /  __/
             _|   |      /  /__
             |___  |____/   __/
                 |_       _/
                   | @ @  |_
                   |
                 _/     /|
                /o)  (o/| |_
                |_____/ /
                  |____/
            
              `)
        break;

        default: alert("¡EL ANIMAL NO EXISTE!");
    }

}while(cod!=5);
