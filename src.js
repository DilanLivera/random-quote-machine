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
    const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote} - ${author}`
    return (
      <div id="quote-box">
        <blockquote class="blockquote text-center">
          <p class="mb-0"  id="text">{ quote }</p>
          <footer class="blockquote-footer"><cite title="Source Title" id="author">{ author }</cite></footer>
        </blockquote>
        <div className="button-list">
          <button id="new-quote" onClick={ this.handleClick } className="btn btn-info">New Quote</button>
          <a id="tweet-quote" className="btn btn-info" href={ twitterLink } >Tweet Quote</a>
        </div>
      </div>
    );
  }
}

//attch the root
ReactDOM.render(<App />, document.getElementById('root'));