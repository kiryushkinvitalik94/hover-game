import "../styles/globals.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import modesReducer from "../components/modes/store/reducer";
import infoPopUpReducer from "../components/common/infoMessage/store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import Layout from "../components/common/layout/layout";

function MyApp({ Component, pageProps }) {
  const reducers = combineReducers({
    modes: modesReducer,
    infoPopUp: infoPopUpReducer,
  });

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
