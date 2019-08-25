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
    }],
    colors: ["lightskyblue", "lightcoral", "slateblue",
             "lightpink", "lightgreen", "lightsalmon", 
             "lightseagreen", "lightsteelblue", "mediumturquoise", 
             "mediumpurple", "tomato", "teal"]
  }
  constructor(props) {
    super(props);
    this.state = { ...this.getRandomQuote(), color: "lightgreen" };
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomQuote(){
    let { quoteList } = this.props;
    let randIdx = Math.floor(Math.random()* quoteList.length);

    return quoteList[randIdx];
  }

  setNewQuote(){
    let randQuote = this.getRandomQuote();
    let { colors } = this.props;
    let color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ ...randQuote, color });
  }

  handleClick() {
    this.setNewQuote();
  }

  render() {
    const { quote, author, color } = this.state;
    const twitterLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote} - ${author}`;
    const styles = {
      quoteAuthorColor: {
        color
      },
      backgroundColor: {
        backgroundColor: color,
        borderColor: color
      }
    };

    //set body background color
    let body = document.querySelector("body");
    // body.style.backgroundColor = color;
    body.style.backgroundColor = color;
    console.log(body.style.bgColor);

    return (
      <div id="quote-box">
        <blockquote className="blockquote text-center">
          <p className="mb-0"  id="text" style={ styles.quoteAuthorColor }>{ quote }</p>
          <footer className="blockquote-footer" style={ styles.quoteAuthorColor }><cite title="Source Title" id="author" >{ author }</cite></footer>
        </blockquote>
        <div className="button-list">
          <button id="new-quote" style={ styles.backgroundColor } onClick={ this.handleClick } className="btn btn-info">New Quote</button>
          <a id="tweet-quote" className="btn btn-info" href={ twitterLink } style={ styles.backgroundColor }>Tweet Quote</a>
        </div>
      </div>
    );
  }
}

//attch the root
ReactDOM.render(<App />, document.getElementById('root'));