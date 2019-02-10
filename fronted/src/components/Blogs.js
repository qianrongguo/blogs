import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Blog from "./Blog";

export default class Blogs extends Component {
    // static propTypes = {
    //     loadingLabel: PropTypes.string.isRequired,
    //     pageCount: PropTypes.number,
    //     renderItem: PropTypes.func.isRequired,
    //     items: PropTypes.array.isRequired,
    //     isFetching: PropTypes.bool.isRequired,
    //     onLoadMoreClick: PropTypes.func.isRequired,
    //     nextPageUrl: PropTypes.string
    // }

    // static defaultProps = {
    //     isFetching: true,
    //     loadingLabel: 'Loading...'
    // };


    constructor(props) {
        super(props);

        this.state = {
            datas: null,
            isFetching: true
        };
    }


    componentDidMount() {
        fetch('http://localhost:3000/blogs')
            .then(response => response.json())
            .then(data => this.setState({datas: data, isFetching: false}));
    }


    render() {
        const isFetching = this.state.isFetching;
        console.log(this.state.datas)
        return (
            <div>
                {isFetching ? (
                    <p>343</p>

                ) : (
                    <div>{this.state.datas.map((data, index) => { return <Blog data={data} key={index}/>})}</div>

                )}
            </div>)
    }


}
