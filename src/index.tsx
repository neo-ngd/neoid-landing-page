import 'antd/dist/antd.less';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import './styles/index.css';
import { App } from './App';
import { reportWebVitals } from './reportWebVitals';
import { IN_PRODUCTION } from './utils/env';

ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (!IN_PRODUCTION) {
	// eslint-disable-next-line no-console
	reportWebVitals(console.log);
}
