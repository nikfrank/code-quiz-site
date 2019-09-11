import React from 'react';
import './App.css';

import CodeBlock from './CodeBlock';

import network from './network';

class App extends React.Component {

  state = {
    examples: [],
    response: null,
    results: [],
  }

  componentDidMount(){
    network.loadExamples()
           .then(examples => this.setState({ examples, currentExample: 0 }));
  }

  respond = (i)=> {
    if( this.state.response !== null ) return;

    this.setState({
      response: i,
      results: this.state.results.concat({
        example: this.state.currentExample,
        isCorrect: this.state.examples[ this.state.currentExample ].correct === i,
      }),
    });

    setTimeout(()=> this.setState({
      currentExample: (this.state.currentExample + 1) % this.state.examples.length,
      response: null,
    }), 4000);
  }

  render(){
    const {
      code,
      answers,
      correct,
    } = this.state.examples[ this.state.currentExample ] || {};

    if( !code ) return <div/>;

    const correctAnswers = this.state.results.filter(result => result.isCorrect).length;

    const wrong = (this.state.results.length - correctAnswers) / (this.state.results.length || 1);
    const redness = Math.floor( 15 * wrong ).toString(16);

    const right = correctAnswers / (this.state.results.length || 1);
    const greenness = Math.floor( 15 * right ).toString(16);

    return (
      <div className="App">
        <header className="App-header">

          <div className='results' style={{
              color: '#'+redness+greenness+'0',
            }}>
            {correctAnswers}
            /
            {this.state.results.length}
          </div>

          <div className='code'>
            <CodeBlock code={code} />
          </div>

          <div className='answers'>
            {
              answers.map((answer, i)=> (
                <div key={i}
                     className={'answer '+(
                       (this.state.response !== i) ? '' :
                       (correct === i) ?
                         'correct' : 'incorrect'
                     ) +' '+ (
                       (this.state.response !== null) && (correct === i) ?
                         'glow-correct' : ''
                     )}
                     onClick={()=> this.respond(i)}>
                  <CodeBlock code={ (typeof answer === 'string' ? (
                      JSON.stringify(answer)
                    ) : (
                      answer.toString()
                    ))} />
                </div>
              ))
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
