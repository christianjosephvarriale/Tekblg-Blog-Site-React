import React, { Component } from 'react';

import styles from '../css/blog.module.css';
import '../css/slick-slider.css';
import { NavLink } from 'react-router-dom';

import LazyLoad from 'react-lazyload'
import Avatar from '@material-ui/core/Avatar';

import { connect } from 'react-redux';
import { fetchPost } from '../actions/postActions';

import Skeleton from '@material-ui/lab/Skeleton';

const colorArray = ['#283593','#c62828', '#0277BD', '#00695C', '#558B2F', '#F9A825', '#EF6C00', '#4E342E', '#37474F'];

const generateColor = () => { return colorArray [ Math.round(Math.random() * (colorArray.length - 1)) ] }

class FeaturedBlogPost extends Component {
    render() {
        const state = this.props;
        const escaped_title = state.title.replace(/\./g,'&#46;').replace(/\//g,'&#47;')

        // data hasn't arrived
        if (Object.keys(state).length === 0 && state.constructor === Object) {
            return ( <Skeleton variant="rect" width={210} height={118} /> )
        } else {
            const headerImg = state.headerImg;
            const generateInitials = () => {
                let names = state.author.split(" ");
                let initials = ""
                names.forEach(e => {
                    initials += e[0].toUpperCase()
                });
                return initials
            }
            return (
                <div className={'featured-slide'}>
                    <div className={'entry'}>
                        <LazyLoad>
                        <div className={'entry-background'} style={{ backgroundImage: 'url(' + headerImg + ')' }}></div></LazyLoad>
                        
                        <div className={'entry-content'}>
                            <span className={'entry-category'}>{state.catagory}</span>

                            <h1><NavLink to={`/blog/article/${encodeURI(state.catagory)}/computerengineering/${state.id}`}>{state.title}</NavLink></h1>

                            <div className={'entry-info'}>
                                <div className={'entry-profile-pic'}>
                                    <Avatar style={{backgroundColor: generateColor() }}> {generateInitials()} </Avatar>
                                </div>
                                <ul className={'entry-meta'}>
                                    <li>{state.author}</li>
                                    <li>{state.date}</li>
                                </ul>
                            </div>
                        </div> 
                    </div> 
            </div> 
            )
        }
    }
}

const mapStateToProps = state => (
    { state: state.BlogReducer.currPost }
)

export default connect(mapStateToProps, { fetchPost })(FeaturedBlogPost);