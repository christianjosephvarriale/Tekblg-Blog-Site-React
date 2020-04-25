// @flow
import * as React from 'react';
import page from '../img/404.png';
import { connect } from 'react-redux';

class Page404 extends React.Component {
  render() {
    const { props } = this;
    return (
        <div>
            <div style={{padding:30, marginTop: 60,display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                <h1>Oops, you've got a 404 Error</h1>
                <p style={{margin:0}}>Send us a message and let us know what you were looking for</p>
            </div>
            <img src={page} />
        </div>
        );
  };
};


const mapStateToProps = state => ({
    mobile: state.AppReducer.mobile
})

export default connect(mapStateToProps, { })(Page404);