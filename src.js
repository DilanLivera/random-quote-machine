class App extends React.Component {
  static defaultProps = {
    quoteList: [{
      quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
      author: "Ayn Rand"
    },
    {
      quote: "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
      author: "A. J. Liebling"
    },
    {
      quote: "This book fills a much-needed gap.",
      author: "Moses Hadas"
    },
    {
      quote: "A mathematician is a device for turning coffee into theorems",
      author: "Paul Erdos"
    },
    {
      quote: "The only difference between me and a madman is that I'm not mad.",
      author: "Salvador Dali"
    },
    {
      quote: "Never interrupt your enemy when he is making a mistake.",
      author: "Napoleon Bonaparte"
    },
    {
      quote: "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
      author: "Frank Lloyd Wright"
    }]
  }
  constructor(props) {
    super(props);
    this.state = this.getRandomQuote();
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomQuote(){
    let { quoteList } = this.props;
    let randIdx = Math.floor(Math.random()* quoteList.length);

    return quoteList[randIdx];
  }

  setNewQuote(){
    let randQuote = this.getRandomQuote();
    this.setState(randQuote);
  }

  handleClick() {
    this.setNewQuote();
  }

  render() {
    const { quote, author } = this.state;
    return (
      <div id="quote-box">
        <p id="text">{ quote }</p>
        <p id="author">{ author }</p>
        <button id="new-quote" onClick={ this.handleClick }>New Quote</button>
        <button id="tweet-quote">Tweet Quote</button>
      </div>
    );
  }
}

//attch the root
ReactDOM.render(<App />, document.getElementById('root'));