import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Configure enzyme to use the adapter for React 16
Enzyme.configure({ adapter: new EnzymeAdapter() });
