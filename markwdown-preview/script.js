class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  writing(event) {
    this.setState({
      content: event.target.value
    });
  }

  marking(){
    return {__html: marked(this.state.content)}
  }
  render() {
    return (
      <section>
        <div className="col-md-6">
          <textarea onChange={this.writing.bind(this)}>
          </textarea>
        </div>

        <div className="col-md-6" id="markdown">
          <div dangerouslySetInnerHTML={this.marking()}>
          </div>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<Editor/>, document.getElementById('app'));
