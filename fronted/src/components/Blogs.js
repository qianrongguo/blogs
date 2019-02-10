import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Blog from "./Blog";

export default class Blogs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datas: null,
            isFetching: true,
            isDeleted: false,
        };

        this.handleDelete = this.handleDelete.bind(this)
    }


    componentDidMount() {
        fetch('http://localhost:3000/blogs')
            .then(response => response.json())
            .then(data => this.setState({datas: data, isFetching: false}));
    }



// delete blogs
    handleDelete(blogID) {
        console.log("------")
        const baseUrl = "http://localhost:3000/blogs";
        fetch(baseUrl + '/' + blogID, {
            method: 'delete'
        }).then(response => {
            console.log(response);
            fetch('http://localhost:3000/blogs')
                .then(response => response.json())
                .then(data => this.setState({datas: data, isFetching: false}));
            // this.setState({isFetching: false})
        }).then(()=>{
            // this.setState({isDeleted: false})

        }).

        catch(err => console.log(err))

    }




    render() {
        const isFetching = this.state.isFetching ;
        console.log(this.state.datas)
        // console.log(this.state.isDeleted,this.state.isFetching);
        return (
            <div>
                {isFetching ? (
                    <p>343</p>

                ) : (
                    <div>{this.state.datas.map((data, index) => {
                        return <Blog data={data} key={index} action={this.handleDelete}  />
                    })}</div>

                )}
            </div>)
    }


}
