import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import '@/style/app.scss'

const root=createRoot(document.getElementById('app'));
root.render(<App/>);
