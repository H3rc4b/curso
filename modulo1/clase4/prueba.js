        var Metros = true;

        Metros = prompt('Hola que distancia en Metros desea recorrer?', '');
        if (Metros<=1000){
            document.write('Si vas a viajar ');
            document.write(Metros);
            document.write(' Mts. ');
            document.write('te recomiendo que lo hagas a pie ');
        }
 else if (Metros>1000 && Metros<=10000){
            document.write('Si vas a viajar ');
            document.write(Metros);
             document.write(' Mts. ');
             document.write('te recomiendo que lo hagas en Bicicleta ');
            }
            else if (Metros>10000 && Metros<=30000){
                document.write('Si vas a viajar ');
                document.write(Metros);
                 document.write(' Mts. ');
                 document.write('te recomiendo que lo hagas en colectivo ');
                }
                else if (Metros>30000 && Metros<=100000){
                    document.write('Si vas a viajar ');
                    document.write(Metros);
                     document.write(' Mts. ');
                     document.write('te recomiendo que lo hagas en Auto ');
                    }
                    else if (Metros>100000){
                        document.write('Si vas a viajar ');
                        document.write(Metros);
                         document.write(' Mts. ');
                         document.write('te recomiendo que lo hagas en Avion ');
                        }
            