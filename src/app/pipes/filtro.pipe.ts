import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[], 
            texto: string = '',
            columna: string = 'title'
          ): any[] {

    if ( texto === '' ) {
      return [];
    }

    if ( !arreglo ) {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();
    
    return arreglo.filter(
      item => item.name.toLowerCase().includes( texto )
    );
  }

}
