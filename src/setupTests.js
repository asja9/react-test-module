//Creo este archivo para poder extender jest
//import '@testing-library/jest-dom';


/*Para poder realizar pruebas facilmente a los componentes de React,
aun no esta disponible para React 17, asi que voy usar un modulo no oficial
*/
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Para visualizar mas facilmente
import {createSerializer} from 'enzyme-to-json';
 
Enzyme.configure({ adapter: new Adapter() });

//Configuracion de enzyme to json
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));