import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </>
  );
}

export default App;
