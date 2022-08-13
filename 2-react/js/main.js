class App extends React.Component {
    constructor() {
        super();

        this.state = {
            searchKeyword: "",    
        }
    }

    render() {
        return (
            <>
                <header>
                    <h2 className="container">검색</h2>
                </header>
                <div className="container">
                    <form onSubmit={event => this.handleSubmit(event)}>
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요"
                            autoFocus
                            value={this.state.searchKeyword}
                            onChange={event => this.handleChangeInput(event)}
                        />
                        {this.state.searchKeyword.length > 0 && (
                            <button type="reset" className="btn-reset"></button>
                        )}
                    </form>
                </div>
            </>
        )
    }

    handleChangeInput(event) {
        this.setState({
            searchKeyword: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('TODO: handleSubmit', this.state.searchKeyword)
    }
}

ReactDOM.render(<App />, document.querySelector("#app"))