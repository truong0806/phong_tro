import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
    let store, persistor;

    beforeEach(() => {
        store = {};
        persistor = {};
    });

    it('should render correctly', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
