
import Contact from './assets/Contact'
import Hello from './assets/Hello'
import Counter from './assets/Counter'


function App() {
  //console.log('App component');
  const helloData = [
    {name: 'Prangthong' , message: 'Hi there'},
    {name: 'Prangthong' , message: 'Hello...'}
  ];

  return (
    <div classname='App'>
      <Counter />
      {helloData.map((data,index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email="prangthong250947@gmail.com" phone="0901244647" />
    </div>
  );
}

export default App;
