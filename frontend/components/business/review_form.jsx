import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToBusinessShow = this.navigateToBusinessShow.bind(this);
    }

    componentDidMount() {
        this.props.fetchBusiness(this.props.match.params.businessId);
        this.setState({ ...this.props.review });
    }

    componentDidUpdate(preProps) {
        if (preProps.review !== this.props.review) { this.setState({ ...this.props.review }) }
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value})
    }


    navigateToBusinessShow() {
        const url = `/biz/${this.props.match.params.businessId}`;
        this.props.history.push(url);
    }

    handleSubmit(e){
        e.preventDefault();

        const pojo = {
            body: this.state.body,
            rating: this.state.rating,
            user_id: this.props.currentUser.id,
            business_id: this.props.match.params.businessId
        }

        this.props.action(pojo).then(() => this.navigateToBusinessShow());

    }




    render(){


        const business = this.props.businesses[this.props.match.params.businessId];
        

        if (business === undefined) {return <div> </div> };

        return (
            <div>

                <div className="login-header-index">
                    <Link to={'/'}>
                        <img className="login-logo" src="https://i.imgur.com/O22tB8P.png" />
                    </Link>
                </div >
                <form onSubmit={this.handleSubmit}>
                    <div className="review-form-container-center">

                        <div className="review-form-container">
                            <div className="review-form-title"><Link to={`/biz/${business.id}`}>{business.name}</Link></div>
                
                            <textarea className="review-form-body" value={this.state.body} onChange={this.update('body')}></textarea>
                            <button className="review-form-button" onClick={this.handleSubmit} >Post Review</button>
                        </div>
                    </div>
                    
                </form>
           
        
            </div>

    
        )

    }

}

export default withRouter(ReviewForm);