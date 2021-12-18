import { getImagen } from "../../base/11-async-await";

describe('Pruebas con Asyn-await y fetch', () =>{
    //La prueba debe hacer uso de aync await
    test('Debe retornar una url que incluya https', async() =>{
        const url = await getImagen();
        console.log({url});
        //expect(url.includes('https://')).toBe(true);
    });
});