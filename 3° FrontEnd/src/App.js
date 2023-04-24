import './App.css';
import AppRouter from "./AppRouter";
import FooterComponent from "./app/components/features/footerComponent/footerComponent";

function App() {
  return (
    <div id='app'>
      <AppRouter id="body"/>
      <FooterComponent id="footer"/>
    </div>
  );
}

export default App;
