import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/StarRating.css'
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import AuthService from '../services/AuthService'
import NavigationPages from './NavigationPages'
import '../css/NavigationPages.css';
import withAuth from './withAuth'

const Auth = new AuthService()

const apiUrl = "http://localhost:3000"

class NewReview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        area_rating: 0,
        area_id: 0,
        parking: 0,
        cleanliness: 0,
        safety: 0,
        dining: 0,
        price: 0,
        family_friendly: false,
        review_text: '',
        user_id: Auth.getUserId()
      },
      reviews: [],
      newReviewSuccess: false,
      errors: null,
      user: null
    }
  }

  componentWillMount(){
    const userId = Auth.getUserId()
    Auth.fetch(`http://localhost:3000/users/${userId}`).then( res => {
      this.setState({ user: res })
    })
  }

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');

  }


  handleChange(event) {
      const formState = Object.assign({}, this.state.form)
      formState[event.target.name] = event.target.value
      this.setState({form: formState})
    }

  onStarClick(nextValue, prevValue, name) {
      if (name == "area_rating") {
        this.setState({area_rating: nextValue})
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
      else if (name == "parking") {
        this.setState({parking: nextValue});
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
      else if (name == "cleanliness") {
        this.setState({cleanliness: nextValue});
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
      else if (name == "dining") {
        this.setState({dining: nextValue});
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
      else {
        this.setState({safety: nextValue});
        const formState = Object.assign({}, this.state.form)
        formState[name] = nextValue
        this.setState({form: formState})
      }
    }

    handleSubmit(e) {
      e.preventDefault();

      fetch(`${apiUrl}/reviews`, {
          body: JSON.stringify({review: this.state.form}),
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST"
        })
      .then((res) => {
        return Promise.all([res.status, res.json()])
      })
      .then((res) => {
        if (res[0] === 422) {
          this.setState({errors: res[1]})
        } else {
          // const reviews = Object.assign([], this.state.reviews)
          const { reviews } = this.state

          reviews.push(res[1])

          this.setState({
            errors: null,
            newReviewSuccess: true,
            reviews,
          });
        }
      });
    }

    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }

    fileChangeHandler(event){
      const file = event.target.files[0]
      this.getBase64(file).then( (fileString) => {
        const formState = Object.assign({}, this.state.form)
        formState.avatar_base = fileString
        this.setState({form: formState})
      })
    }

    errorsFor(attribute){
      var errorString = ""
      if(this.props.errors && this.props.errors[attribute]){
        const errors = this.props.errors[attribute]
        if(errors){
          errorString = errors.join(", ")
        }
      }
      return errorString === "" ? null : errorString
    }

  render() {

    return (
      <div>
      <NavigationPages />
      <div className="center">
        <div className="card">
          <h1 className = "title">Submit Your Review</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <div> CHOOSE YOUR AREA </div>
              <select name='area_id' onChange={this.handleChange.bind(this)}>
                <option>Select Area</option>
                <option value={1}>East Village</option>
                <option value={2}>Little Italy</option>
                <option value={3}>North Park</option>
                <option value={4}>Hillcrest</option>
                <option value={5}>Gaslamp</option>
                <option value={6}>Coronado</option>
                <option value={7}>Shelter Island Area</option>
                <option value={8}>Ocean Beach</option>
                <option value={9}>Loma Portal</option>

              </select>
            <div>
        <h3>Rate the Area: {this.state.area_rating}/5</h3>
        <StarRatingComponent
          name="area_rating"
          starCount={5}
          value={this.state.area_rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Parking: {this.state.parking}/5</h3>
        <StarRatingComponent
          name="parking"
          starCount={5}
          value={this.state.parking}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Cleanliness: {this.state.cleanliness}/5</h3>
        <StarRatingComponent
          name="cleanliness"
          starCount={5}
          value={this.state.cleanliness}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Safety: {this.state.safety}/5</h3>
        <StarRatingComponent
          name="safety"
          starCount={5}
          value={this.state.safety}
          onStarClick={this.onStarClick.bind(this)}
        />
        <h3>Rate the Dining: {this.state.dining}/5</h3>
        <StarRatingComponent
          name="dining"
          starCount={5}
          value={this.state.dining}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>

           <input
              className="form-item"
              placeholder="$ - Price per Person Spent"
              name="price"
              type="text"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.price}
            />
            <div>
            Family Friendly? <nbs />
            <input type="radio" name="family_friendly" value="yes"  /> YES <nbs />
            <input type="radio" name="family_friendly" value="no"  /> NO
            </div>


            <div>Write your review here: </div>
            <input
               className="form-item"
               placeholder="Write Your Review Here"
               name="review_text"
               type="textarea"
               onChange={this.handleChange.bind(this)}
               value={this.state.form.review_text}
             />
            <br />
            <input
              type="file"
              onChange={this.fileChangeHandler.bind(this)}
            />
            <button
              className="form-submit"
              onClick={this.handleSubmit.bind(this)}
            >Submit Your Review</button>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default withAuth(NewReview)
