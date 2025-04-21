interface GreetingProps {
    name: string;
  }
  
  // GreetingコンポーネントにPropsの型を指定
  function Greeting({ name }: GreetingProps) {
    return <h1>Hello, {name}!</h1>;
  }
  
  export default Greeting;