import React from 'react';
import { Row, Col, Card} from 'react-bootstrap';

import '../App.css';
class Repo extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const data = this.props.data;
        return (
            <Card style={{width:'18rem', margin:'1rem'}}>
                <Card.Body>
                    <Card.Subtitle>
                        <Card.Link href={data.html_url}>
                            {data.name}
                        </Card.Link>
                    </Card.Subtitle>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                    <div className="row">
                    <Card.Link className="text-small" href={"https://github.com/"+data.full_name+"/stargazers"}>Stars: {data.stargazers_count}</Card.Link>
                    <Card.Link className="text-small" href={"https://github.com/"+data.full_name+"/network/members"}>Forks: {data.forks_count}</Card.Link>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}
class RepoList extends React.Component {
    constructor(props) {
        super(props);
        this.username = "SanjayDevTech";
        this.state = {repos:[]};
    }

    componentDidMount() {
        fetch("https://api.github.com/users/"+this.username+"/repos?sort=pushed&per_page=6")
        .then(res => res.json())
        .then(
            (result) => {
                // console.log(result[0]);
                this.setState(
                    {
                        repos:result
                    }
                )
            }
        )
    }

    render() {
        return (
            <div id="repositories" style={{marginTop:'10px'}} className="container text-center Repo">
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Repositories</h3>
                    </div>
                    <div className="col-sm-12 List">
                        <Row>
                            {this.state.repos.map((repo,index)=>(
                                <Col
                                xs={{ span: 12 }}
                                sm={{ span: 6 }}
                                lg={{ span: 4 }} key={index}>
                                    <Repo data={repo} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
export default RepoList;